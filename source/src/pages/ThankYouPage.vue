<template>
  <section class="register">
    <hero-sm class="hero-tiny" />
    <div class="container-fluid pt-5 pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <article class="content-item page">
            <p><b>BoiseCodeCamp 2024</b></p>
            <h1 class="page-title">Hooray! Your Spot is Saved!</h1>
            <p><strong>Be sure to save the date</strong></p>

            <p>We just wanted to take a quick second and thank you for signing up to attend BoiseCodeCamp this year. Our
              community is what makes us great and you are a part of that!</p>

            <p>Thank you for registering {{ registered?.name }} you will receive a confirmation email shortly</p>

            <Reminders />
          </article>
        </div>
      </div>
    </div>
    <Foot class="mt-0" />
  </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      registered: computed(() => AppState.registered)
    }
  }
}
</script>

<style scoped>
.hero-tiny{
  max-height: 40vh;
}
</style>
