<template>
  <iframe ref="iframe" :srcdoc="srcdoc" frameborder="0" :style="{ width: '100%', height: height, border: 'none', overflow: 'hidden' }" :title="title" scrolling="no"></iframe>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'

export default {
  props: {
    src: String,
    title: { type: String, default: 'Sessionize' }
  },
  setup(props) {
    const iframe = ref(null)
    const height = ref('200px')

    function onMessage(e) {
      if (iframe.value && e.source === iframe.value.contentWindow && e.data?.type === 'sz-resize') {
        height.value = e.data.height + 'px'
      }
    }

    onMounted(() => window.addEventListener('message', onMessage))
    onUnmounted(() => window.removeEventListener('message', onMessage))

    const srcdoc = computed(() => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>body { margin: 0; }</style>
</head>
<body>
  <script type="text/javascript" src="${props.src}"><\/script>
  <script>
    var observer = new MutationObserver(function() {
      parent.postMessage({ type: 'sz-resize', height: document.documentElement.scrollHeight }, '*');
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    window.addEventListener('load', function() {
      parent.postMessage({ type: 'sz-resize', height: document.documentElement.scrollHeight }, '*');
    });
  <\/script>
</body>
</html>`)

    return { iframe, height, srcdoc }
  }
}
</script>
