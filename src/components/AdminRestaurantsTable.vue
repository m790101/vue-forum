<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link :to="{name:'admin-restaurant-edit',params:{id:restaurant.id}}" class="btn btn-link">Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Abdullah Labadie",
      tel: "1-257-204-5917 x52551",
      address: "3740 Yoshiko Harbors",
      opening_hours: "08:00",
      description: "nam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.9113445443287294",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 2,
      name: "Vance King I",
      tel: "1-137-833-8802 x155",
      address: "701 Windler Underpass",
      opening_hours: "08:00",
      description:
        "Eaque molestiae optio autem ut non voluptatem et. Distinctio saepe tempora eligendi odit aperiam et pariatur. Ut ea tempore. Dolores sunt quo eaque nihil libero officia sit. Nisi vitae esse.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.875408653375985",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 3,
      name: "Ms. Joan Gutkowski",
      tel: "1-184-155-5735",
      address: "89381 Gerlach Burg",
      opening_hours: "08:00",
      description: "Cupiditate sint temporibus ex porro rerum error.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.397698847172137",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 4,
      name: "Kristin Balistreri",
      tel: "(208) 567-4879 x00508",
      address: "377 Flavie Light",
      opening_hours: "08:00",
      description:
        "Reprehenderit qui sit nisi aut et enim. Tempore asperiores doloribus quia blanditiis quia deleniti est aut. Voluptas et ut et doloremque. Commodi dolorem quam nihil quia iusto dolor soluta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.18361377496046",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 5,
      name: "Mr. Chet Ebert",
      tel: "113.015.0313",
      address: "62642 Mraz Court",
      opening_hours: "08:00",
      description: "enim nisi id",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.225751392239438",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 6,
      name: "Cali Ullrich",
      tel: "1-599-240-1963",
      address: "36137 Hessel Harbor",
      opening_hours: "08:00",
      description:
        "Molestias id distinctio quo sed quo quis tempore et ipsam. Nisi sint architecto unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.59971338078584",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 7,
      name: "Major O'Reilly",
      tel: "232.883.1486 x353",
      address: "78297 Ariane Lodge",
      opening_hours: "08:00",
      description: "Iste est commodi doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.93648565763829",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 8,
      name: "Lelah Hackett",
      tel: "(864) 118-1433 x7113",
      address: "7571 Prosacco Mill",
      opening_hours: "08:00",
      description:
        "Est molestias fuga suscipit harum reiciendis perspiciatis assumenda accusantium omnis. Et adipisci nulla molestiae. Est natus sit quisquam exercitationem minus reiciendis quisquam distinctio. At rerum natus facere qui dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.60906542531883",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 9,
      name: "Myrtice Labadie",
      tel: "1-547-608-6496 x42798",
      address: "56023 Santino Valleys",
      opening_hours: "08:00",
      description:
        "Et consequatur voluptatem ut quis ut. Voluptatibus provident et. Id quisquam architecto beatae. Tenetur non ullam natus esse rerum sed. Ab rerum eius error libero.\n \rAutem eveniet numquam dolorem ipsam sapiente consectetur esse et. Ad tempora doloribus sunt aut qui. Ratione officia et debitis illo et quo in molestiae ut. Occaecati eum quasi minima illum et non sed ut. Totam dolores itaque quis doloribus natus consequatur possimus. Accusamus et consequuntur.\n \rSuscipit blanditiis qui est. Dolorum eligendi cum dolor consectetur ut dolore. Animi maiores doloribus rem exercitationem quis quia quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.860005621363484",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 10,
      name: "Maxine Rempel",
      tel: "553.973.4863 x10208",
      address: "9731 Moen Ports",
      opening_hours: "08:00",
      description:
        "Amet pariatur vel perferendis iusto similique. Ad minus in in ut dignissimos et. Tenetur expedita aut maxime at natus cupiditate placeat minus fugit. Ducimus iusto sint iure tempora sapiente incidunt accusamus. Autem quaerat eum sapiente et deserunt atque ratione. Accusamus fuga nemo dolorum et veritatis quis quam.\n \rVoluptatem nisi quod. Voluptate nobis minus voluptatem. Nemo dolores dolor et non ut exercitationem. Qui non sunt qui qui mollitia impedit est et.\n \rOmnis facere accusamus vel a temporibus a. Et explicabo modi autem esse repudiandae perferendis numquam consequuntur. Dolorem labore impedit qui praesentium labore animi veritatis officiis. Quasi facere tempora neque architecto. Ut sit quasi. Aperiam architecto occaecati sed ullam nam delectus et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.624680881868876",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 11,
      name: "Dewitt Parker Sr.",
      tel: "532.866.8757",
      address: "33343 Schulist Orchard",
      opening_hours: "08:00",
      description:
        "Velit dicta dicta aliquid sed commodi officiis veritatis modi. Ipsam quia ut rerum et magnam. Vero minus et vero odio ea qui consequatur nisi rerum. Iste id qui voluptatibus reiciendis velit ullam debitis dolores. Explicabo enim qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.52792599477734",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 12,
      name: "Ocie Nicolas",
      tel: "1-123-358-4288 x046",
      address: "90601 Mann Garden",
      opening_hours: "08:00",
      description:
        "Eaque nisi et aut rem qui architecto. Sit repellendus voluptas fugit odio aut natus. Quam autem sunt vitae voluptatem nemo eum ut. Nihil quisquam dicta eos quia. Adipisci praesentium ipsam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.83813262127366",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 13,
      name: "Aida Harvey",
      tel: "386.847.6915 x78108",
      address: "66720 Nikolaus Mill",
      opening_hours: "08:00",
      description:
        "Ullam fuga ut ducimus rerum harum iste consequatur saepe qui. Consequatur cum est nihil unde rem eius eos voluptatem nulla. Corporis necessitatibus facere quia nulla saepe recusandae perferendis consequatur nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.70391497354646",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 14,
      name: "Zetta Gutmann PhD",
      tel: "174.896.6797 x9375",
      address: "12758 Macejkovic Expressway",
      opening_hours: "08:00",
      description:
        "Ut voluptas animi itaque.\nVel nulla harum corporis iste.\nCommodi odio at culpa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.82383302028573",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 15,
      name: "Destiney Bergnaum",
      tel: "1-326-971-9375",
      address: "4395 Wunsch Islands",
      opening_hours: "08:00",
      description: "Dolores error minus est placeat accusamus rem tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.61646828022903",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 16,
      name: "Michael Goyette",
      tel: "732-012-8878",
      address: "91023 Hammes Course",
      opening_hours: "08:00",
      description: "quis nihil ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.58348379203267",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 17,
      name: "Dr. Arvid Hammes",
      tel: "(153) 237-4870 x2728",
      address: "168 Bogisich Roads",
      opening_hours: "08:00",
      description: "optio eum ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.65521370279218",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 18,
      name: "Jimmie Ritchie",
      tel: "681.370.3529 x38080",
      address: "72434 White Cliffs",
      opening_hours: "08:00",
      description:
        "Dolorem aliquam nesciunt molestias autem. Nesciunt nihil minima similique sint aut explicabo ut explicabo. Asperiores ex dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.5625789449208902",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 19,
      name: "Helena Harvey",
      tel: "420-012-1109",
      address: "6897 Kerluke Via",
      opening_hours: "08:00",
      description:
        "Maxime officia ipsam beatae vel ipsam repellat qui. Reiciendis nam necessitatibus repellat provident aut nisi. Ipsa ipsa aut saepe ipsa qui eveniet assumenda occaecati sed. Et sint quia iure. Doloribus est quo. Qui consequatur velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.95838747042082",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 20,
      name: "Carolina Homenick",
      tel: "(258) 441-4190 x341",
      address: "257 Kozey Freeway",
      opening_hours: "08:00",
      description: "hic qui ratione",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.94032006467842",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 21,
      name: "Yasmine Pfannerstill",
      tel: "387.180.0898",
      address: "71508 Dickens Plaza",
      opening_hours: "08:00",
      description:
        "Ut totam minus.\nSimilique illo repellat aut aut architecto facilis consequuntur voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.92158596951889",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 22,
      name: "Martine Price",
      tel: "1-229-451-9441",
      address: "55742 Shanahan Run",
      opening_hours: "08:00",
      description: "necessitatibus pariatur asperiores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.805105559856517",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 23,
      name: "Lela Nolan",
      tel: "(845) 864-1412 x490",
      address: "22275 Sharon Isle",
      opening_hours: "08:00",
      description: "Sunt culpa tenetur numquam voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.30021208305317",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 24,
      name: "Torrance Lang",
      tel: "685-469-8391 x4494",
      address: "2690 Nova Stream",
      opening_hours: "08:00",
      description:
        "Temporibus ut sint aut omnis sed consectetur aliquam ducimus. Aut voluptates qui voluptatum reiciendis atque est sunt non facilis. Voluptas voluptas sapiente necessitatibus placeat sit voluptates.\n \rQuia beatae assumenda reprehenderit consectetur odit nesciunt. Ipsam accusamus est accusamus consequatur aspernatur reiciendis rem et. Reprehenderit quidem est aut praesentium beatae rerum inventore amet. In quidem consequuntur laborum omnis magni et hic tempora. Consequatur quis esse voluptatibus quia occaecati. Fugiat molestiae dolorum suscipit eum debitis.\n \rError sunt non architecto consectetur consequatur. Voluptatum vel architecto necessitatibus ex voluptatem non odit ut. Sit quos neque autem ut odio aut dolorem. Similique in eos occaecati est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.03174339461759",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 25,
      name: "Oswald Hills",
      tel: "168.801.2337 x574",
      address: "0761 Jeromy Haven",
      opening_hours: "08:00",
      description: "vitae id facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.399341684270958",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 26,
      name: "Alyson Moen",
      tel: "(429) 178-4887 x843",
      address: "62544 Grady Springs",
      opening_hours: "08:00",
      description:
        "Rerum et aliquam dolorum aut a voluptatum.\nCommodi libero et molestiae doloribus.\nQuod occaecati dolorem libero.\nDeleniti sed consequatur est quis quo rem ea est.\nSit voluptatem et sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.44323793170237",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 27,
      name: "Tom Dach",
      tel: "(681) 998-7744 x086",
      address: "2223 Kuhic Pike",
      opening_hours: "08:00",
      description: "vel id aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.302722118850074",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 28,
      name: "Mr. Deion Davis",
      tel: "(659) 149-2649 x79272",
      address: "145 Myah Port",
      opening_hours: "08:00",
      description:
        "Et rerum veritatis. Possimus laborum impedit. Dolores ipsa ipsam corrupti voluptatem eveniet voluptatum maxime et.\n \rItaque molestiae aut enim est itaque voluptatem. Voluptas qui similique distinctio doloribus consequatur. Quas et libero ut doloremque aliquid aut. Natus temporibus dolore est est possimus iusto saepe consequatur. Eius similique assumenda ut est id officiis quasi itaque.\n \rBeatae doloribus cum cumque est est sed tempore animi autem. Sed sint occaecati et aspernatur quis. Quas excepturi mollitia natus itaque voluptatem quo et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.92733047857796",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 29,
      name: "Juliet Nienow I",
      tel: "(541) 330-8918 x626",
      address: "5396 Kuvalis Circle",
      opening_hours: "08:00",
      description: "odio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.15320294217625",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 30,
      name: "Christop Armstrong",
      tel: "555.964.6487 x0568",
      address: "5373 Marcellus Fort",
      opening_hours: "08:00",
      description: "Hic cumque debitis qui nihil molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.25312851326294",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 31,
      name: "Linda Braun",
      tel: "(768) 055-2233 x2860",
      address: "0635 Catherine Orchard",
      opening_hours: "08:00",
      description:
        "Ut et consequatur ducimus voluptas nulla beatae incidunt possimus aspernatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.094970106372678",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 32,
      name: "Jayden Schulist",
      tel: "475-272-5339 x5248",
      address: "4222 Melody Roads",
      opening_hours: "08:00",
      description: "consequuntur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.15685746873153",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 33,
      name: "Deborah Runte Sr.",
      tel: "1-583-060-0943 x542",
      address: "199 Parker Forges",
      opening_hours: "08:00",
      description: "Modi maxime ipsum aut reprehenderit et iure.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.499315449399107",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 34,
      name: "Holly Bergstrom DDS",
      tel: "080-096-5332",
      address: "64089 Kassulke Gardens",
      opening_hours: "08:00",
      description:
        "Aliquid vel tenetur sint accusantium nam non porro minus quasi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.622268242758846",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 35,
      name: "Elmira Anderson DVM",
      tel: "1-175-607-2794",
      address: "28075 Kelsi Divide",
      opening_hours: "08:00",
      description:
        "Ab id qui architecto molestias natus cum iste possimus non. Natus voluptate recusandae totam explicabo. Quia quidem voluptatem ut animi est eligendi. Consequatur et ut minima ut eligendi earum.\n \rQui nisi cupiditate id sequi minima architecto quo est. Magni eum ad reiciendis temporibus doloribus laboriosam distinctio quaerat. Consequatur dicta tenetur aperiam aut non voluptatem.\n \rAspernatur similique sed eos occaecati suscipit eligendi. Voluptatem nihil voluptatibus repellat perferendis velit sint placeat. Porro ex aut sit qui qui consequatur dignissimos quis quam. Facilis totam aut sit distinctio illo corporis temporibus. Occaecati excepturi et voluptatem necessitatibus. Est esse ipsum earum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.55555652485154",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 36,
      name: "Claud Murray",
      tel: "(422) 073-1235 x10122",
      address: "7460 Pierre Keys",
      opening_hours: "08:00",
      description:
        "Et suscipit voluptate cum.\nItaque aut voluptatem sit sit at.\nAnimi id quia debitis odio aut aliquid excepturi dolor corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.64691199329077",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 37,
      name: "Kristopher Stark MD",
      tel: "796.699.1962 x228",
      address: "31544 Samson Terrace",
      opening_hours: "08:00",
      description:
        "Porro unde neque porro accusantium repudiandae cupiditate ut. Accusamus dicta voluptatem tenetur sed quasi. Accusamus eveniet quo magnam molestiae suscipit possimus. Perferendis officiis nulla dolore consectetur et possimus nobis. Non laudantium dolores et alias. Velit labore alias exercitationem consectetur ducimus qui voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.440601566282336",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 38,
      name: "Dr. Aubrey Rempel",
      tel: "486-249-5879 x81945",
      address: "16836 Roberts Inlet",
      opening_hours: "08:00",
      description: "aut aut perferendis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.431553919688735",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 39,
      name: "Riley DuBuque",
      tel: "1-024-012-4652 x6122",
      address: "183 Xavier Summit",
      opening_hours: "08:00",
      description: "Atque minus sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.38998350391685",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 40,
      name: "Mr. Rahul Baumbach",
      tel: "1-820-431-5862",
      address: "760 Eldon Greens",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.42750270514704",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 41,
      name: "Aurelia Koss",
      tel: "741-485-7442 x2718",
      address: "029 Emmerich Dam",
      opening_hours: "08:00",
      description:
        "Consequatur natus ea aliquam est saepe. Sint quas omnis enim enim accusantium velit reiciendis est. Ut quo assumenda sapiente natus cum omnis culpa cupiditate laborum. Ratione maxime exercitationem eos assumenda sed quod non.\n \rSed inventore reprehenderit et libero dolores accusamus illum quibusdam. Deleniti adipisci eos. Quia rerum quaerat maiores autem sed est rem enim laborum. Veritatis ipsam accusantium rem quibusdam ipsa illo dolor ea quibusdam. Nemo perferendis iusto atque iusto dolor et libero sit. Ab consectetur odit.\n \rQuia architecto deleniti quia dolore et ut. Minima iste veritatis illum iure quam nostrum enim quis molestiae. Rem nulla sapiente quo voluptatum. In corporis maxime officiis ullam facere. Voluptatem nam tenetur non iure sequi qui adipisci. Vitae quas earum in dolor nihil quo rerum rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.981293573068671",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 42,
      name: "Alexandre Volkman Jr.",
      tel: "833-557-7992",
      address: "42697 Champlin Knoll",
      opening_hours: "08:00",
      description: "fuga minima hic",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.37914029881227",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 43,
      name: "Emily Kuhic",
      tel: "1-762-766-1678 x9235",
      address: "169 Brenda Groves",
      opening_hours: "08:00",
      description: "minus quis nulla",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.94218277296181",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 44,
      name: "Reynold Mueller MD",
      tel: "(682) 827-2997 x7225",
      address: "55511 Allie Groves",
      opening_hours: "08:00",
      description:
        "Dolores odio quos aut numquam qui accusamus et amet. Omnis consectetur nostrum. Quibusdam praesentium ut iure. In non sint velit rerum. Voluptatibus doloremque voluptas commodi rerum ipsam nihil ut sed corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.43717147610082",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 45,
      name: "Hillard Gislason",
      tel: "236-234-6186 x89142",
      address: "3274 Padberg Estates",
      opening_hours: "08:00",
      description:
        "Veritatis sequi labore reprehenderit molestias ipsum culpa saepe. Perferendis atque voluptatem architecto similique perferendis placeat est. Rem vel sit et reprehenderit fugit culpa sit iusto ratione. Similique consequuntur unde molestiae similique vel.\n \rSint blanditiis sunt sunt ipsam. Facilis quo atque magnam qui aperiam itaque. Qui ratione non veniam odio harum velit. Odio et mollitia dignissimos. Non reiciendis cupiditate quos dicta qui id. Earum sint ex omnis doloribus illo ea excepturi impedit.\n \rId a aliquid hic voluptas occaecati. Neque et dolorum dolores rem. Voluptatem expedita et et asperiores animi. In in rem ut quos pariatur voluptatum et provident. Corrupti ipsam inventore ullam sunt molestiae. Est quaerat aut nesciunt ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.344432659786506",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 46,
      name: "Esteban Metz",
      tel: "1-128-713-0297 x613",
      address: "8039 Schumm Spur",
      opening_hours: "08:00",
      description: "odio voluptates nulla",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.862342017705879",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 47,
      name: "Zane Douglas",
      tel: "649-992-3038 x5812",
      address: "03072 Wintheiser Dam",
      opening_hours: "08:00",
      description:
        "Et et placeat nobis. Tenetur iste neque est repellat et voluptas voluptatem. Nihil autem eos qui soluta aut eaque rerum. Et est dolor voluptatem dolor maxime dolores. Occaecati hic autem reiciendis nihil voluptatum assumenda nisi perspiciatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.03599860200944",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 48,
      name: "Bonnie Homenick",
      tel: "442.714.7778 x1971",
      address: "13119 Buck Corner",
      opening_hours: "08:00",
      description: "Hic veniam doloribus non harum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.96268788646248",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 49,
      name: "Mallory Kessler",
      tel: "(136) 846-0903",
      address: "48103 McKenzie Underpass",
      opening_hours: "08:00",
      description: "nemo libero id",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.98342249064862",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
    {
      id: 50,
      name: "Kenyon Barrows",
      tel: "109.814.1262 x8759",
      address: "4485 Reuben Mall",
      opening_hours: "08:00",
      description:
        "Officiis velit libero aperiam provident aut hic perspiciatis sed.\nUt ratione quia hic hic enim enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.35422550783451",
      viewCounts: 0,
      createdAt: "2022-09-08T08:10:09.000Z",
      updatedAt: "2022-09-08T08:10:09.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-08T08:10:09.000Z",
        updatedAt: "2022-09-08T08:10:09.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>