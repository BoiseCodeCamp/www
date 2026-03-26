import { AppState } from "../AppState.js";

const STORAGEKEY = AppState.STORAGE_KEY;
const APIKEY = AppState.SESSIONIZE_KEY;

async function _fetchData() {
  let res = await fetch(`https://sessionize.com/api/v2/${APIKEY}/view/All`);
  let data = await res.json();
  data.cached = Date.now() + 1000 * 60 * 60 * 24;
  localStorage.setItem(STORAGEKEY, JSON.stringify(data));
  return data;
}

export default class SessionizeService {
  static async loadData() {
    try {
      let data = JSON.parse(localStorage.getItem(STORAGEKEY));
      if (!data || data.cached < Date.now()) {
        data = await _fetchData();
      }
      AppState.sessions = data.sessions || [];
      AppState.speakers = data.speakers || [];
    } catch (e) {
      console.error('SessionizeService error:', e);
    }
  }
}
