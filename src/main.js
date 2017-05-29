// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from './diy/axios'
Vue.prototype.$http = Axios
// 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等


import $ from 'jquery'
import './public/css/bootstrap.min.css'
import './public/js/bootstrap.min'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App)
})
