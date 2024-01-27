<template>
  <div class="d-flex flex-wrap justify-content-center my-3 align-items-baseline gap-4">
    <a class="d-flex text-light flex-column align-items-center justify-content-center" :href="gcal" target="_blank"
      rel="noopener noreferrer">
      <div class="card-deck mb-3">
        <div class="card p-3 d-flex flex-column align-items-center justify-content-center bg-dark text-light">
          <i class="mdi mdi-calendar fs-2 mb-3"></i>
          <h3>When</h3>
          <p class="mb-0">Saturday, {{ conference.date }}</p>
          <p>8:30 AM - 6:00 PM MST</p>
        </div>
      </div>
    </a>
    <a class="d-flex text-white flex-column align-items-center justify-content-center" :href="directions" target="_blank"
      rel="noopener noreferrer">
      <div class="card p-3 d-flex flex-column align-items-center justify-content-center bg-primary text-white">
        <i class="mdi mdi-map-marker fs-2 mb-3"></i>
        <h3>Where</h3>
        <p class="mb-0">{{ conference.venue }}</p>
        <p>{{ conference.address }}</p>
      </div>
    </a>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';

export default {
  computed: {
    conference() {
      return AppState.event;
    },
    startTime() {
      return AppState.event.dTime;
    },
    gcal() {
      const e = AppState.event
      const x = AppState.event.dTime
      let y = x.getFullYear()
      let m = x.getMonth() + 1
      if (m < 10) {
        m = '0' + m.toString()
      }
      let d = x.getDate() + 1
      if (d < 10) {
        d = '0' + d.toString()
      }
      const dates = `${y}${m}${d}T143000Z%2F${y}${m}${d}T240000Z`
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${e.name}+${y}&details=${e.snippet}.&location=${e.address}&dates=${dates}`;
    },
    directions() {
      return `https://www.google.com/maps/place/${AppState.event.address}`;
    }
  }
}
</script>


<style lang="scss" scoped>
.card-deck {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  .card {
    width: 320px;
    max-width: 100%;
  }
}
</style>