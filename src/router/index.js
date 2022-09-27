import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Restaurants from '../views/Restaurants'
import store from './../store'

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
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
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
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: ()=>import('../views/RestaurantDashboard')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: ()=>import('../views/RestaurantSingle')
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: ()=>import('../views/UserEdit')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: ()=>import('../views/UsersTop')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: ()=>import('../views/User')
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

router.beforeEach((to, from, next) => {
  store.dispatch('fetchCurrentUser')
  next()
})


export default router
