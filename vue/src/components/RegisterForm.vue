<template>
  <form action="https://docs.google.com/forms/d/e/1FAIpQLSe_GF8a7t4eWuXl1fOetsEg17n9_ToAZv6kj6YrbOCyzOvJlg/formResponse"
    target="_self" method="POST" @submit.prevent="onSubmit" class="register-form">

    <div class="row align-items-center g-2">
      <div class="col-md">
        <div class="form-floating">
          <input class="form-control" placeholder="Your Name" id="130440474" type="text" name="entry.130440474" required>
          <label for="130440474">Your Name</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating">
          <input class="form-control" placeholder="your@email.com" id="emailAddress" type="email" name="emailAddress"
            required>
          <label for="emailAddress">Email address</label>
        </div>
      </div>
    </div>
    <div class="col-md mt-3">
      <input type="hidden" name="fvv" value="1">
      <input type="hidden" name="fbzx" value="3232593795806805017">
      <input type="hidden" name="pageHistory" value="0">
      <button class="btn w-100 btn-light btn-lg" type="submit">
        I'm Going!
      </button>
    </div>

  </form>
</template>


<script>
import { useRouter } from 'vue-router'
import { AppState } from '../AppState.js'


export default {
  setup() {

    const router = useRouter()

    return {
      async onSubmit() {
        event.preventDefault()
        const form = event.target
        const emailAddress = `${form.emailAddress.value}`
        const name = `${form['entry.130440474'].value}`
        let url = `https://docs.google.com/forms/d/e/1FAIpQLSe_GF8a7t4eWuXl1fOetsEg17n9_ToAZv6kj6YrbOCyzOvJlg/formResponse?emailAddress=${emailAddress}&entry.130440474=${name}`
        try {
          await fetch(url, {
            method: 'POST',
          })
        } catch (error) {
          console.warn('expected form submission')
        } finally {
          AppState.registered = { name, emailAddress }
          router.push({ name: 'ThankYou' })
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>
.register-form {
  min-width: min(70vw, 700px);
}
</style>