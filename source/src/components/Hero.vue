<template>
  <div class="hero">
    <header class="container-fluid bg-dark p-5">
      <div class="row h-100 align-items-center text-shadow">
        <div class="col offset-lg-1 col-lg-4">
          <div class="text-light">
            <img class="img-fluid mb-3" src="../assets/img/codecamp-words.png" alt="codecamp words" />
            <h3 class="text-shadow mt-3">
              {{ event.date }}
              <span class="ms-md-3 me-md-3">|</span>
              {{ event.location }}
            </h3>
            <div class="cta mt-3">
              <a href="https://www.eventbrite.com/e/boise-code-camp-2024-tickets-885003688857" target="_blank"  class="btn btn-lg btn-outline-info">
                <span class="me-2">Register Now</span>
                <small>
                  <i class="mdi  mdi-chevron-right"></i>
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-theme-dark p-2 text-light">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="m-0">
              <small>
                Need help convincing your manager you should attend this conference? It's easy this conference is
                <b class="text-theme-info">FREE!</b>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
header {
  background-image: url(../assets/img/codecamp-header-bg.png);
  background-position: center;
  background-size: cover;
  height: 87vh;
  font-size: 18pt;
}
</style>
