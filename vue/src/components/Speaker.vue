<template>
  <div class="text-center h-100 d-flex flex-column justify-content-between">
    <img class="rounded img-fluid action w-75 m-2 align-self-center"
      :src="speaker.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.fullName)}`"
      @error="(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.fullName)}`"
      :alt="speaker.fullName" @click="setActive" data-bs-toggle="modal" data-bs-target="#speaker-modal" />
    <div class="card-body p-2">
      <div class="card-title action" @click="setActive" data-bs-toggle="modal" data-bs-target="#speaker-modal">
        {{ speaker.fullName }}
      </div>
      <div class="card-text">
        <sup class="text-muted">{{ speaker.tagLine }}</sup>
      </div>
    </div>
    <div class="mb-2 d-flex justify-content-around" v-if="speaker.links.length">
      <a v-for="link in speaker.links" :key="link.linkType" :href="link.url" target="_blank" :title="link.linkType">
        <i class="mdi mdi-earth" :class="'mdi-' + link.linkType.toLowerCase()"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  props: ["speaker"],
  setup(props) {
    return {
      setActive() {
        AppState.speaker = props.speaker
      }
    }
  },

};
</script>

<style></style>
