<template>
  <div class="sponsors bg-white">
    <h3 class="text-center">{{ year }} Sponsors</h3>
    <div class="d-flex flex-wrap justify-content-center gap-5 py-4">
      <a v-for="s in sponsors" :key="s.id" :href="s.url" target="_blank" rel="noopener"
        class="sponsor-card text-center text-decoration-none">
        <img :src="s.logo" :alt="s.name" class="sponsor-logo" />
        <p class="sponsor-name mt-2 mb-0">{{ s.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';
import { computed } from 'vue';

export default {
  setup() {
    return {
      year: computed(() => AppState.currentYear),
      sponsors: computed(() => AppState.sponsors),
    }
  }
};
</script>

<style scoped>
.sponsor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  color: inherit;
}

.sponsor-logo {
  height: 120px;
  width: 160px;
  object-fit: contain;
}

.sponsor-name {
  font-size: 0.85rem;
  color: #444;
}

/* Added gap support for older browsers if needed, though bootstrap 5 handles it */
.gap-5 {
  gap: 3rem !important;
}
</style>
