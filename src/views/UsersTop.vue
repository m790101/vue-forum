<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img
            src="https://i.imgur.com/CMdEy1g.jpeg"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
            v-else
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    NavTabs,
  },
  methods: {
    async fetchUser() {
      try {
        const response = await usersAPI.getTopUsers();
        const { users } = response.data;
        this.users = users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const response = await usersAPI.addFollowing({ userId });
        if (response.data.status !== "success") throw new Error();
        this.users = this.users.map((x) => {
          if (x.id === userId) {
            return (x = {
              ...x,
              followerCount: x.followerCount + 1,
              isFollowed: true,
            });
          }
          return x;
        });
      } catch (err) {
        console.log(err);
        Toast.fire({
      icon: 'error',
      title: '無法加入追蹤，請稍後再試'
    })
      }
    },
    async deleteFollowing(userId) {
      try {
        const response = await usersAPI.deleteFollowing({ userId });
        if (response.data.status !== "success") throw new Error();
        this.users = this.users.map((x) => {
          if (x.id === userId) {
            return (x = {
              ...x,
              followerCount: x.followerCount - 1,
              isFollowed: false,
            });
          }
          return x;
        });
      } catch (err) {
        console.log(err);
            Toast.fire({
      icon: 'error',
      title: '無法取消追蹤，請稍後再試'
    })
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>