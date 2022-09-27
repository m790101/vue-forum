<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
    :initial-restaurant="restaurant"
    />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
    :restaurant-comments="restaurantComments"
    @after-delete-comment="handleAfterDelete"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
    :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'


export default {
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods:{
      async fetchRestaurant (restaurantId) {
      try{
        const {data} = await restaurantsAPI.getRestaurant({restaurantId})
        const {
          id,
          name,
          Category,
          image,
          opening_hours:openingHours,
          tel,
          address,
          description,
          Comments:comments
        } = data.restaurant
      this.restaurant = {
        id,
        name,
        categoryName:Category.name,
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited:data.isFavorited,
        isLiked:data.isLiked,
      }
          this.restaurantComments = comments
      }
      catch(err){
        console.log(err)
        Toast.fire({
          icon: "error",
          title: "無法讀取餐廳資料，請稍後再試",
        });
      }
  
    },
    async handleAfterDelete(commentId){
      try{
      const {data} = await restaurantsAPI.deleteComment({commentId})
      if(data.status === 'error') throw new Error
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId)

      }
    catch(err){
      console.log(err)
      Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
    }

  },
  async afterCreateComment(payload){
    try{
      const {restaurantId,text} = payload
      const {data} = await restaurantsAPI.addComment({restaurantId,text, User:this.currentUser})

      this.restaurantComments.push({
          RestaurantId: restaurantId,
          id: data.commentId,
          User:{
                ...this.currentUser
          },
          text,
          createdAt:new Date()

      })
    }
    catch(err){
      console.log(err)
      Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試",
        });
    }

  }
  },
  created(){
      const {id:restaurantId} = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  components:{
      RestaurantDetail,
      RestaurantComments,
      CreateComment
  },
  beforeRouteUpdate (to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  }
</script>