<template>
  <div class="hero">
    <header class="d-flex align-items-center bg-dark p-5" :style="{ backgroundImage: `url(${bgImg})` }">
      <div class="offset-lg-1 text-shadow mt-3 py-5">
        <div class="text-light">
          <img
            class="img-fluid"
            :src="wordsImg"
            alt="codecamp words"
          />
          <h3 class="text-shadow mt-3">
            {{ event.date }}
            <span class="ms-md-3 me-md-3">|</span>
            {{ event.location }}
          </h3>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';
import wordsImgRaw from '../assets/img/codecamp-words.png';
import bgImgRaw from '../assets/img/codecamp-header-bg.png';

export default {
  setup() {
    return {
      wordsImg: wordsImgRaw?.src ?? wordsImgRaw,
      bgImg: bgImgRaw?.src ?? bgImgRaw
    }
  },
  computed: {
    event() {
      return AppState.event;
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background-position: center;
  background-size: cover;
  min-height: 55vh;
  font-size: 16pt;
}
</style>
