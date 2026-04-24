<template>
  <div></div>
</template>

<script>
import { onMounted } from 'vue';
import SessionizeService from '../services/SessionizeService.js';

export default {
  setup() {
    onMounted(() => {
      // Small hack to ensure we aren't using an old schema
      const key = 'BOISECODECAMP26'
      const cached = localStorage.getItem(key)
      if (cached && !cached.includes('gridData')) {
        console.log('Clearing old sessionize cache schema')
        localStorage.removeItem(key)
      }
      SessionizeService.loadData()
    })
    return {}
  }
}
</script>
