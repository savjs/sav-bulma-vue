import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import {install} from '../src/index.js'
Vue.use(install)

import App from './App.vue'

import routes from './pages/index.js'

let router = new VueRouter({
  routes
})

let vm = new Vue(Object.assign({
  router,
}, App))

vm.$mount('#app')
