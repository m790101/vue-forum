<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">1</th>
          <td>{{ user.email }}</td>
          <td>{{ user | role }}</td>
          <td v-if="user.id !== currentUser.id">
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    AdminNav,
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data.users;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法讀取資料，請稍後再試",
        });
      }
    },
    async toggleUserRole(userId) {
      try {
        const { data } = await adminAPI.users.update({ userId });
        if (data.status === "error") throw new Error();
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return (user = {
              ...user,
              isAdmin: !user.isAdmin,
            });
          }
          return user;
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法更新資料，請稍後再試",
        });
      }
    },
  },
  filters: {
    role(user) {
      return user.isAdmin ? "admin" : "user";
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>