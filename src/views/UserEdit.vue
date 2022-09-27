<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="currentUser.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="currentUser.image"
          :src="currentUser.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">Submit</button>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
      isProcessing:false
    };
  },
  methods: {
    setUser() {
      const { id: userId } = this.$route.params;
      if (Number(userId) !== this.currentUser.id) {
        this.$router.push({ name: "not-found" });
        return;
      }
      this.user = {
        ...this.user,
        ...this.currentUser,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.currentUser.image = imageURL;
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        this.isProcessing = true
        const { data } = await usersAPI.updated({userId:this.user.id,formData})
        console.log(data)
        if(data.status === 'error') throw new Error
        this.isProcessing = false
        this.$router.push(`/users/${this.user.id}`)

      } catch (error) {
          this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "無法更新資料，請稍後再試",
        });
      }
      }
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
  created() {
    this.setUser();
  },
};
</script>