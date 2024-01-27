<template>
  <div class="sponsors container-fluid pl-lg-5 pr-lg-5 bg-white">
    <h3 class="text-center">{{this.year}} Sponsors</h3>
    <div
      class="row m-auto pl-3 pt-4 sponsor-level"
      :class="level"
      v-for="(sponsors, level) in sponsorMap"
      :key="level"
    >
      <div class="col-12 text-center" v-if="!hide(level) && level != 'friends'">
        <small class="uppercase"><b>{{ level }}</b></small>
         <div class="text-center sponsor">
           <a
            v-for="s in sponsors"
            :key="s.id"
            :href="s.url"
            target="_blank"
            rel="noopener"
            :title="s.name"
          >
            <img
              :src="s.logo"
              class="rounded"
              :alt="s.name"/>
          </a>
        </div>
      </div>
      <div class="col-12 text-center" v-if="level === 'friends'">
        <small class="uppercase"><b>{{ level }}</b></small>
         <div class="text-center">
           <small
              v-for="s in sponsors"
              :key="s.id">
              {{ s.name }}
            </small>
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
    year(){
      return AppState.currentYear;
    },
    sponsors() {
      return AppState.sponsors;
    },
    platinums() {
      return this.sponsors.filter(s => s.level == "platinum");
    },
    golds() {
      return this.sponsors.filter(s => s.level == "gold" && !this.hideGolds);
    },
    silvers() {
      return this.sponsors.filter(s => s.level == "silver" && !this.hideSilvers);
    },
    friends() {
      return this.sponsors.filter(
        s => s.level == "friend" && !this.hideFriends
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
  },
  methods: {
    hide(level) {
      try {
        if (!this[level].length) {
          return true;
        }
        level = level[0].toUpperCase() + level.slice(1);
        return this[`hide${level}`];
      } catch (e) {
        return false;
      }
    }
  }
};
</script>

<style>
.sponsors{
  padding-top:25px;
  padding-bottom:0;
}
.sponsor-level{
  padding-top:0 !important;
}
.sponsor a {
  text-decoration: none;
}
.sponsor img {
  filter: grayscale(1);
  height: 80px;
  width: 80px;
  object-fit: contain;
  padding:0 10px;
}

.golds .sponsor img {
  height: 100px;
  width: 100px;
}

.platinums .sponsor img {
  filter: grayscale(0);
  height: 125px;
  width: 125px;
}
</style>
