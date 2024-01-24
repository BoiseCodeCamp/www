<template>
  <div class="keynote p-lg-4 mt-4" v-if="keynote.speaker">
    <div class="jumbotron p-4 z-depth mb-0 bg-white">
      <div class="mb-3 d-flex flex-wrap align-items-center justify-content-between">
        <small class="border text-secondary p-1 rounded">KEYNOTE</small>
        <div class="text-muted d-md-block d-flex flex-column">
          <small>
            <i class="mdi  mdi-map-marker"></i>
            {{ keynote.location }}
          </small>
          <small class="ms-3">
            <i class="mdi  mdi-clock-o"></i>
            {{ keynote.time }}
          </small>
        </div>
      </div>
      <h1 class="text-primary">{{ keynote.title }}</h1>
      <p class="lead">{{ keynote.abstract }}</p>
      <hr class="my-4" />
      <div class="d-flex">
        <img height="80" class="rounded" :src="keynote.speaker.img" :alt="keynote.speaker.name" />
        <div class="pl-3 text-primary ms-2 border-left d-flex flex-column">
          <span>{{ keynote.speaker.name }}</span>
          <span>{{ keynote.speaker.company }}</span>
          <span>{{ keynote.speaker.title }}</span>
        </div>
      </div>
    </div>
    <hr class="mb-5 mt-5" />
  </div>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  computed: {
    keynote() {
      return AppState.keynote;
    }
  }
};
</script>

<style></style>