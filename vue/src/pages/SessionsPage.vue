<template>
  <div class="bg-white">
    <Navbar />
    <section class="container pt-5 mt-5">
      <div class="mt-4" v-if="sessions.length">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="mb-0">Sessions</h1>
          <router-link :to="{ name: 'Schedule' }" class="btn btn-outline-primary">
            <i class="mdi mdi-grid me-1"></i> View Schedule Grid
          </router-link>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mb-3" v-for="session in sessions" :key="session.id">
            <Session :session="session" />
          </div>
        </div>
      </div>
      <div class="py-5 text-center text-muted" v-else>
        <p class="fs-4">Sessions will be announced soon.</p>
      </div>
    </section>
    <Foot />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'

export default {
  setup() {
    return {
      sessions: computed(() => AppState.sessions)
    }
  }
}
</script>
