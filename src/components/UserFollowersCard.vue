<template>
  <div class="card">
    <div class="card-header"><strong>{{userProfile.followers.length}}</strong> followers (追隨者)</div>
    <div class="card-body d-flex flex-wrap">
      <router-link :to="{name:'user',params:{id:follower.id}}" v-for="follower in userProfile.followers" :key="follower.id">
        <img
          :src="follower.image"
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