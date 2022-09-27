<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorited(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await restaurantsAPI.getTopRestaurants();
        this.restaurants = response.data.restaurants;
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        if (response.data.status !== "success") throw new Error();

        this.restaurants = this.restaurants.map((x) => {
          if (x.id === restaurantId) {
            return {
              ...x,
              FavoriteCount: x.FavoriteCount +1,
              isFavorited: true,
            };
          }
          return x;
        });
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({ restaurantId });
        if (response.data.status !== "success") throw new Error();

      this.restaurants = this.restaurants.map((x) => {
        if (x.id === restaurantId) {
          return {
            ...x,
            FavoriteCount: x.FavoriteCount - 1,
            isFavorited: false,
          };
        }
        return x;
      });
      } catch (err) {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後再試",
        });
      }

    },
  },
  created() {
    this.fetchData();
  },
  components: {
    NavTabs,
  },
};
</script>