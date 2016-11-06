import Vue from 'vue'
import Rooster from './components/Rooster.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

var App = require('./App.vue')

const routes = [
  { path: '/shows', component: Rooster, name: 'Shows' },
  { path: '/movies', component: Rooster, name: 'Movies' },
  { path: '*', redirect: '/shows' }
]
const router = new VueRouter({routes: routes, linkActiveClass: 'active'})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
