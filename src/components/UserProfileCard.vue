<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="userProfile.image"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.name }}</h5>
          <p class="card-text">
            {{ userProfile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ userProfile.comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ userProfile.favoritedRestaurants.length }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ userProfile.followings.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ userProfile.followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="currentUser.id === userProfile.id ">
            <router-link to="/users/2/edit"
              ><button type="submit" class="btn btn-primary" >edit</button></router-link
            >
          </p>
          <p v-else>
              <button
            type="button"
            class="btn btn-danger"
            v-if="userProfile.isFollowed"
            @click.stop.prevent="removeFollowed()"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowed()"
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
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
  data(){
      return{
          currentUser: dummyUser.currentUser

      }
      },
      methods:{
          addFollowed(){
              this.userProfile ={
                  ...this.userProfile,
                  isFollowed:true
              }
          },
          removeFollowed(){
              this.userProfile ={
                  ...this.userProfile,
                  isFollowed:false
              }
          },
      }
  }
</script>