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
