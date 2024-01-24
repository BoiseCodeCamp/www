<template>
  <div class="schedule row m-auto p-md-3 mt-5">
    <div class="col-12 mb-5">
      <h2>Speakers</h2>
      <p class="m-0">
        <a class="border-top pt-1 small" href="/schedule" target="_blank" rel="noopener" title="Schedule">Schedule</a>
      </p>
    </div>
    <div class="col-12 speaker-deck">
      <div class="card-deck justify-content-center">
        <div class="card mb-4 p-0 col-sm-6 col-md-4 col-lg-2" v-for="speaker in speakers" :key="speaker.id">
          <speaker :speaker="speaker" />
        </div>
      </div>
    </div>
    <Modal class="w-100" id="speaker-modal">
      <div class="p-lg-4 m-0">
        <div v-if="speaker">
          <div class="d-flex">
            <img class="rounded img-fluid w-25 m-2 align-self-center"
              :src="speaker.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.fullName)}`"
              @error="(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.fullName)}`"
              :alt="speaker.fullName" />
            <div class="pl-3 mt-2 ms-2 border-left">
              <p class="m-0 fs-3">{{ speaker.fullName }}</p>
              <small>{{ speaker.tagLine }}</small>
              <p class="d-flex gap-4 mt-1 fs-5">
                <a v-for="link in speaker.links" :key="link.linkType" :href="link.url" target="_blank"
                  :title="link.linkType">
                  <i class="mdi mdi-earth" :class="'mdi-' + link.linkType.toLowerCase()"></i>
                </a>
              </p>
            </div>
          </div>
          <hr class="my-4" />
          <div class="mb-3 d-flex flex-wrap align-items-center justify-content-between">
            <small class="border text-secondary p-1 rounded">SESSIONS</small>
            <div class="text-muted d-md-block d-flex flex-column">
              <small>
                <i class="mdi  mdi-map-marker"></i>
                Room
              </small>
              <small class="ms-3">
                <i class="mdi  mdi-clock-o"></i>
                Time
              </small>
            </div>
          </div>
          <div class="sessions">
            <div class="session" v-for="session in speaker.sessions" :key="session.id">
              <session :session="session" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {

    function speakerModalHook() {
      try {
        const speakerModal = document.getElementById('speaker-modal')
        speakerModal.addEventListener('hidden.bs.modal', event => {
          AppState.speaker = null
        })
      } catch (error) {
        setTimeout(speakerModalHook, 1500)
      }
    }

    onMounted(() => {
      speakerModalHook()
    })

    return {
      speakers: computed(() => AppState.speakers),
      speaker: computed(() => AppState.speaker),
    };
  }
};
</script>

<style lang="scss">
.clip {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  .card {
    min-width: 215px;
  }
}
</style>
