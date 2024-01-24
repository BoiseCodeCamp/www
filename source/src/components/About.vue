<template>
  <div class="about">

    <div class="row m-auto p-md-3 mt-5" v-for="(section, i) in about">
      <div class="col-12 col-lg-6 d-flex justify-content-center"
        :class="i % 2 == 1 ? 'offset-lg-1 order-1 order-lg-2' : ''" v-if="section.img || section.video">
        <img :src="section.img" alt="about" class="text-shadow mb-4 mb-lg-0" style="width: 100%;object-fit: contain;"
          v-if="section.img" />
        <iframe class="w-100 rounded" width="600" height="337" v-else-if="section.video" :src="section.video"
          :title="section.title" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <div class="col-12 col-lg-4 offset-lg-1 d-flex flex-column justify-content-center">
        <h2>{{ section.title }}</h2>
        <div v-html="parseMD(section.description)"></div>
      </div>
    </div>
    <Manifesto />
  </div>
</template>

<script>
import { marked } from 'marked';
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      about: computed(() => AppState.about),
      parseMD(md) {
        return marked(md)
      }
    }
  }
};
</script>

<style></style>
