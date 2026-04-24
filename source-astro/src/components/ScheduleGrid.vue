<template>
  <div class="schedule-grid mt-4" v-if="days.length">
    <!-- App Download Link -->
    <div class="alert alert-info d-flex justify-content-between align-items-center mb-4 shadow-sm border-0 bg-theme-dark text-white p-3 rounded">
      <div class="d-flex align-items-center">
        <i class="mdi mdi-cellphone-arrow-down fs-3 me-3"></i>
        <div>
          <div class="fw-bold">Take the schedule with you!</div>
          <div class="small d-none d-md-inline opacity-75">Download the official event app for live updates and personalized schedule.</div>
        </div>
      </div>
      <a :href="appLink" target="_blank" class="btn btn-primary text-white fw-bold px-4 shadow-sm">
        <i class="mdi mdi-download me-1"></i> Get App
      </a>
    </div>

    <div v-for="(day, dayIndex) in days" :key="day.date" class="mb-5 day-section">
      <h2 class="mb-4 border-bottom pb-2 text-dark fw-bold">{{ formatDate(day.date) }}</h2>
      
      <div class="position-relative schedule-wrapper">
        <!-- Sticky Navigation Scroll Buttons (Centered in Viewport) -->
        <div class="sticky-btn-container d-none d-lg-block">
          <div class="sticky-btn-inner">
            <button class="btn btn-primary rounded-circle shadow-lg scroll-btn start-0" 
                    @click="scrollTable('left', dayIndex)"
                    title="Scroll Left">
              <i class="mdi mdi-chevron-left fs-3"></i>
            </button>
            <button class="btn btn-primary rounded-circle shadow-lg scroll-btn end-0" 
                    @click="scrollTable('right', dayIndex)"
                    title="Scroll Right">
              <i class="mdi mdi-chevron-right fs-3"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Scroll Indicator Hint -->
        <div class="scroll-hint d-md-none shadow-sm rounded-pill bg-primary text-white px-3 py-1 small animate-pulse">
          Scroll right for rooms <i class="mdi mdi-arrow-right ms-1"></i>
        </div>

        <div class="table-responsive shadow-sm rounded border scroll-container" :ref="el => setScrollRef(el, dayIndex)">
          <table class="table table-bordered border-light-subtle schedule-table mb-0">
            <thead class="bg-light sticky-top shadow-sm">
              <tr>
                <th class="time-column py-3 text-center bg-light">Time</th>
                <th v-for="room in rooms" :key="room.id" class="text-center room-column py-3 bg-light border-start">
                  {{ room.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slot in day.slots" :key="slot.time" class="slot-row">
                <!-- Time Column -->
                <td class="time-cell fw-bold small text-muted align-top text-center p-0 border-end">
                  <div v-if="isThirtyMinuteMark(slot.time)" class="time-label py-3 px-1">
                    {{ formatTime(slot.time) }}
                  </div>
                </td>
                
                <template v-for="(room, roomIndex) in rooms" :key="room.id">
                  <!-- Plenum Session (Full Width) -->
                  <td v-if="isPlenumStart(slot.time, roomIndex)"
                      :rowspan="getSlotSpan(getSessionStartingAt(slot.time, room.id))"
                      :colspan="rooms.length"
                      class="p-1 align-top position-relative border-start session-td">
                    <div class="session-card p-3 border-start border-4 bg-light shadow-sm d-flex flex-column rounded-1 action h-100 border-secondary"
                         @click="openSession(getSessionStartingAt(slot.time, room.id))"
                         data-bs-toggle="modal" data-bs-target="#session-modal">
                      
                      <div class="d-flex justify-content-center align-items-center gap-3 mb-1">
                        <div class="small fw-bold text-muted time-badge">
                          <i class="mdi mdi-clock-outline me-1"></i>
                          {{ formatTime(getSessionStartingAt(slot.time, room.id).startsAt) }} - {{ formatTime(getSessionStartingAt(slot.time, room.id).endsAt) }}
                        </div>
                        <div class="badge bg-secondary text-white border border-secondary shadow-sm">
                          Plenum / All Area Event
                        </div>
                      </div>

                      <h4 class="mb-0 fw-bold text-dark text-center py-2">
                        {{ getSessionStartingAt(slot.time, room.id).title }}
                      </h4>
                    </div>
                  </td>

                  <!-- Regular Session Cell -->
                  <td v-else-if="getSessionStartingAt(slot.time, room.id) && !getSessionStartingAt(slot.time, room.id).isPlenum"
                      :rowspan="getSlotSpan(getSessionStartingAt(slot.time, room.id))"
                      class="p-1 align-top position-relative border-start session-td">
                    <div class="session-card p-3 border-start border-4 bg-white d-flex flex-column rounded-1 action h-100 shadow-sm border-primary"
                         @click="openSession(getSessionStartingAt(slot.time, room.id))"
                         data-bs-toggle="modal" data-bs-target="#session-modal">
                      
                      <div class="d-flex justify-content-between align-items-start mb-1">
                        <div class="small fw-bold text-muted time-badge">
                          <i class="mdi mdi-clock-outline me-1"></i>
                          {{ formatTime(getSessionStartingAt(slot.time, room.id).startsAt) }} - {{ formatTime(getSessionStartingAt(slot.time, room.id).endsAt) }}
                        </div>
                      </div>

                      <h6 class="mb-2 fw-bold text-dark session-title mb-auto">
                        {{ getSessionStartingAt(slot.time, room.id).title }}
                      </h6>
                      
                      <div class="speakers-list pt-2 mt-auto border-top border-light-subtle" v-if="getSessionStartingAt(slot.time, room.id).speakers?.length">
                         <div v-for="speakerId in getSessionStartingAt(slot.time, room.id).speakers" 
                              :key="speakerId"
                              class="speaker-link small text-primary d-inline-block me-3 py-1"
                              @click.stop="openSpeaker(speakerId)"
                              data-bs-toggle="modal" data-bs-target="#speaker-modal-schedule">
                           <i class="mdi mdi-account-circle-outline me-1"></i>{{ getSpeakerName(speakerId) }}
                         </div>
                      </div>
                    </div>
                  </td>
                  
                  <!-- Empty Cell -->
                  <td v-else-if="!isSlotCovered(slot.time, room.id, roomIndex)" class="empty-cell border-start"></td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Session Modal -->
    <div class="modal fade" id="session-modal" tabindex="-1" aria-labelledby="sessionModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div v-if="activeSession" class="modal-body p-4">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h2 class="text-dark fw-bold mb-0 pe-4" id="sessionModalLabel">{{ activeSession.title }}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-4 text-muted border-bottom pb-3">
              <div class="badge bg-primary text-white p-2 px-3">
                <i class="mdi mdi-map-marker me-1"></i>{{ activeSession.room }}
              </div>
              <div class="badge bg-light text-dark border p-2 px-3">
                <i class="mdi mdi-clock me-1"></i>{{ formatTime(activeSession.startsAt) }} - {{ formatTime(activeSession.endsAt) }}
              </div>
            </div>
            <div class="description fs-5 lh-base mb-4 text-secondary" style="white-space: pre-line">
              {{ activeSession.description }}
            </div>
            
            <template v-if="activeSession.speakers?.length">
              <hr />
              <h4 class="mb-3 text-dark fw-bold">Speakers</h4>
              <div class="d-flex flex-wrap gap-3">
                <div v-for="speakerId in activeSession.speakers" :key="speakerId" 
                     class="d-flex align-items-center action p-2 border rounded hover-bg-light transition"
                     @click="openSpeaker(speakerId)"
                     data-bs-toggle="modal" data-bs-target="#speaker-modal-schedule">
                  <img :src="getSpeaker(speakerId)?.profilePicture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(getSpeakerName(speakerId))" 
                       class="rounded-circle me-3 border border-2 border-primary shadow-sm" style="width: 50px; height: 50px; object-fit: cover;" />
                  <div>
                    <div class="fw-bold text-dark">{{ getSpeakerName(speakerId) }}</div>
                    <div class="small text-muted">{{ getSpeaker(speakerId)?.tagLine }}</div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Speaker Modal -->
    <div class="modal fade" id="speaker-modal-schedule" tabindex="-1" aria-labelledby="speakerModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div v-if="activeSpeaker" class="modal-body p-4">
            <div class="d-flex justify-content-between align-items-start mb-4">
              <div class="d-flex align-items-center">
                <img :src="activeSpeaker.profilePicture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(activeSpeaker.fullName)" 
                     class="rounded-circle me-3 border border-3 border-primary shadow" style="width: 80px; height: 80px; object-fit: cover;" />
                <div>
                  <h3 class="fw-bold mb-1 text-dark" id="speakerModalLabel">{{ activeSpeaker.fullName }}</h3>
                  <p class="text-muted small mb-2">{{ activeSpeaker.tagLine }}</p>
                  <div class="d-flex gap-3 fs-4">
                    <template v-for="link in activeSpeaker.links" :key="link.linkType">
                      <a :href="link.url" target="_blank" :title="link.linkType" class="text-primary hover-opacity">
                        <i class="mdi" :class="'mdi-' + getIcon(link.linkType)"></i>
                      </a>
                    </template>
                  </div>
                </div>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="bio bg-light p-3 rounded mb-4 small text-secondary" style="max-height: 200px; overflow-y: auto;">
              {{ activeSpeaker.bio }}
            </div>
            <hr />
            <h5 class="mb-3 text-dark fw-bold">Sessions</h5>
            <div class="list-group list-group-flush small">
              <div v-for="s in speakerSessions" :key="s.id" 
                   class="list-group-item list-group-item-action p-2 px-3 border rounded mb-2 shadow-sm"
                   @click="openSession(s)"
                   data-bs-toggle="modal" data-bs-target="#session-modal">
                <div class="fw-bold text-primary">{{ s.title }}</div>
                <div class="text-muted opacity-75">
                  <i class="mdi mdi-map-marker-outline me-1"></i>{{ s.room }} | 
                  <i class="mdi mdi-clock-outline ms-2 me-1"></i>{{ formatTime(s.startsAt) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else-if="error" class="py-5 text-center text-danger card shadow-sm mt-5">
    <div class="card-body py-5">
      <i class="mdi mdi-alert-circle-outline fs-1 mb-3 d-block"></i>
      <p class="fs-4">Failed to load schedule</p>
      <p class="small">{{ error }}</p>
      <button class="btn btn-outline-primary mt-3" @click="retry">Retry</button>
    </div>
  </div>

  <div v-else class="py-5 text-center text-muted card shadow-sm mt-5">
    <div class="card-body py-5">
      <div class="spinner-border text-primary mb-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="fs-4">Syncing with Sessionize...</p>
    </div>
  </div>
</template>

<script>
import { computed, nextTick, onMounted, reactive } from 'vue';
import { AppState } from '../AppState.js';
import SessionizeService from '../services/SessionizeService.js';

export default {
  setup() {
    const scrollContainers = reactive({});
    const sessions = computed(() => AppState.sessions || []);
    const rooms = computed(() => AppState.rooms.filter(r => sessions.value.some(s => String(s.roomId) === String(r.id))));
    const activeSession = computed(() => AppState.activeSession);
    const activeSpeaker = computed(() => AppState.activeSpeaker);
    const currentYear = computed(() => AppState.currentYear);
    const appLink = computed(() => AppState.appLink);
    const error = computed(() => AppState.error);

    const getTimeValue = (str) => str ? new Date(str).getTime() : 0;

    const days = computed(() => {
      const dayMap = {};
      sessions.value.forEach(s => {
        if (!s.startsAt || !s.endsAt) return;
        const date = s.startsAt.split('T')[0];
        if (!dayMap[date]) dayMap[date] = { date, sessions: [], minTime: s.startsAt, maxTime: s.endsAt };
        
        dayMap[date].sessions.push(s);
        if (getTimeValue(s.startsAt) < getTimeValue(dayMap[date].minTime)) dayMap[date].minTime = s.startsAt;
        if (getTimeValue(s.endsAt) > getTimeValue(dayMap[date].maxTime)) dayMap[date].maxTime = s.endsAt;
      });

      return Object.values(dayMap).map(day => {
        const slots = [];
        let current = new Date(day.minTime);
        const end = new Date(day.maxTime);
        current.setMinutes(Math.floor(current.getMinutes() / 15) * 15, 0, 0);
        while (current <= end) {
          slots.push({ time: current.toISOString() });
          current = new Date(current.getTime() + 15 * 60000);
        }
        return { ...day, slots };
      }).sort((a, b) => a.date.localeCompare(b.date));
    });

    const getSessionStartingAt = (time, roomId) => {
      const timeMs = getTimeValue(time);
      return sessions.value.find(s => 
        getTimeValue(s.startsAt) === timeMs && 
        String(s.roomId) === String(roomId)
      );
    };

    const getBootstrapModal = (id) => {
      if (typeof window === 'undefined') return null;
      const el = document.getElementById(id);
      if (!el) return null;
      const bootstrap = window.bootstrap;
      if (bootstrap) return bootstrap.Modal.getOrCreateInstance(el);
      return null;
    };

    onMounted(() => {
      if (typeof window !== 'undefined' && !window.bootstrap) {
         import('bootstrap').then(bs => {
           window.bootstrap = bs;
         });
      }
    });

    return {
      setScrollRef(el, index) {
        if (el) scrollContainers[index] = el;
      },
      rooms,
      days,
      activeSession,
      activeSpeaker,
      currentYear,
      appLink,
      error,
      retry() {
        localStorage.removeItem(AppState.STORAGE_KEY);
        SessionizeService.loadData();
      },
      isThirtyMinuteMark(time) {
        const date = new Date(time);
        return date.getMinutes() % 30 === 0;
      },
      getSessionStartingAt,
      isPlenumStart(time, roomIndex) {
        if (roomIndex !== 0) return false;
        const s = getSessionStartingAt(time, rooms.value[0]?.id);
        return s?.isPlenum || false;
      },
      getSlotSpan(session) {
        if (!session) return 0;
        const durationMins = (getTimeValue(session.endsAt) - getTimeValue(session.startsAt)) / 60000;
        return Math.max(1, Math.ceil(durationMins / 15));
      },
      isSlotCovered(time, roomId, roomIndex) {
        const timeMs = getTimeValue(time);
        const isCoveredByRegular = sessions.value.some(s => 
          String(s.roomId) === String(roomId) && 
          getTimeValue(s.startsAt) <= timeMs && 
          getTimeValue(s.endsAt) > timeMs
        );
        if (isCoveredByRegular) return true;
        
        return sessions.value.some(s => 
          s.isPlenum && 
          getTimeValue(s.startsAt) <= timeMs && 
          getTimeValue(s.endsAt) > timeMs
        );
      },
      getSpeaker(id) {
        return AppState.speakers.find(s => String(s.id) === String(id));
      },
      getSpeakerName(id) {
        return this.getSpeaker(id)?.fullName || 'Unknown';
      },
      speakerSessions: computed(() => {
        if (!activeSpeaker.value) return [];
        return sessions.value.filter(s => (s.speakers || []).map(sp => String(sp)).includes(String(activeSpeaker.value.id)));
      }),
      async openSession(session) {
        AppState.activeSession = session;
        await nextTick();
        const modal = getBootstrapModal('session-modal');
        modal?.show();
      },
      async openSpeaker(speakerId) {
        AppState.activeSpeaker = this.getSpeaker(speakerId);
        await nextTick();
        const modal = getBootstrapModal('speaker-modal-schedule');
        modal?.show();
      },
      formatTime(str) {
        if (!str) return '';
        return new Date(str).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      },
      formatDate(str) {
        const d = new Date(str + 'T12:00:00');
        return d.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      },
      getIcon(type) {
        const map = { Twitter: 'twitter', LinkedIn: 'linkedin', Blog: 'rss', Website: 'earth', GitHub: 'github' };
        return map[type] || 'earth';
      },
      scrollTable(direction, index) {
        const el = scrollContainers[index];
        if (!el) return;
        const amount = direction === 'right' ? 400 : -400;
        el.scrollBy({ left: amount, behavior: 'smooth' });
      }
    };
  }
};
</script>

<style scoped>
.schedule-table {
  table-layout: auto;
  min-width: 1400px;
  border-collapse: separate;
  border-spacing: 0;
  border: none;
}

.time-column {
  width: 100px;
  background-color: #f8f9fa;
  position: sticky;
  left: 0;
  z-index: 1020;
  border-right: 2px solid #dee2e6 !important;
}

.room-column {
  min-width: 260px;
  background-color: #f8f9fa;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  border-left: 1px solid #dee2e6 !important;
}

.time-cell {
  background-color: #f8f9fa;
  position: sticky;
  left: 0;
  z-index: 1010;
  border-right: 2px solid #dee2e6 !important;
  border-bottom: 1px solid #dee2e6 !important;
}

.slot-row {
  height: 50px;
}

.time-label {
  font-size: 0.9rem;
  color: #212529;
  font-weight: 600;
}

.session-td {
  height: 1px;
  border-left: 1px solid #dee2e6 !important;
  border-bottom: 1px solid #dee2e6 !important;
}

.session-card {
  font-size: 0.9rem;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  border-radius: 6px;
  margin: 1px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.session-card:hover {
  background-color: #fdfdff !important;
  transform: translateY(-3px);
  z-index: 5;
  box-shadow: 0 12px 20px rgba(0,0,0,0.12) !important;
}

.time-badge {
  font-size: 0.75rem;
  background: rgba(0,0,0,0.03);
  padding: 2px 6px;
  border-radius: 4px;
}

.session-title {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  margin-top: 6px;
}

.speaker-link {
  font-weight: 500;
  text-decoration: none;
  color: var(--bs-primary);
}

.speaker-link:hover {
  text-decoration: underline;
  color: var(--bs-primary-dark) !important;
}

.empty-cell {
  background-color: #fafafa;
  border-left: 1px solid #dee2e6 !important;
  border-bottom: 1px solid #dee2e6 !important;
}

.action {
  cursor: pointer;
}

.transition {
  transition: all 0.2s ease;
}

.hover-bg-light:hover {
  background-color: #f8f9fa;
}

/* Sticky Button Logic */
.sticky-btn-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1060;
}

.sticky-btn-inner {
  position: sticky;
  top: 45vh; /* Center in viewport */
  width: 100%;
  height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.scroll-btn {
  pointer-events: auto; /* Re-enable clicks */
  width: 55px;
  height: 55px;
  opacity: 0.95;
  border: 3px solid white !important;
  background-color: var(--bs-primary) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.scroll-btn:hover {
  opacity: 1;
  transform: scale(1.1);
  background-color: #0056b3 !important;
}

.scroll-hint {
  position: absolute;
  top: -40px;
  right: 0;
  z-index: 10;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.animate-pulse {
  animation: pulse 2s infinite ease-in-out;
}

.table-responsive {
  scrollbar-width: auto;
  scrollbar-color: var(--bs-primary) #dee2e6;
  -webkit-overflow-scrolling: touch;
}

.table td {
  padding: 0;
  vertical-align: top;
}

@media (max-width: 768px) {
  .room-column {
    min-width: 240px;
  }
}
</style>
