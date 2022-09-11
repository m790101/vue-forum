<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants" :key="restaurant.id"
    >
      <div class="row no-gutters" >
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
             {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorited(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorited(restaurant.id)"
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
import NavTabs from '../components/NavTabs.vue'

const dummyData={
    "restaurants": [
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
            "FavoritedUsers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$1szKGpM.9l8NatJD3ZFm2eVJYvZ3pUb5K4X/yt4uBdvBIk88qj56q",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 2,
                        "createdAt": "2022-09-09T08:16:03.000Z",
                        "updatedAt": "2022-09-09T08:16:03.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 1
        },
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
            "FavoritedUsers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$1szKGpM.9l8NatJD3ZFm2eVJYvZ3pUb5K4X/yt4uBdvBIk88qj56q",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "Favorite": {
                        "UserId": 2,
                        "RestaurantId": 1,
                        "createdAt": "2022-09-09T08:15:59.000Z",
                        "updatedAt": "2022-09-09T08:15:59.000Z"
                    }
                }
            ],
            "isFavorited": false,
            "FavoriteCount": 1
        },
        {
            "id": 50,
            "name": "Kenyon Barrows",
            "tel": "109.814.1262 x8759",
            "address": "4485 Reuben Mall",
            "opening_hours": "08:00",
            "description": "Officiis velit libero aperiam provident aut hic pe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.35422550783451",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Mallory Kessler",
            "tel": "(136) 846-0903",
            "address": "48103 McKenzie Underpass",
            "opening_hours": "08:00",
            "description": "nemo libero id",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.98342249064862",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Bonnie Homenick",
            "tel": "442.714.7778 x1971",
            "address": "13119 Buck Corner",
            "opening_hours": "08:00",
            "description": "Hic veniam doloribus non harum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.96268788646248",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Zane Douglas",
            "tel": "649-992-3038 x5812",
            "address": "03072 Wintheiser Dam",
            "opening_hours": "08:00",
            "description": "Et et placeat nobis. Tenetur iste neque est repell",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.03599860200944",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Esteban Metz",
            "tel": "1-128-713-0297 x613",
            "address": "8039 Schumm Spur",
            "opening_hours": "08:00",
            "description": "odio voluptates nulla",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.862342017705879",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Hillard Gislason",
            "tel": "236-234-6186 x89142",
            "address": "3274 Padberg Estates",
            "opening_hours": "08:00",
            "description": "Veritatis sequi labore reprehenderit molestias ips",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.344432659786506",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Reynold Mueller MD",
            "tel": "(682) 827-2997 x7225",
            "address": "55511 Allie Groves",
            "opening_hours": "08:00",
            "description": "Dolores odio quos aut numquam qui accusamus et ame",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.43717147610082",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Emily Kuhic",
            "tel": "1-762-766-1678 x9235",
            "address": "169 Brenda Groves",
            "opening_hours": "08:00",
            "description": "minus quis nulla",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.94218277296181",
            "viewCounts": 0,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}


export default {
  data(){
    return{
      restaurants: dummyData.restaurants
    }
  },
  methods:{
    addFavorited(restaurantId){
      this.restaurants = this.restaurants.map((x)=>{
        if(x.id === restaurantId){
          return {
            ...x,
            isFavorited:true
          }
        }
        return x
      })
    },
    removeFavorited(restaurantId){
      this.restaurants = this.restaurants.map((x)=>{
        if(x.id === restaurantId){
          return {
            ...x,
            isFavorited:false
          }
        }
        return x
      })
    }

  },
  components:{
    NavTabs
  }
}
</script>