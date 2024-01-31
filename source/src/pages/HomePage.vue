<template>
  <div class="home bg-white">
    <Navbar />
    <Hero />
    <section class="container-fluid pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-lg-10 m-auto">
          <Keynote />
        </div>
      </div>
    </section>

    <section class="container">
      <About />
    </section>

    <section class="container-fluid">

      <div class="row">
        <RegisterButton show-form title="Register to attend" />
      </div>
    </section>

    <section class="container">
      <Speakers />
      <Experience />
    </section>

    <section class="container-fluid">

      <div class="row">
        <RegisterButton title="Doesn't this sound great? Reserve your spot now!" />
      </div>
      <hr />
      <Venue />

      <div class="row mb-5 home-sponsors" v-if="sponsors.length">
        <hr />
        <div class="col-lg-10">
          <div class="h1 mt-3">
            <div>
              Thank you Sponsors
            </div>
          </div>
          <div class="__summary large">
            <div>
              <p>
                Code Camp is free and it wouldn't be if it wasn't for our
                incredible sponsors. Make sure you stop by their booths to check
                out the coolest swag and potential career opportunities.
              </p>
              <p>Interested in sponsoring Boise Code Camp? Checkout the <a href="/sponsor-packet/">Sponsor Packet</a> for
                available sponsor levels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="row my-5 ms-lg-3">
        <div class="col-lg-8 offset-lg-1">
          <h2>Register Today and Code with Us!</h2>
          <p>
            Ready to embark on a whirlwind coding adventure? Register for CodeCamp Community's one-day extravaganza and be
            part of a dynamic learning experience fueled by the passion of our community. Unleash your creativity, sharpen
            your coding skills, and make lasting connections with fellow enthusiasts in this immersive coding celebration.
          </p>
          <p>
            Don't miss out on this unique opportunity to code, learn, and grow in a supportive community-driven
            environment.
            Embrace the thrill of a one-day coding camp and let your coding journey begin with us at Boise Code Camp!
          </p>
          <p>See <b class="text-primary">you</b> there!</p>
        </div>
      </div>
    </section>

    <RegisterButton title="Don't wait to sign up, your next big move is waiting!" class="mb-0" />
    <Foot />
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';


export default {
  setup() {
    return {
      sponsors: computed(() => AppState.sponsors)
    };
  },
};
</script>
