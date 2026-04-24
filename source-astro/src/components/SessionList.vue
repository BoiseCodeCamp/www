<template>
  <div class="mt-4" v-if="sessions.length">
    <h1 class="mb-4">Sessions</h1>
    <div class="row">
      <div class="col-12 col-md-6 mb-3" v-for="session in sessions" :key="session.id">
        <Session :session="session" />
      </div>
    </div>
  </div>
  <div class="py-5 text-center text-muted" v-else>
    <p class="fs-4">Sessions will be announced soon.</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import Session from './Session.vue'

export default {
  components: { Session },
  setup() {
    return {
      sessions: computed(() => AppState.sessions)
    }
  }
}
</script>
