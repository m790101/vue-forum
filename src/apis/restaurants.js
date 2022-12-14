import { apiHelper } from './../utils/helpers'


export default {
    getRestaurants({ page, categoryId }) {
        const searchParams = new URLSearchParams({ page, categoryId })
        return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
           
        })
    },
    getFeeds() {
        return apiHelper.get(`/restaurants/feeds`, {

        })
    },
    getTopRestaurants(){
        return apiHelper.get(`/restaurants/top`, {

        })
    },
    getRestaurant ({ restaurantId }) {
        return apiHelper.get(`/restaurants/${restaurantId}`, {

        })
      },
      addComment({restaurantId, text, User}){
        return apiHelper.post(`/comments`, {restaurantId,text, User},{

          })
      },
      deleteComment({commentId}){
        return apiHelper.delete(`/comments/${commentId}`, {

          })
      }
}