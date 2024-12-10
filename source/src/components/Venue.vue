<template>
  <div>
    <div class="row m-auto p-lg-3 mt-5">
      <div class="col-lg-4 offset-lg-1 order-2 order-lg-1 justify-content-center d-flex flex-column">
        <h2>The Venue</h2>
        <p>Located at <a :href="venue.map" target="_blank" title="venue address">{{ venue.address }}</a>
        </p>
        <p>
          At <a :href="venue.url" target="_blank" :title="venue.url"><b>{{ venue.name }}</b></a> We are used to
          educating the local tech community. {{ venue.name }} is excited to have the community at large on campus as we
          learn
          and grow together.
        </p>
        <p>
          If you are driving please watch for the signs and park in the
          designated areas, be sure to show up early as parking is limited
        </p>
        <p><b>Coming from out of town?</b></p>
        <p>
          You'll want to stay where the action is. Use our
          <a target="_blank"
            href="https://www.google.com/travel/hotels/Boise?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4274032%2C4291318%2C4305595%2C4308216%2C4308226%2C4314846%2C4315873%2C4317915%2C4324293%2C4328159%2C4329288%2C4270859%2C4284970%2C4291517%2C4292955%2C4307996&hl=en&gl=us&un=1&ap=SAEwAVqaAgoFCK8BEAASACIDVVNEKhYKBwjkDxAFGBUSBwjkDxAFGBgYAyABOAM4BDgFsAEBWAFoAXICCAGaAQcSBUJvaXNlogERCggvbS8wOTl0eRIFQm9pc2WqAQcKAwjwARgAqgEPCgIIEhIDCJsBEgIIaBgBqgEXCgIIFBICCBsSAwiYARICCFISAghOGAGqAQcKAwicARgAqgEbCgIIHBICCHMSAghHEgIIJBICCE0SAwieAhgBqgEKCgIIJRICCHkYAaoBDgoCCBESAghAEgIIOBgBqgEaCgIILhICCFYSAgg6EgIISxICCFMSAggoGAGqAQYKAggsGACqAQoKAghQEgIIGRgBqgEOCgIINRICCAsSAghdGAGSAQIgAQ&q=hotels%20boise&rp=EJHQtMS-87WWPxC27vfg4tmJ6PQBEKmd-ZCR0oWG0QEQn6bT_v3bv-x9OAFAAEgC&ictx=1&ved=2ahUKEwiUjPLfnf_mAhVWnp4KHTNBD1wQtgN6BAgLEE4&hrf=CgUIrwEQABIAIgNVU0QqFgoHCOQPEAMYFBIHCOQPEAMYFhgCIAE4AzgEOAWwAQFYAWgBcgIIAZoBBxIFQm9pc2WiAREKCC9tLzA5OXR5EgVCb2lzZaoBBwoDCPABGACqAQ8KAggSEgMImwESAghoGAGqARcKAggUEgIIGxIDCJgBEgIIUhICCE4YAaoBBwoDCJwBGACqARsKAggcEgIIcxICCEcSAggkEgIITRIDCJ4CGAGqAQoKAgglEgIIeRgBqgEOCgIIERICCEASAgg4GAGqARoKAgguEgIIVhICCDoSAghLEgIIUxICCCgYAaoBBgoCCCwYAKoBCgoCCFASAggZGAGqAQ4KAgg1EgIICxICCF0YAZIBAiAB">
            hotel guide</a>
          to plan and book your stay.
        </p>
      </div>
      <div class="col-lg-6 offset-lg-1 order-1 order-lg-2 text-center">
        <img class="img-fluid mb-4 mb-lg-0 text-shadow rounded" src="../assets/img/venue.jpg" alt="Venue" />
      </div>
    </div>
    <!-- <div class="row m-auto p-md-3 mt-5">
      <div class="col-lg-6 offset-lg-1 text-center mb-3">
        <img
          class="img-fluid mb-4 mb-lg-0 text-shadow rounded"
          src="../assets/img/codecamp-lunch.jpg"
          alt="Venue"
        />
      </div>
      <div
        class="col-lg-4 offset-lg-1 justify-content-center d-flex flex-column"
      >
        <h2>Free Meal!!!</h2>
        <p>
          Yep you heard us both breakfast and lunch are on the house. Breakfast
          is served from prior to opening ceromonies so get here early and save
          your seat.
        </p>
        <p>
          Lunch is catered on site at noon and includes BBQ, salad, chips and a soda, or if
          you are looking for something a little different there are several
          location to choose from nearby.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {

  setup() {
    const venue = computed(() => AppState.venue)

    return {
      venue
    }
  }

};
</script>

<style></style>
