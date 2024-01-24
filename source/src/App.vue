<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import SessionizeService from './services/SessionizeService.js';

export default {
  setup() {

    onMounted(() => {
      SessionizeService.loadData()
    })


    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --theme-info: #66fcf1;
  --theme-dark: #1f2833;
  --shadow: 2px 0 8px #1f2833;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: var(--theme-dark);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

footer {
  border-top: 3px solid var(--primary);
  background: var(--dark);
  color: var(--light);
}

.no-scroll {
  overflow: hidden;
}

.text-shadow {
  filter: drop-shadow(var(--shadow));
}

.text-theme-info {
  color: var(--theme-info);
}

.bg-theme-info {
  background: var(--theme-info);
}

.bg-theme-dark {
  background: var(--theme-dark);
}

.z-depth {
  box-shadow: 0 4px 8px rgba(100, 100, 100, 0.5);
}

.transition {
  transition: all 0.3s linear;
}

.uppercase {
  text-transform: uppercase;
}

.show-on-hover {
  opacity: 0;
  width: 0;
  transition: all 0.3s linear;
}

.square {
  border-radius: 0;
}

.action {
  cursor: pointer;
  transition: all 0.3s linear;
}

a{
  color: var(--bs-primary);
}

a:hover {
  text-decoration: none;
}

*:hover>.show-on-hover {
  opacity: 1;
}

.close-modal-button {
  font-size: 16pt;
  padding: 1em;
  color: #05403f;
  transition: color 0.3s linear;
}

.close-modal-button:hover {
  color: grey;
}

.delete-form .quick-modal-card {
  max-width: 550px;
}

.button:hover,
a:hover {
  cursor: pointer;
}
</style>
