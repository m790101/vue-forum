<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followings.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="currentUser.id === user.id">
            <router-link
              :to="{ name: 'user-edit', params: { id: currentUser.id } }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </p>
          <p v-else>
            <button
              type="button"
              class="btn btn-danger"
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollowing(userProfile.id)"
            >
              取消追蹤
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(userProfile.id)"
              v-else
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
export default {
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: { ...this.userProfile },
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  mixins: [emptyImageFilter],
  methods: {
    async addFollowing(userId) {
      try {
        const response = await usersAPI.addFollowing({ userId });
        if (response.data.status !== "success") throw new Error();
        this.user = {
          ...this.user,
          isFollowed: true,
        };
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const response = await usersAPI.deleteFollowing({ userId });
        if (response.data.status !== "success") throw new Error();
        this.user = {
          ...this.user,
          isFollowed: false,
        };
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    }
    },
    watch:{
      userProfile(newValue){
        this.user = {
          ...this.user,
          ...newValue
        }
      }
    }
};
</script>