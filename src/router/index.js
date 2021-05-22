import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import("views/home/Home")
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
//1. 安装插件
Vue.use(VueRouter)


//2.创建router对象
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',

})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.replace = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
