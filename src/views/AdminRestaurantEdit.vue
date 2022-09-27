<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
    data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  components: {
    AdminRestaurantForm
  },
  methods: {
    async handleAfterSubmit (formData) {
      try{
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update(
          {
            restaurantId:this.restaurant.id,
            formData
          }
        )
         if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants' })
      }
      catch(err){
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant (restaurantId) {
      try{
          const {data} = await adminAPI.restaurants.getDetail({restaurantId})
      const {
        id,
        CategoryId:categoryId,
        name,
        tel,
        address,
        description,
        image,
        opening_hours:openingHours,
      } = data.restaurant
      this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId
        }
      }
      catch(err){
          Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  },
    created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
}
</script>