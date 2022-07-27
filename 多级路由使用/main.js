import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'//引入路由
import router from './router/index' //引入路由器

Vue.config.productionTip = false
Vue.use(VueRouter)//使用插件

new Vue({
  render: h => h(App),
  // 配置项添加store
  store,
  router
}).$mount('#app')
