import { AppState } from "../AppState.js";

const STORAGEKEY = AppState.STORAGE_KEY;
const APIKEY = AppState.SESSIONIZE_KEY;

async function _fetchData() {
  console.log('Fetching Sessionize data...');
  try {
    const resAll = await fetch(`https://sessionize.com/api/v2/${APIKEY}/view/All`);
    if (!resAll.ok) throw new Error(`Fetch All failed: ${resAll.status}`);
    const dataAll = await resAll.json();
    
    const resGrid = await fetch(`https://sessionize.com/api/v2/${APIKEY}/view/GridSmart`);
    if (!resGrid.ok) throw new Error(`Fetch GridSmart failed: ${resGrid.status}`);
    const dataGrid = await resGrid.json();
    
    const combined = {
      ...dataAll,
      gridData: dataGrid,
      cached: Date.now() + 1000 * 60 * 60 * 24
    };
    
    localStorage.setItem(STORAGEKEY, JSON.stringify(combined));
    return combined;
  } catch (err) {
    console.error('Sessionize fetch error:', err);
    throw err;
  }
}

export default class SessionizeService {
  static async loadData() {
    AppState.loading = true;
    AppState.error = null;
    
    try {
      let data = null;
      try {
        const cached = localStorage.getItem(STORAGEKEY);
        if (cached) {
          data = JSON.parse(cached);
        }
      } catch (e) {}

      if (!data || data.cached < Date.now() || !data.gridData) {
        data = await _fetchData();
      }

      const rooms = data.rooms || [];
      const speakers = data.speakers || [];
      const gridData = data.gridData || [];
      
      const allSessions = [];
      if (Array.isArray(gridData)) {
        gridData.forEach(day => {
          if (day && Array.isArray(day.rooms)) {
            day.rooms.forEach(room => {
              if (room && Array.isArray(room.sessions)) {
                room.sessions.forEach(session => {
                  allSessions.push({
                    ...session,
                    roomId: room.id,
                    roomName: room.name
                  });
                });
              }
            });
          }
        });
      }
      
      if (allSessions.length === 0 && Array.isArray(data.sessions)) {
        allSessions.push(...data.sessions);
      }

      const sessions = allSessions.map(s => {
        return {
          ...s,
          room: s.roomName || rooms.find(r => String(r.id) === String(s.roomId))?.name || 'TBD',
          speakers: (s.speakers || []).map(sp => {
            const id = typeof sp === 'string' ? sp : (sp.id || sp);
            return String(id);
          })
        }
      });

      // Mark plenum (full-width) service sessions
      sessions.forEach(s => {
        if (s.isServiceSession) {
          const buddies = sessions.filter(other => 
            other.isServiceSession && 
            other.startsAt === s.startsAt && 
            other.endsAt === s.endsAt && 
            other.title === s.title
          );
          if (buddies.length >= rooms.length - 2 && rooms.length > 0) {
            s.isPlenum = true;
          }
        }
      });

      AppState.rooms = rooms;
      AppState.speakers = speakers;
      AppState.sessions = sessions;
      AppState.loading = false;

    } catch (e) {
      console.error('SessionizeService critical error:', e);
      AppState.error = e.message;
      AppState.loading = false;
    }
  }

  static clearCache() {
    localStorage.removeItem(STORAGEKEY);
    this.loadData();
  }
}
