<template>
  <div v-html="parsed"></div>
</template>

<script>

import { marked } from 'marked';
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  props: {
    value: { type: String, default: '' }
  },
  setup(props) {
    return {
      parsed: computed(() => marked(props.value))
    }
  }
}
</script>


<style lang="scss" scoped></style>