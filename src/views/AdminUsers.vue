<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav/>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            1
          </th>
          <td>{{user.email}}</td>
          <td>{{user|role}}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import AdminNav from '../components/AdminNav.vue'

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
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$1szKGpM.9l8NatJD3ZFm2eVJYvZ3pUb5K4X/yt4uBdvBIk88qj56q",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$Mvbo.sUyJGW8s.o9ksTT1OARj683.w71T.h8uqrezQM1Qh82l/WpS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-08T08:10:09.000Z",
            "updatedAt": "2022-09-08T08:10:09.000Z"
        }
    ]
}

export default {
    data(){
        return {
            users:[]
        }
    },
    components:{
        AdminNav,
    },
    methods:{
        fetchData(){
            this.users = dummyData.users
        },
        toggleUserRole(userId){
            this.users = this.users.map((user)=> {
                if(user.id === userId){
                    return user = {
                        ...user,
                        isAdmin: !user.isAdmin
                    }
                }
                return user
            })
        }
    },
    filters:{
        role(user){
            return user.isAdmin? 'admin':'user'
        }
    },
    created(){
        this.fetchData()
    }
}
</script>