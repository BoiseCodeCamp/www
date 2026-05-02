import '@mdi/font/css/materialdesignicons.css'
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
import { createApp } from 'vue'

const feedbackPaths = ['/feedback', '/feedback/']
if (feedbackPaths.includes(window.location.pathname)) {
  window.location.replace('https://forms.microsoft.com/r/N0AuPW7rBn')
}
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import './utils/SocketProvider.js'

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
  root
    .use(router)
    .mount('#app')
}
init()

