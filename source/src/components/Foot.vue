<template>
  <footer class="mt-5">
    <div class="container-fluid pt-5 text-center bg-theme-dark text-light">
      <div class="d-flex flex-wrap align-items-center">
        <div class="col-md-3 col-10 mx-auto pb-3 text-center">
          <img src="../assets/img/invert.png" alt="codecamp logo" class="img-fluid" />
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">

            <div class="col-md-4 col-sm-6 col-6 p-0 mb-3">
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <!-- <router-link to="register">Register</router-link> -->
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <!-- <a href="/sponsor-packet/" rel="preload" title="sponsor packet">Sponsor</a> -->
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <!-- <router-link to="volunteer">Volunteer</router-link> -->
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-6 col-6 mb-3 p-0">
              <div class="d-flex gap-3">
                <span class="mb-2">
                  <a class="text-light" href="https://www.linkedin.com/company/boisecodecamp">
                    <i class="fs-3 mdi mdi-linkedin"></i>
                    LinkedIn</a>
                </span>
                <span class="mb-2">
                  <a class="text-light" href="https://twitter.com/boisecodecamp"><i class="fs-3 mdi mdi-twitter"></i> Twitter</a>
                </span>
                <span class="mb-2">
                  <a class="text-light" href="https://github.com/boisecodecamp" target="_blank"><i class="fs-3 mdi mdi-github"></i>
                    Github</a>
                </span>
                <span class="mb-2">
                  <a class="text-light" href="https://www.facebook.com/boisecodecamp" target="_blank"><i class="fs-3 mdi mdi-facebook"></i>
                    Facebook</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-3 small">
      <div class="d-flex justify-content-center align-items-center">
        <a class="me-4" href="/privacy.html">Privacy &amp; terms</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
};
</script>

<style>
footer {
  font-size: 12pt;
  background-color: #131b1c;
  border-top: 2px solid #5cd8d2;
}
</style>
