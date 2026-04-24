<template>
  <div
    class="alert text-center fade show"
    :class="type"
    role="alert"
    v-if="!dismissed"
  >
    <slot></slot>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="dismiss"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "alert-info"
    },
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      dismissed: window.localStorage.getItem("alert:" + this.name)
    };
  },
  methods: {
    dismiss() {
      window.localStorage.setItem("alert:" + this.name, true);
    }
  }
};
</script>

<style></style>
