import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Restaurants from '../views/Restaurants'

Vue.use(VueRouter)


const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/restaurants',
    name: 'reastaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: ()=>import('../views/RestaurantsFeeds')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: ()=>import('../views/RestaurantsTop')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: ()=>import('../views/UsersTop')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})



export default router
