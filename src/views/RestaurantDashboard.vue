<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>


<script>
const dummyData = {
    "restaurant": {
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
        "Comments": [
            {
                "id": 1,
                "text": "Dolor eaque ipsa omnis quae sed.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$Mvbo.sUyJGW8s.o9ksTT1OARj683.w71T.h8uqrezQM1Qh82l/WpS",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z"
                }
            },
            {
                "id": 51,
                "text": "Doloremque rerum eos odio repudiandae temporibus fugit.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$Mvbo.sUyJGW8s.o9ksTT1OARj683.w71T.h8uqrezQM1Qh82l/WpS",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z"
                }
            },
            {
                "id": 101,
                "text": "Delectus maiores excepturi veniam eos nostrum quod mollitia inventore impedit.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$1szKGpM.9l8NatJD3ZFm2eVJYvZ3pUb5K4X/yt4uBdvBIk88qj56q",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z"
                }
            }
        ]
    }
}
export default {
    data(){
        return {
            restaurant: {
                name: dummyData.restaurant.name,
                categoryName: dummyData.restaurant.Category.name,
                 commentsLength: dummyData.restaurant.Comments.length,
                 viewCounts: dummyData.restaurant.viewCounts
            },
          
        }
    },
}
</script>