<template>
  <div class="row m-auto p-md-3 mt-5">
    <div class="col-12 col-lg-4 offset-lg-1 order-2 order-lg-1 justify-content-center d-flex flex-column">
      <h2>CodeCamp Manifesto</h2>
      <p>Code Camp is about the software developer community at large. It a place for developers to come and learn from their peers. Topics are always based on community interest and never determined by anyone other than the community.</p>
    </div>
    <div class="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2 text-center">
      <img class="img-fluid mb-4 mb-lg-0 text-shadow" :src="manifestoImg" alt="codecamp manifesto" />
    </div>
  </div>
</template>

<script>
import manifestoImgRaw from '../assets/img/codecamp-manifesto.png';

export default {
  name: "Manifesto",
  setup() {
    return {
      manifestoImg: manifestoImgRaw?.src ?? manifestoImgRaw
    }
  }
};
</script>

<style>
</style>
