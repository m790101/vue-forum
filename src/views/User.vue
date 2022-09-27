<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <!--UserProfileCard-->
        <UserProfileCard :user-profile="user" />
        <div class="row">
          <div class="col-md-4">
            <!--UserFollowingCard-->
            <UserFollowingCard :user-profile="user" />
            <br />
            <!--UserFollowersCard-->
            <UserFollowersCard :user-profile="user" />
          </div>
          <div class="col-md-8">
            <!--UserFollowersCard-->
            <UserCommentsCard :user-profile="user" />
            <br />
            <UserFavoritedRestaurantsCard :user-profile="user" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'



export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        comments: [],
        favoritedRestaurants: [],
        followings: [],
        followers: [],
        isFollowed: false,
      },
    };
  },
  methods: {
    async fetchData(userId) {
      try{
        const {data} = await usersAPI.get({userId})
        const {profile, isFollowed} = data
        const {
        id,
        name,
        email,
        Comments,
        FavoritedRestaurants,
        Followers,
        Followings,
        image,
      } = profile;
            this.user = {
        ...this.user,
        id,
        name,
        email,
        image,
        favoritedRestaurants: FavoritedRestaurants,
        followings: Followings,
        followers: Followers,
        isFollowed: isFollowed,
      }

      const commentSet = new Set();
      this.user.comments = Comments.filter(
        (comment) =>
          comment.Restaurant &&
          !commentSet.has(comment.Restaurant.id) &&
          commentSet.add(comment.Restaurant.id)
      )


      }
      catch(err){
        Toast.fire({
          icon: "error",
          title: "無法讀取使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const {id} = this.$route.params
    this.fetchData(id);
  },
  components: {
    UserProfileCard,
    UserFollowingCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  beforeRouteUpdate(to,from,next){
    const {id }= to.params 
    this.fetchData(id)
    next()
  }
};
</script>


