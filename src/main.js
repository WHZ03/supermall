import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

//导入fastclcik
import FastClcik from 'fastclick'

//导入图片懒加载
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//安装toast的插件
Vue.use(toast);

//安装图片懒加载
Vue.use(LazyLoad)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')

//解决移动端的300ms的延迟
FastClcik.attach(document.body)
