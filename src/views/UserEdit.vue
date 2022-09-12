<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="currentUser.name"
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="currentUser.image"
        :src="currentUser.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>


<script>
const currentUser = {
    "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cfDcq1PWTZR.uirKejSwpu4s5dIZQ8mMuivWaC8C6bI6ZvXIRTfdC",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-08T08:10:09.000Z",
        "updatedAt": "2022-09-08T08:10:09.000Z",
        "Comments": [
            {
                "id": 8,
                "text": "Aliquid et id sit dolores.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 8,
                    "name": "Lelah Hackett",
                    "tel": "(864) 118-1433 x7113",
                    "address": "7571 Prosacco Mill",
                    "opening_hours": "08:00",
                    "description": "Est molestias fuga suscipit harum reiciendis perspiciatis assumenda accusantium omnis. Et adipisci nulla molestiae. Est natus sit quisquam exercitationem minus reiciendis quisquam distinctio. At rerum natus facere qui dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.60906542531883",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 13,
                "text": "Consequatur impedit quod quidem quaerat incidunt aspernatur.",
                "UserId": 1,
                "RestaurantId": 13,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 13,
                    "name": "Aida Harvey",
                    "tel": "386.847.6915 x78108",
                    "address": "66720 Nikolaus Mill",
                    "opening_hours": "08:00",
                    "description": "Ullam fuga ut ducimus rerum harum iste consequatur saepe qui. Consequatur cum est nihil unde rem eius eos voluptatem nulla. Corporis necessitatibus facere quia nulla saepe recusandae perferendis consequatur nihil.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.70391497354646",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 29,
                "text": "Sed exercitationem voluptates voluptatem rerum dignissimos commodi.",
                "UserId": 1,
                "RestaurantId": 29,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 29,
                    "name": "Juliet Nienow I",
                    "tel": "(541) 330-8918 x626",
                    "address": "5396 Kuvalis Circle",
                    "opening_hours": "08:00",
                    "description": "odio",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.15320294217625",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 31,
                "text": "Distinctio laborum rerum voluptatem.",
                "UserId": 1,
                "RestaurantId": 31,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 31,
                    "name": "Linda Braun",
                    "tel": "(768) 055-2233 x2860",
                    "address": "0635 Catherine Orchard",
                    "opening_hours": "08:00",
                    "description": "Ut et consequatur ducimus voluptas nulla beatae incidunt possimus aspernatur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.094970106372678",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 35,
                "text": "Quibusdam corporis rerum rerum eius minus quos.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Elmira Anderson DVM",
                    "tel": "1-175-607-2794",
                    "address": "28075 Kelsi Divide",
                    "opening_hours": "08:00",
                    "description": "Ab id qui architecto molestias natus cum iste possimus non. Natus voluptate recusandae totam explicabo. Quia quidem voluptatem ut animi est eligendi. Consequatur et ut minima ut eligendi earum.\n \rQui nisi cupiditate id sequi minima architecto quo est. Magni eum ad reiciendis temporibus doloribus laboriosam distinctio quaerat. Consequatur dicta tenetur aperiam aut non voluptatem.\n \rAspernatur similique sed eos occaecati suscipit eligendi. Voluptatem nihil voluptatibus repellat perferendis velit sint placeat. Porro ex aut sit qui qui consequatur dignissimos quis quam. Facilis totam aut sit distinctio illo corporis temporibus. Occaecati excepturi et voluptatem necessitatibus. Est esse ipsum earum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.55555652485154",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 37,
                "text": "Minima enim ad fugit voluptatibus mollitia omnis.",
                "UserId": 1,
                "RestaurantId": 37,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 37,
                    "name": "Kristopher Stark MD",
                    "tel": "796.699.1962 x228",
                    "address": "31544 Samson Terrace",
                    "opening_hours": "08:00",
                    "description": "Porro unde neque porro accusantium repudiandae cupiditate ut. Accusamus dicta voluptatem tenetur sed quasi. Accusamus eveniet quo magnam molestiae suscipit possimus. Perferendis officiis nulla dolore consectetur et possimus nobis. Non laudantium dolores et alias. Velit labore alias exercitationem consectetur ducimus qui voluptatem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.440601566282336",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 45,
                "text": "Quas velit earum laborum ut.",
                "UserId": 1,
                "RestaurantId": 45,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 45,
                    "name": "Hillard Gislason",
                    "tel": "236-234-6186 x89142",
                    "address": "3274 Padberg Estates",
                    "opening_hours": "08:00",
                    "description": "Veritatis sequi labore reprehenderit molestias ipsum culpa saepe. Perferendis atque voluptatem architecto similique perferendis placeat est. Rem vel sit et reprehenderit fugit culpa sit iusto ratione. Similique consequuntur unde molestiae similique vel.\n \rSint blanditiis sunt sunt ipsam. Facilis quo atque magnam qui aperiam itaque. Qui ratione non veniam odio harum velit. Odio et mollitia dignissimos. Non reiciendis cupiditate quos dicta qui id. Earum sint ex omnis doloribus illo ea excepturi impedit.\n \rId a aliquid hic voluptas occaecati. Neque et dolorum dolores rem. Voluptatem expedita et et asperiores animi. In in rem ut quos pariatur voluptatum et provident. Corrupti ipsam inventore ullam sunt molestiae. Est quaerat aut nesciunt ea.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.344432659786506",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 48,
                "text": "Assumenda est architecto voluptatem officia.",
                "UserId": 1,
                "RestaurantId": 48,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 52,
                "text": "Quaerat et ea.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 2,
                    "name": "Vance King I",
                    "tel": "1-137-833-8802 x155",
                    "address": "701 Windler Underpass",
                    "opening_hours": "08:00",
                    "description": "Eaque molestiae optio autem ut non voluptatem et. Distinctio saepe tempora eligendi odit aperiam et pariatur. Ut ea tempore. Dolores sunt quo eaque nihil libero officia sit. Nisi vitae esse.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.875408653375985",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 53,
                "text": "Beatae nobis mollitia voluptas eos eius ea aut.",
                "UserId": 1,
                "RestaurantId": 3,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 54,
                "text": "Rerum recusandae aut non.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 4,
                    "name": "Kristin Balistreri",
                    "tel": "(208) 567-4879 x00508",
                    "address": "377 Flavie Light",
                    "opening_hours": "08:00",
                    "description": "Reprehenderit qui sit nisi aut et enim. Tempore asperiores doloribus quia blanditiis quia deleniti est aut. Voluptas et ut et doloremque. Commodi dolorem quam nihil quia iusto dolor soluta.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.18361377496046",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 58,
                "text": "Et dolorum asperiores ad.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 8,
                    "name": "Lelah Hackett",
                    "tel": "(864) 118-1433 x7113",
                    "address": "7571 Prosacco Mill",
                    "opening_hours": "08:00",
                    "description": "Est molestias fuga suscipit harum reiciendis perspiciatis assumenda accusantium omnis. Et adipisci nulla molestiae. Est natus sit quisquam exercitationem minus reiciendis quisquam distinctio. At rerum natus facere qui dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.60906542531883",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 59,
                "text": "Quasi minima corporis.",
                "UserId": 1,
                "RestaurantId": 9,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 9,
                    "name": "Myrtice Labadie",
                    "tel": "1-547-608-6496 x42798",
                    "address": "56023 Santino Valleys",
                    "opening_hours": "08:00",
                    "description": "Et consequatur voluptatem ut quis ut. Voluptatibus provident et. Id quisquam architecto beatae. Tenetur non ullam natus esse rerum sed. Ab rerum eius error libero.\n \rAutem eveniet numquam dolorem ipsam sapiente consectetur esse et. Ad tempora doloribus sunt aut qui. Ratione officia et debitis illo et quo in molestiae ut. Occaecati eum quasi minima illum et non sed ut. Totam dolores itaque quis doloribus natus consequatur possimus. Accusamus et consequuntur.\n \rSuscipit blanditiis qui est. Dolorum eligendi cum dolor consectetur ut dolore. Animi maiores doloribus rem exercitationem quis quia quo.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.860005621363484",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 62,
                "text": "Quasi accusamus rerum consequatur illo et sit.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 12,
                    "name": "Ocie Nicolas",
                    "tel": "1-123-358-4288 x046",
                    "address": "90601 Mann Garden",
                    "opening_hours": "08:00",
                    "description": "Eaque nisi et aut rem qui architecto. Sit repellendus voluptas fugit odio aut natus. Quam autem sunt vitae voluptatem nemo eum ut. Nihil quisquam dicta eos quia. Adipisci praesentium ipsam.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.83813262127366",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 65,
                "text": "Voluptas quis et animi incidunt iure laboriosam voluptates quos.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 15,
                    "name": "Destiney Bergnaum",
                    "tel": "1-326-971-9375",
                    "address": "4395 Wunsch Islands",
                    "opening_hours": "08:00",
                    "description": "Dolores error minus est placeat accusamus rem tenetur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.61646828022903",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 66,
                "text": "Corporis dolorem officiis sit nihil.",
                "UserId": 1,
                "RestaurantId": 16,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 16,
                    "name": "Michael Goyette",
                    "tel": "732-012-8878",
                    "address": "91023 Hammes Course",
                    "opening_hours": "08:00",
                    "description": "quis nihil ut",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.58348379203267",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 72,
                "text": "Reiciendis ad et ut et neque.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 22,
                    "name": "Martine Price",
                    "tel": "1-229-451-9441",
                    "address": "55742 Shanahan Run",
                    "opening_hours": "08:00",
                    "description": "necessitatibus pariatur asperiores",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.805105559856517",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 78,
                "text": "Tenetur esse corrupti corrupti porro voluptatem fugit ipsam possimus.",
                "UserId": 1,
                "RestaurantId": 28,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 28,
                    "name": "Mr. Deion Davis",
                    "tel": "(659) 149-2649 x79272",
                    "address": "145 Myah Port",
                    "opening_hours": "08:00",
                    "description": "Et rerum veritatis. Possimus laborum impedit. Dolores ipsa ipsam corrupti voluptatem eveniet voluptatum maxime et.\n \rItaque molestiae aut enim est itaque voluptatem. Voluptas qui similique distinctio doloribus consequatur. Quas et libero ut doloremque aliquid aut. Natus temporibus dolore est est possimus iusto saepe consequatur. Eius similique assumenda ut est id officiis quasi itaque.\n \rBeatae doloribus cum cumque est est sed tempore animi autem. Sed sint occaecati et aspernatur quis. Quas excepturi mollitia natus itaque voluptatem quo et.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.92733047857796",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 79,
                "text": "Quia qui fugiat aliquid impedit officiis rerum ad sint qui.",
                "UserId": 1,
                "RestaurantId": 29,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 29,
                    "name": "Juliet Nienow I",
                    "tel": "(541) 330-8918 x626",
                    "address": "5396 Kuvalis Circle",
                    "opening_hours": "08:00",
                    "description": "odio",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.15320294217625",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 92,
                "text": "Et aut cum quisquam.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 42,
                    "name": "Alexandre Volkman Jr.",
                    "tel": "833-557-7992",
                    "address": "42697 Champlin Knoll",
                    "opening_hours": "08:00",
                    "description": "fuga minima hic",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.37914029881227",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 98,
                "text": "Eum qui tempora porro adipisci libero.",
                "UserId": 1,
                "RestaurantId": 48,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 100,
                "text": "Magnam dolorem est saepe ducimus ut.",
                "UserId": 1,
                "RestaurantId": 50,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 50,
                    "name": "Kenyon Barrows",
                    "tel": "109.814.1262 x8759",
                    "address": "4485 Reuben Mall",
                    "opening_hours": "08:00",
                    "description": "Officiis velit libero aperiam provident aut hic perspiciatis sed.\nUt ratione quia hic hic enim enim.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.35422550783451",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 104,
                "text": "Sed iusto repudiandae dolorem molestiae cupiditate voluptate earum consectetur quos.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 4,
                    "name": "Kristin Balistreri",
                    "tel": "(208) 567-4879 x00508",
                    "address": "377 Flavie Light",
                    "opening_hours": "08:00",
                    "description": "Reprehenderit qui sit nisi aut et enim. Tempore asperiores doloribus quia blanditiis quia deleniti est aut. Voluptas et ut et doloremque. Commodi dolorem quam nihil quia iusto dolor soluta.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.18361377496046",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 107,
                "text": "Temporibus dolorum deleniti aut.",
                "UserId": 1,
                "RestaurantId": 7,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 108,
                "text": "Laudantium aut praesentium quisquam earum.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 8,
                    "name": "Lelah Hackett",
                    "tel": "(864) 118-1433 x7113",
                    "address": "7571 Prosacco Mill",
                    "opening_hours": "08:00",
                    "description": "Est molestias fuga suscipit harum reiciendis perspiciatis assumenda accusantium omnis. Et adipisci nulla molestiae. Est natus sit quisquam exercitationem minus reiciendis quisquam distinctio. At rerum natus facere qui dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.60906542531883",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 109,
                "text": "Recusandae iusto reprehenderit ut nostrum et aperiam odit.",
                "UserId": 1,
                "RestaurantId": 9,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 9,
                    "name": "Myrtice Labadie",
                    "tel": "1-547-608-6496 x42798",
                    "address": "56023 Santino Valleys",
                    "opening_hours": "08:00",
                    "description": "Et consequatur voluptatem ut quis ut. Voluptatibus provident et. Id quisquam architecto beatae. Tenetur non ullam natus esse rerum sed. Ab rerum eius error libero.\n \rAutem eveniet numquam dolorem ipsam sapiente consectetur esse et. Ad tempora doloribus sunt aut qui. Ratione officia et debitis illo et quo in molestiae ut. Occaecati eum quasi minima illum et non sed ut. Totam dolores itaque quis doloribus natus consequatur possimus. Accusamus et consequuntur.\n \rSuscipit blanditiis qui est. Dolorum eligendi cum dolor consectetur ut dolore. Animi maiores doloribus rem exercitationem quis quia quo.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.860005621363484",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 112,
                "text": "Rerum aut impedit beatae libero recusandae aperiam non.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 12,
                    "name": "Ocie Nicolas",
                    "tel": "1-123-358-4288 x046",
                    "address": "90601 Mann Garden",
                    "opening_hours": "08:00",
                    "description": "Eaque nisi et aut rem qui architecto. Sit repellendus voluptas fugit odio aut natus. Quam autem sunt vitae voluptatem nemo eum ut. Nihil quisquam dicta eos quia. Adipisci praesentium ipsam.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.83813262127366",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 115,
                "text": "Vitae omnis qui sequi incidunt corporis quos fugit numquam minus.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 15,
                    "name": "Destiney Bergnaum",
                    "tel": "1-326-971-9375",
                    "address": "4395 Wunsch Islands",
                    "opening_hours": "08:00",
                    "description": "Dolores error minus est placeat accusamus rem tenetur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.61646828022903",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 116,
                "text": "Molestiae vel est.",
                "UserId": 1,
                "RestaurantId": 16,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 16,
                    "name": "Michael Goyette",
                    "tel": "732-012-8878",
                    "address": "91023 Hammes Course",
                    "opening_hours": "08:00",
                    "description": "quis nihil ut",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.58348379203267",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 118,
                "text": "Corporis et minima facere aliquid.",
                "UserId": 1,
                "RestaurantId": 18,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 18,
                    "name": "Jimmie Ritchie",
                    "tel": "681.370.3529 x38080",
                    "address": "72434 White Cliffs",
                    "opening_hours": "08:00",
                    "description": "Dolorem aliquam nesciunt molestias autem. Nesciunt nihil minima similique sint aut explicabo ut explicabo. Asperiores ex dolorem.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5625789449208902",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 119,
                "text": "Cumque harum incidunt fugiat.",
                "UserId": 1,
                "RestaurantId": 19,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 19,
                    "name": "Helena Harvey",
                    "tel": "420-012-1109",
                    "address": "6897 Kerluke Via",
                    "opening_hours": "08:00",
                    "description": "Maxime officia ipsam beatae vel ipsam repellat qui. Reiciendis nam necessitatibus repellat provident aut nisi. Ipsa ipsa aut saepe ipsa qui eveniet assumenda occaecati sed. Et sint quia iure. Doloribus est quo. Qui consequatur velit.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.95838747042082",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 125,
                "text": "Quas est ut et necessitatibus sint illum architecto iure.",
                "UserId": 1,
                "RestaurantId": 25,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 25,
                    "name": "Oswald Hills",
                    "tel": "168.801.2337 x574",
                    "address": "0761 Jeromy Haven",
                    "opening_hours": "08:00",
                    "description": "vitae id facere",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.399341684270958",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 128,
                "text": "Incidunt dolorem libero accusamus.",
                "UserId": 1,
                "RestaurantId": 28,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 28,
                    "name": "Mr. Deion Davis",
                    "tel": "(659) 149-2649 x79272",
                    "address": "145 Myah Port",
                    "opening_hours": "08:00",
                    "description": "Et rerum veritatis. Possimus laborum impedit. Dolores ipsa ipsam corrupti voluptatem eveniet voluptatum maxime et.\n \rItaque molestiae aut enim est itaque voluptatem. Voluptas qui similique distinctio doloribus consequatur. Quas et libero ut doloremque aliquid aut. Natus temporibus dolore est est possimus iusto saepe consequatur. Eius similique assumenda ut est id officiis quasi itaque.\n \rBeatae doloribus cum cumque est est sed tempore animi autem. Sed sint occaecati et aspernatur quis. Quas excepturi mollitia natus itaque voluptatem quo et.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.92733047857796",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 132,
                "text": "Laboriosam cum vitae non adipisci repellat qui commodi aspernatur.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 32,
                    "name": "Jayden Schulist",
                    "tel": "475-272-5339 x5248",
                    "address": "4222 Melody Roads",
                    "opening_hours": "08:00",
                    "description": "consequuntur",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.15685746873153",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 133,
                "text": "Commodi sunt omnis omnis dolorem sint sunt ullam totam.",
                "UserId": 1,
                "RestaurantId": 33,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 33,
                    "name": "Deborah Runte Sr.",
                    "tel": "1-583-060-0943 x542",
                    "address": "199 Parker Forges",
                    "opening_hours": "08:00",
                    "description": "Modi maxime ipsum aut reprehenderit et iure.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.499315449399107",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 135,
                "text": "Non et odio.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Elmira Anderson DVM",
                    "tel": "1-175-607-2794",
                    "address": "28075 Kelsi Divide",
                    "opening_hours": "08:00",
                    "description": "Ab id qui architecto molestias natus cum iste possimus non. Natus voluptate recusandae totam explicabo. Quia quidem voluptatem ut animi est eligendi. Consequatur et ut minima ut eligendi earum.\n \rQui nisi cupiditate id sequi minima architecto quo est. Magni eum ad reiciendis temporibus doloribus laboriosam distinctio quaerat. Consequatur dicta tenetur aperiam aut non voluptatem.\n \rAspernatur similique sed eos occaecati suscipit eligendi. Voluptatem nihil voluptatibus repellat perferendis velit sint placeat. Porro ex aut sit qui qui consequatur dignissimos quis quam. Facilis totam aut sit distinctio illo corporis temporibus. Occaecati excepturi et voluptatem necessitatibus. Est esse ipsum earum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.55555652485154",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 138,
                "text": "Reprehenderit a odit quis est sed eum similique.",
                "UserId": 1,
                "RestaurantId": 38,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
                    "id": 38,
                    "name": "Dr. Aubrey Rempel",
                    "tel": "486-249-5879 x81945",
                    "address": "16836 Roberts Inlet",
                    "opening_hours": "08:00",
                    "description": "aut aut perferendis",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.431553919688735",
                    "viewCounts": 0,
                    "createdAt": "2022-09-08T08:10:09.000Z",
                    "updatedAt": "2022-09-08T08:10:09.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 146,
                "text": "Possimus magni omnis est distinctio nulla enim aut qui.",
                "UserId": 1,
                "RestaurantId": 46,
                "createdAt": "2022-09-08T08:10:09.000Z",
                "updatedAt": "2022-09-08T08:10:09.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            }
        ],
        "FavoritedRestaurants": [],
        "Followers": [],
        "Followings": []
    },
    "isFollowed": false
}
export default {
    data(){
        return {
            currentUser:{
            id:-1,
            name:'',
            image:'',
            },
            

        }
    },
    methods:{
        fetchUser(){
            const {id, name, image} = currentUser.profile
            this.currentUser = {
                ...this.currentUser,
                id,
                name,
                image,
            }
        },
        handleFileChange(e){
            const { files } = e.target 
            const imageURL = window.URL.createObjectURL(files[0])
            this.currentUser.image = imageURL
        },
        handleSubmit(e){
            const form = e.target
            const formData = new FormData(form)
            for(let [name,value] of formData.entries()){
                console.log(name + ':' + value)
            }
        }
    },
    created(){
       
        this.fetchUser()
    }
}
</script>