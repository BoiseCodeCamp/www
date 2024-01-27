<template>
  <nav class="navbar fixed-top navbar-expand-lg transition p-3"
    :class="scrolled ? 'navbar-light bg-light z-depth' : 'navbar-dark'">
    <router-link class="d-flex align-items-center" to="/">
      <img v-show="!scrolled" height="55" src="../assets/img/invert.png" alt="Boise Code Camp Logo" class="drop-shadow" />
      <img v-show="scrolled" height="55" src="../assets/img/logo.png" alt="Boise Code Camp Logo" />
      <h4 class="m-0 ms-2 text-primary" :class="scrolled ? '' : 'text-shadow'">
        <span :class="scrolled ? 'text-dark' : 'text-white'">Boise</span>CodeCamp
      </h4>
    </router-link>
    <button @click="mobile = !mobile" class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-dark" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex align-items-end" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent">
        <!-- <li class="nav-item" v-if="$auth.isAuthenticated">
          <router-link
            title="dashboard"
            class="nav-link text-uppercase"
            :class="scrolled ? 'text-dark' : 'text-light'"
            :to="{ name: 'profile' }"
            >Dashboard
          </router-link>
        </li> -->
        <li class="nav-item" v-for="link in links" :key="link.to.name">
          <router-link class="nav-link text-uppercase" :to="link.to">
            {{ link.to.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a :href="cfs" target="_blank" rel="noopener" title="call for speakers"
            class="nav-link text-uppercase">
            Want to Speak?</a>
        </li>
        <!-- <li class="nav-item">
          <a href="/sponsor-packet/index.html" target="_blank" rel="noopener" class="nav-link text-uppercase"
            title="Sponsor Packet">
            Sponsors
          </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      cfs: AppState.cfs,
      mobile: false,
      scrolled: false,
      links: [
        {
          to: { name: "Register" }
        }
      ]
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 100;
    },
    scrollTo(className) {
      var el = this.$root.$el.getElementsByClassName("home-sponsors")[0];
      if (el) {
        el.scrollIntoViewIfNeeded();
      }
    }
  }
};
</script>

<style>
.nav-link {
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: all 0.2s linear;
  margin: 0 0.5rem;
}

.nav-link.router-link-exact-active {
  border-bottom: 2px solid var(--primary);
}

.drop-shadow {
  filter: drop-shadow(2px 4px 6px #00000055);
}



</style>
