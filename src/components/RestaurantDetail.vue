<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <a
        class="btn btn-primary btn-border mr-2"
        href="#"
      >Dashboard</a>

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorited(restaurant.id)"
        v-else
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLiked(restaurant.id)"
        v-else
      >
        Like
      </button>
    </div>
  </div>
</template>


<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props:{
    initialRestaurant:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods:{
    async addFavorited(restaurantId){
      try{
        const {data} = await usersAPI.addFavorite({restaurantId})
        if(data.status === 'error') throw new Error
      this.restaurant = {
        ...this.restaurant,
        isFavorited:true
      }
      }
      catch(err){
        Toast.fire({
          icon: "error",
          title: "無法讀取餐廳資料，請稍後再試",
        });
      }

    },
    async deleteFavorite(restaurantId){
       try{
        const {data} = await usersAPI.deleteFavorite({restaurantId})
        if(data.status === 'error') throw new Error
      this.restaurant = {
        ...this.restaurant,
        isFavorited:false
      }
      }
      catch(err){
        Toast.fire({
          icon: "error",
          title: "無法讀取餐廳資料，請稍後再試",
        });
      }
    },
    async addLiked(restaurantId){
       try{
        const {data} = await usersAPI.addLike({restaurantId})
        if(data.status === 'error') throw new Error
      this.restaurant = {
        ...this.restaurant,
        isLiked:true
      }
      }
      catch(err){
        Toast.fire({
          icon: "error",
          title: "無法讀取餐廳資料，請稍後再試",
        });
      }

    },
    async deleteLike(restaurantId){
      try{
        const {data} = await usersAPI.deleteLike({restaurantId})
        if(data.status === 'error') throw new Error
      this.restaurant = {
        ...this.restaurant,
        isLiked:false
      }
      }
      catch(err){
        Toast.fire({
          icon: "error",
          title: "無法讀取餐廳資料，請稍後再試",
        });
      }
      
    }
    
    },
    watch:{
      initialRestaurant(newValue){
        this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
      }
    }
  }
  
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>