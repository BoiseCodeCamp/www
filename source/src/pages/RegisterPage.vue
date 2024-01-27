<template>
  <section class="register">
    <Navbar />
    <hero-sm />
    <RegisterButton class="mt-0 mb-0" show-form title="Register for Code Camp" />
    <div class="container-fluid pt-5 pl-lg-5 pr-lg-5 bg-white">
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <article class="content-item page">
            <h1 class="page-title">Don't hesitate, Commit</h1>
            <p><strong>Get your tickets before they are gone!</strong></p>
            <p>
              Tickets for Boise Code Camp are limited to 200 people so be sure to get yours and
              secure your seat.
            </p>
          </article>
        </div>
      </div>

      <Reminders />

      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <div class="timer-section bg-dark">
            <div id="countdown" v-if="!this.errored">
              <ul class="pl-2 d-flex flex-column flex-md-row justify-content-center" v-if="(days + hours + minutes > 0)">
                <li v-if="days">
                  <p class="days">{{ days }}</p>
                  <p class="timeRefDays">days</p>
                </li>
                <li v-if="hours">
                  <p class="hours">{{ hours }}</p>
                  <p class="timeRefHours">hours</p>
                </li>
                <li v-if="minutes">
                  <p class="minutes">{{ minutes }}</p>
                  <p class="timeRefMinutes">minutes</p>
                </li>
                <li v-if="minutes">
                  <p class="seconds">{{ seconds }}</p>
                  <p class="timeRefSeconds">seconds</p>
                </li>
              </ul>
              <ul class="pl-2 d-flex flex-column flex-md-row justify-content-center" v-else>
                <li>
                  <p class="days mb-0">Join Us Next Time!</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      

    </div>
    <Foot class="mt-0" />
  </section>
</template>

<script>
import { AppState } from '../AppState.js';

export default {
  data() {
    return {
      interval: 0,
      now: Date.now(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      errored: false
    };
  },
  computed: {
    conference() {
      return AppState.event;
    },
    startTime() {
      return AppState.event.dTime;
    }
  },
  mounted() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    updateTime() {
      try {
        this.now = Date.now();
        // Find the distance between now and the count down date
        var distance = this.startTime.getTime() - this.now;
        // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (isNaN(this.now) || isNaN(this.days) || isNaN(this.hours) || isNaN(this.minutes) || isNaN(this.seconds)) {
          this.errored = true
          clearInterval(this.interval)
        }
      } catch (e) {
        this.errored = true
      }
    }
  }
};
</script>

<style>
.timer-section {
  padding: 0px 0px 0px 0px;
  width: 100%;
}

#countdown>table {
  margin: 10px auto 0;
}

#countdown ul {
  list-style: outside none none;
  text-align: center;
  margin-bottom: 2rem;
}

#countdown li {
  display: inline-block;
  margin-right: 15px;
  min-width: 80px;
  padding: 10px 20px;
  text-align: center;
  background: var(--primary);
  position: relative;
}

#countdown p {
  color: #fff;
  display: block;
  margin: 0;
  padding: 0;
}

.timeRefDays,
.timeRefHours,
.timeRefMinutes,
.timeRefSeconds {
  font-size: 15px !important;
  text-transform: uppercase;
}

p.days,
p.hours,
p.minutes,
p.seconds {
  font-size: 48px !important;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>