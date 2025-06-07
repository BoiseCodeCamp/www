<template>
  <div class="hero">
    <header class="container-fluid bg-dark p-5">
      <div class="row  text-shadow mt-3 py-5">
        <div class="col offset-lg-1 col-lg-4">
          <div class="text-light">
            <img
              class="img-fluid"
              src="../assets/img/codecamp-words.png"
              alt="codecamp words"
            />
            <h3 class="text-shadow mt-3" v-if="event.tbaTeaser">
              {{ event.tbaTeaser }}
            </h3>
            <h3 class="text-shadow mt-3" v-else>
              {{ event.date }}
              <span class="ms-md-3 me-md-3">|</span>
              {{ event.location }}
            </h3>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';


export default {
  computed: {
    event() {
      return AppState.event;
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background-image: url(../assets/img/codecamp-header-bg.png);
  background-position: center;
  background-size: cover;
  height: 55vh;
  font-size: 16pt;
}
</style>
