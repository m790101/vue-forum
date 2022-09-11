<template>
  <div class="card">
    <div class="card-header"><strong>{{userProfile.comments.length}}</strong> 已評論餐廳</div>
    <div class="card-body d-flex flex-wrap">
      <router-link :to="{name:'restaurant-single',params:{id:comment.id}}"  v-for="comment in userProfile.comments" :key="comment.id">
        <img
          :src="comment.Restaurant.image"
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
