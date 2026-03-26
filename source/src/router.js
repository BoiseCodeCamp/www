import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/register',
    name: 'Register',
    component: loadPage('RegisterPage')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: loadPage('ThankYouPage')
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: loadPage('SpeakersPage')
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: loadPage('SessionsPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
