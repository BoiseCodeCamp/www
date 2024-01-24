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

    <!-- <div class="row m-auto p-md-3 mt-5">
      <div class="col-12 col-lg-4 d-flex flex-column justify-content-center offset-lg-1 order-2 order-lg-1">
        <h2>Why Boise</h2>
        <p>

        </p>
        <p>

        </p>
      </div>
      <div class="col-12 col-lg-6  d-flex justify-content-center">
        <div class="d-flex justify-content-center rounded z-depth mb-4 mb-lg-0" style="width: 600px; height: 337px">
          <iframe class="w-100 rounded" width="600" height="337"
            src="https://www.youtube.com/embed/apz6jUqmVJU?si=gvD-ALtSjq9VNKjx&amp;start=60&rel=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="row m-auto p-md-3 mt-5">
      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <img src="img/codecamp-collage.png" alt="about" class="text-shadow mb-4 mb-lg-0"
          style="object-fit: contain; width: 100%;" />
      </div>
      <div class="col-12 col-lg-4 offset-lg-1 d-flex flex-column justify-content-center">
        <h2>Youth Track</h2>
        <p>
          Do you have young coders? Are you a young person interested in
          technology? Boise Code Camp has an all-day track of coding and
          technology sessions aimed at youth ages 6 to 16. In the last year,
          millions of kids, many of them in our own community, have learned to
          code with the Hour of Code and tools like Scratch and Raspberry Pi.
          Boise Code Camp is representative of our community and the kids in our
          community are starting to code.
        </p>
        <p>
          The youth track is for the novice or experienced kid coder. In our
          Scratch sessions, new coders will find a very approachable platform
          and participants in the Hour of Code will find a very familiar
          interface style. Experienced coders will find challenging material for
          building a web site or can even sneak into an adult focused javscript
          or robotics session and learn what it's like to be a professional
          programmer. Also, what kid doesn't want to learn how to hack Minecraft
          and hang out with other kids who are also interested in technology?
        </p>
        <p>
          Kid coders as young as 6 years old up through high school can present
          so if your kid is interested in presenting see our
        </p>
      </div>
    </div> -->
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
