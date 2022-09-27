<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userProfile.followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body d-flex flex-wrap">
      <router-link :to="{name:'user',params:{id:following.id}}" v-for="following in userProfile.followings" :key="following.id">
        <img
          :src="following.image"
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
      default: () => [],
    },
  },
};
</script>