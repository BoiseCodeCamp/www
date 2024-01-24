<template>
  <div class="home bg-white">
    <Navbar />
    <Hero />
    <section class="container pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <Keynote />
        </div>
      </div>
      <About />
      <RegisterButton show-form title="Register to attend" />
      
      <Speakers />
      
      <Experience />
      <RegisterButton title="Doesn't this sound great? Reserve your spot now!" />
      <hr />
      <Venue />
      <div class="row mb-5 home-sponsors" v-if="sponsors.length">
        <hr />
        <div class="col-sm-10">
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
