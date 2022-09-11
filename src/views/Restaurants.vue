<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
  <RestaurantsNavPills
  :categories="categories"
  />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>


<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantPagination from '../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Abdullah Labadie",
            "tel": "1-257-204-5917 x52551",
            "address": "3740 Yoshiko Harbors",
            "opening_hours": "08:00",
            "description": "nam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.9113445443287294",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Vance King I",
            "tel": "1-137-833-8802 x155",
            "address": "701 Windler Underpass",
            "opening_hours": "08:00",
            "description": "Eaque molestiae optio autem ut non voluptatem et. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.875408653375985",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Ms. Joan Gutkowski",
            "tel": "1-184-155-5735",
            "address": "89381 Gerlach Burg",
            "opening_hours": "08:00",
            "description": "Cupiditate sint temporibus ex porro rerum error.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.397698847172137",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Kristin Balistreri",
            "tel": "(208) 567-4879 x00508",
            "address": "377 Flavie Light",
            "opening_hours": "08:00",
            "description": "Reprehenderit qui sit nisi aut et enim. Tempore as",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.18361377496046",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mr. Chet Ebert",
            "tel": "113.015.0313",
            "address": "62642 Mraz Court",
            "opening_hours": "08:00",
            "description": "enim nisi id",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.225751392239438",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Cali Ullrich",
            "tel": "1-599-240-1963",
            "address": "36137 Hessel Harbor",
            "opening_hours": "08:00",
            "description": "Molestias id distinctio quo sed quo quis tempore e",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.59971338078584",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Major O'Reilly",
            "tel": "232.883.1486 x353",
            "address": "78297 Ariane Lodge",
            "opening_hours": "08:00",
            "description": "Iste est commodi doloremque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.93648565763829",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Lelah Hackett",
            "tel": "(864) 118-1433 x7113",
            "address": "7571 Prosacco Mill",
            "opening_hours": "08:00",
            "description": "Est molestias fuga suscipit harum reiciendis persp",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.60906542531883",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Myrtice Labadie",
            "tel": "1-547-608-6496 x42798",
            "address": "56023 Santino Valleys",
            "opening_hours": "08:00",
            "description": "Et consequatur voluptatem ut quis ut. Voluptatibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.860005621363484",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Maxine Rempel",
            "tel": "553.973.4863 x10208",
            "address": "9731 Moen Ports",
            "opening_hours": "08:00",
            "description": "Amet pariatur vel perferendis iusto similique. Ad ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.624680881868876",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}


export default {
  data(){
    return {
      restaurants:[],
      categories:[],
      categoryId:'',
      currentPage:-1,
      totalPage:[],
      previousPage:-1,
      nextPage:-1
    }
  },
  methods:{
    fetchRestaurants(){
          const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  components:{
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
  },
  created(){
    this.fetchRestaurants()
  }
}
</script>
