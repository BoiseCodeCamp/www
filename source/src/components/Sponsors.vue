<template>
  <div class="sponsors container-fluid bg-white">
    <h3 class="text-center">{{ this.year }} Sponsors</h3>
    <div class="row m-auto pl-3 pt-4 sponsor-level" :class="level" v-for="(sponsors, level) in sponsorMap" :key="level">
      <div class="col-12 text-center" :class="sponsors.length ? '' : 'd-none'">
        <small class="uppercase"><b>{{ level }}</b></small>
        <div class="text-center sponsor">
          <a v-for="s in sponsors" :key="s.id" :href="s.url" target="_blank" rel="noopener" :title="s.name">
            <img v-if="s.logo" :src="s.logo" class="rounded" :alt="s.name" />
            <p v-else>{{ s.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  props: ["hideGolds", "hideSilvers", "hideFriends"],
  computed: {
    year() {
      return AppState.currentYear;
    },
    sponsors() {
      return AppState.sponsors;
    },
    platinums() {
      return this.sponsors.filter(s => s.level == "platinum");
    },
    golds() {
      return this.sponsors.filter(s => s.level == "gold");
    },
    silvers() {
      return this.sponsors.filter(s => s.level == "silver");
    },
    friends() {
      return this.sponsors.filter(
        s => s.level == "friend"
      );
    },
    sponsorMap() {
      return {
        platinums: this.platinums,
        golds: this.golds,
        silvers: this.silvers,
        friends: this.friends
      };
    }
  }
};
</script>

<style>
.sponsors {
  padding-top: 25px;
  padding-bottom: 0;
}

.sponsor-level {
  padding-top: 0 !important;
}

.sponsor a {
  text-decoration: none;
}

.sponsor img {
  filter: grayscale(1);
  height: 100px;
  width: 100px;
  object-fit: contain;
  padding: 0 10px;
}

.golds .sponsor img {
  height: 150px;
  width: 150px;
}

.platinums .sponsor img {
  filter: grayscale(0);
  height: 200px;
  width: 200px;
}
</style>
