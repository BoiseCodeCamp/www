<template>
  <div class="session p-2 rounded dropdown">
    <div class="d-flex justify-content-between flex-wrap">
      <button class="text-primary mb-0 btn ps-0" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#session-details-' + session.id" aria-expanded="false"
        :aria-controls="'session-details-' + session.id" v-if="session.description">
        {{ session.title }}
        <i class="mdi mdi-chevron-down"></i>
      </button>
      <p class="mb-0" v-else>{{ session.title }}</p>
      <div class="text-muted d-md-block d-flex flex-column">
        <sup style="margin-top: .15rem">
          <i class="mdi  mdi-map-marker"></i>
          <small>
            {{ session.room || 'TBD' }}
          </small>
          <span class="ms-3">
            <i class="mdi mdi-clock me-1"></i>
            <span v-if="session.startsAt">
              {{ time(session.startsAt) }} - {{ time(session.endsAt) }}
            </span>
            <small v-else>TBD</small>
          </span>
        </sup>
      </div>
    </div>
    <div class="collapse" :id="'session-details-' + session.id">
      <p class="m-0 fs-6">{{ session.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ["session"],
  setup(props) {
    return {
      time(str) {
        if (!str) { return '' }
        try {
          let d = new Date(str);
          return d.toLocaleTimeString();
        } catch (e) {
          return ''
        }
      }
    }
  }
};
</script>

<style></style>
