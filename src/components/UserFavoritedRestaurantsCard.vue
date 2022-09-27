<template>
  <div class="card">
    <div class="card-header"><strong>{{userProfile.favoritedRestaurants.length}}</strong> 收藏的餐廳</div>
    <div class="card-body d-flex flex-wrap">
      <router-link :to="{name:'restaurant',params:{id:favoritedRestaurant.id}}" v-for="favoritedRestaurant in userProfile.favoritedRestaurants" :key="favoritedRestaurant.id">
        <img
          :src="favoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
};
</script>