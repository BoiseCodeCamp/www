<template>
  <nav class="navbar fixed-top navbar-expand-lg transition p-3"
    :class="scrolled ? 'navbar-light bg-light z-depth' : 'navbar-dark bg-theme-dark'">
    <a class="d-flex align-items-center" href="/">
      <img v-show="!scrolled" height="55" :src="invertImg" alt="Boise Code Camp Logo" class="drop-shadow" />
      <img v-show="scrolled" height="55" :src="logoImg" alt="Boise Code Camp Logo" />
      <h4 class="m-0 ms-2 text-primary" :class="scrolled ? '' : 'text-shadow'">
        <span :class="scrolled ? 'text-dark' : 'text-white'">Boise</span>CodeCamp
      </h4>
    </a>
    <button @click="mobile = !mobile" class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-dark" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex align-items-end" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent">
        <li class="nav-item">
          <a class="nav-link text-uppercase" :class="isActive('/speakers') ? 'active' : ''" href="/speakers">Speakers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" :class="isActive('/sessions') ? 'active' : ''" href="/sessions">Sessions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" :class="isActive('/schedule') ? 'active' : ''" href="/schedule">Schedule</a>
        </li>
        <li class="nav-item" v-if="attend">
          <a :href="attend" target="_blank"
            rel="noopener" title="call for speakers" class="nav-link text-uppercase">
            Register</a>
        </li>
        <!-- <li class="nav-item" v-if="cfs">
          <a :href="cfs" target="_blank" rel="noopener" title="call for speakers" class="nav-link text-uppercase">
            Want to Speak?</a>
        </li> -->
        <li class="nav-item">
          <a href="/sponsor-packet/index.html" target="_blank" rel="noopener" class="nav-link text-uppercase"
            title="Sponsor Packet">
            Sponsors
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import invertImg from '../assets/img/invert.png';
import logoImg from '../assets/img/logo.png';

export default {
  setup() {
    const scrolled = ref(false);
    const mobile = ref(false);
    const currentPath = ref('/');
    
    const attend = computed(() => AppState.register);
    const cfs = computed(() => AppState.cfs);

    function onScroll() {
      scrolled.value = window.scrollY > 100;
    }

    function isActive(path) {
      if (typeof window === 'undefined') return false;
      return currentPath.value === path || currentPath.value === path + '/';
    }

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      currentPath.value = window.location.pathname;
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      scrolled,
      mobile,
      currentPath,
      attend,
      cfs,
      invertImg: invertImg?.src ?? invertImg,
      logoImg: logoImg?.src ?? logoImg,
      isActive
    };
  }
};
</script>

<style scoped>
.nav-link {
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: all 0.2s linear;
  margin: 0 0.5rem;
}

.nav-link.active {
  border-bottom: 2px solid var(--bs-primary);
}

.drop-shadow {
  filter: drop-shadow(2px 4px 6px #00000055);
}
</style>
