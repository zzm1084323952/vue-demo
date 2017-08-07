// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'

// import Home from './components/Home/Home.vue'

Vue.use(VueRouter)

Vue.prototype.$http = axios
// Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	},
  routes
})
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* eslint-disable no-new */

