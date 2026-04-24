<template>
  <div class="schedule-page bg-white min-vh-100">
    <Navbar />
    <section class="container-fluid pt-5 mt-5">
      <div class="row px-lg-4">
        <div class="col-12">
          <h1 class="display-4 fw-bold text-dark mb-4">Event Schedule</h1>
          <ScheduleGrid />
        </div>
      </div>
    </section>
    <Foot />
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped>
.schedule-page {
  background-color: #fcfcfc;
}
</style>
