(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8485946"],{"0149":function(t,e,a){"use strict";a("9949")},"43c6":function(t,e,a){"use strict";a("b8ec")},"687f":function(t,e,a){},"71a4":function(t,e,a){"use strict";a("687f")},9949:function(t,e,a){},a3f1:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("h1",[t._v("餐廳描述頁")]),e("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),e("hr"),e("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.handleAfterDelete}}),e("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},s=[],n=(a("d9e2"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-3"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-lg-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),e("div",{staticClass:"contact-info-wrap"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-lg-8"},[e("p",[t._v(t._s(t.restaurant.description))]),e("a",{staticClass:"btn btn-primary btn-border mr-2",attrs:{href:"#"}},[t._v("Dashboard")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorited(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?e("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):e("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLiked(t.restaurant.id)}}},[t._v(" Like ")])])])}),i=[],o=a("4cce"),c=a("2fa3"),u={props:{initialRestaurant:{type:Object,required:!0}},data(){return{restaurant:this.initialRestaurant}},methods:{async addFavorited(t){try{const{data:e}=await o["a"].addFavorite({restaurantId:t});if("error"===e.status)throw new Error;this.restaurant={...this.restaurant,isFavorited:!0}}catch(e){c["a"].fire({icon:"error",title:"無法讀取餐廳資料，請稍後再試"})}},async deleteFavorite(t){try{const{data:e}=await o["a"].deleteFavorite({restaurantId:t});if("error"===e.status)throw new Error;this.restaurant={...this.restaurant,isFavorited:!1}}catch(e){c["a"].fire({icon:"error",title:"無法讀取餐廳資料，請稍後再試"})}},async addLiked(t){try{const{data:e}=await o["a"].addLike({restaurantId:t});if("error"===e.status)throw new Error;this.restaurant={...this.restaurant,isLiked:!0}}catch(e){c["a"].fire({icon:"error",title:"無法讀取餐廳資料，請稍後再試"})}},async deleteLike(t){try{const{data:e}=await o["a"].deleteLike({restaurantId:t});if("error"===e.status)throw new Error;this.restaurant={...this.restaurant,isLiked:!1}}catch(e){c["a"].fire({icon:"error",title:"無法讀取餐廳資料，請稍後再試"})}}},watch:{initialRestaurant(t){this.restaurant={...this.restaurant,...t}}}},d=u,l=(a("0149"),a("2877")),m=Object(l["a"])(d,n,i,!1,null,"6a81dc1f",null),p=m.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"my-4"},[t._v(" 所有評論： ")]),t._l(t.restaurantComments,(function(a){return e("div",{key:a.id},[e("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleDeleteButtonClick(a.id)}}},[t._v(" Delete ")]):t._e(),e("h3",[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(a.User.name)+" ")])]),e("p",[t._v(t._s(a.text)+".")]),e("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(a.createdAt))+" ")])]),e("hr")])}))],2)},b=[],h=a("2708"),v=a("2f62"),C={data(){return{}},props:{restaurantComments:{type:Array,retuired:!0}},computed:{...Object(v["b"])(["currentUser"])},mixins:[h["b"]],methods:{handleDeleteButtonClick(t){this.$emit("after-delete-comment",t)}}},_=C,g=(a("43c6"),Object(l["a"])(_,f,b,!1,null,"911cd682",null)),y=g.exports,k=function(){var t=this,e=t._self._c;return e("form",[e("div",{staticClass:"form-group mb-4"},[e("label",{attrs:{for:"text"}},[t._v("留下評論：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")]),e("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" Submit ")])])])},w=[],x={props:{restaurantId:{type:Number,required:!0}},data(){return{text:""}},methods:{handleSubmit(){this.$emit("after-create-comment",{restaurantId:this.restaurantId,text:this.text}),this.text=""}}},D=x,I=(a("71a4"),Object(l["a"])(D,k,w,!1,null,"5ba1ac2e",null)),L=I.exports,R=a("c4c3"),F={data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},computed:{...Object(v["b"])(["currentUser"])},methods:{async fetchRestaurant(t){try{const{data:e}=await R["a"].getRestaurant({restaurantId:t}),{id:a,name:r,Category:s,image:n,opening_hours:i,tel:o,address:c,description:u,Comments:d}=e.restaurant;this.restaurant={id:a,name:r,categoryName:s.name,image:n,openingHours:i,tel:o,address:c,description:u,isFavorited:e.isFavorited,isLiked:e.isLiked},this.restaurantComments=d}catch(e){console.log(e),c["a"].fire({icon:"error",title:"無法讀取餐廳資料，請稍後再試"})}},async handleAfterDelete(t){try{const{data:e}=await R["a"].deleteComment({commentId:t});if("error"===e.status)throw new Error;this.restaurantComments=this.restaurantComments.filter(e=>e.id!==t)}catch(e){console.log(e),c["a"].fire({icon:"error",title:"無法刪除評論，請稍後再試"})}},async afterCreateComment(t){try{const{restaurantId:e,text:a}=t,{data:r}=await R["a"].addComment({restaurantId:e,text:a,User:this.currentUser});this.restaurantComments.push({RestaurantId:e,id:r.commentId,User:{...this.currentUser},text:a,createdAt:new Date})}catch(e){console.log(e),c["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"})}}},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},components:{RestaurantDetail:p,RestaurantComments:y,CreateComment:L},beforeRouteUpdate(t,e,a){const{id:r}=t.params;this.fetchRestaurant(r),a()}},U=F,j=Object(l["a"])(U,r,s,!1,null,null,null);e["default"]=j.exports},b8ec:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b8485946.5a8ca22c.js.map