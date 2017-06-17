// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from './diy/jquery'
import Axios from './diy/axios'

Vue.prototype.$http = Axios
// 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


import './public/css/bootstrap.min.css'
import './public/js/bootstrap.min'

import './public/css/reset.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App)
})
