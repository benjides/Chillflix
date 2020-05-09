import Vue from 'vue'
import VueRouter from 'vue-router'

import { createRoosterView, createDetailsView } from '@/views/'

Vue.use(VueRouter)

const routes = [
  { path: '/shows', component: createRoosterView('shows') },
  { path: '/shows/:id', component: createDetailsView('shows') },
  { path: '/movies', component: createRoosterView('movies') },
  { path: '/movies/:id', component: createDetailsView('movies') },
  { path: '*', redirect: '/shows' }
]

const router = new VueRouter({
  routes
})

export default router
