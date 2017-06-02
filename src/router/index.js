import Vue from 'vue'
import Router from 'vue-router'

import { createRoosterView, createDetailsView } from '@/views/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/shows', component: createRoosterView('shows') },
    { path: '/shows/:id', component: createDetailsView('shows') },
    { path: '/movies', component: createRoosterView('movies') },
    { path: '/movies/:id', component: createDetailsView('movies') },
    { path: '*', redirect: '/shows' }
  ],
  linkActiveClass: 'active'
})
