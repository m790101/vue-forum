<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center" >
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            src="貼上引用圖片網址，同學可自行選擇圖片進行實作"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="removeFollowed(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowed(user.id)"
            v-else
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$cfDcq1PWTZR.uirKejSwpu4s5dIZQ8mMuivWaC8C6bI6ZvXIRTfdC",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$1szKGpM.9l8NatJD3ZFm2eVJYvZ3pUb5K4X/yt4uBdvBIk88qj56q",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$Mvbo.sUyJGW8s.o9ksTT1OARj683.w71T.h8uqrezQM1Qh82l/WpS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}


export default {
  data(){
    return {
      users:[]
    }
  },
  components: {
    NavTabs,
  },
  methods:{
    fetchUser(){
      this.users = dummyData.users
    },
    addFollowed(userId){
      this.users = this.users.map((x)=>{
        if (x.id === userId){
          return x = {
            ...x,
            isFollowed:true
          }
        }
        return x
      })
    },
     removeFollowed(userId){
        this.users = this.users.map((x)=>{
        if (x.id === userId){
          return x = {
            ...x,
            isFollowed:false
          }
        }
        return x
      })
  }
  },
  created(){
    this.fetchUser()
  }
}
</script>