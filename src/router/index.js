import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// 主页
const index = r => require.ensure([], () => r(require('../view/main/index')),'index')


const routerChild = r => require.ensure([], () => r(require('../components/routerChild.vue')),'routerChild')

Vue.use(Router)
const routes = [{
  path:'/',component:App,
  children:[
    { path: "",component: index},
    { path: "/index",component: index},
    //我的页面 的子路由
    { path: "/mainMy",component:routerChild,
      children:[
        {path:'/',component:index},
      ]
    }
  ]
}]

const router= new Router({
    routes,linkActiveClass:"my-active"
})
// router.beforeEach((to,from,next)=>{
//   next()
// })
export default router
