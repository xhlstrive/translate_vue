// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import 'element-ui/lib/theme-chalk/index.css'
//import EmelentUi from 'element-ui'
import VueResource from 'vue-resource'

import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//import VueRouter from './router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
//import users from './components/users'

Vue.config.productionTip = false
//Vue.use(EmelentUi)
Vue.use(VueResource)
//Vue.use(VueRouter)

//配置路由
// const router = new VueRouter({
//   routes:[
//     { path:"/",component:Home },
//     { path:"/HelloWorld",component:HelloWorld}
//   ]
// })

//Vue.component("users",users);
/* eslint-disable no-new */
new Vue({
  el: '#app',
 // router,
  components: { App },
  template: '<App/>'
})
