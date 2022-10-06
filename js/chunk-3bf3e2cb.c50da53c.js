(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf3e2cb"],{"0685":function(t,e,a){},5652:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("form",{staticClass:"my-4"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.categories,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",{staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:a.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(e){return t.handleCancel(a.id)}}},[t._v(" ✕ ")])]),e("td",{staticClass:"d-flex justify-content-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsEditing(a.id)}}},[t._v(" Edit ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateCategory({categoryId:a.id,name:a.name})}}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(a.id)}}},[t._v(" Delete ")])])])})),0)])],1)},s=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Category Name")]),e("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],i=(a("d9e2"),a("e04c")),n=a("be6c"),o=a("2fa3"),c={components:{AdminNav:i["a"]},data(){return{categories:[],newCategoryName:""}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const{data:t}=await n["a"].categories.get();this.categories=t.categories.map(t=>({...t,isEditing:!1,nameCached:""}))}catch(t){o["a"].fire({icon:"error",title:"無法取得分類資料，請稍後再試"})}},async createCategory(){try{const{data:t}=await n["a"].categories.create({name:this.newCategoryName});if("error"===t.status)throw new Error;console.log(t),this.categories.push({id:t.categoryId,name:this.newCategoryName}),this.newCategoryName=""}catch(t){o["a"].fire({icon:"error",title:"無法取得分類資料，請稍後再試"})}},async deleteCategory(t){try{const{data:e}=await n["a"].categories.delete({categoryId:t});if("error"===e.status)throw new Error;this.categories=this.categories.filter(e=>e.id!==t)}catch(e){o["a"].fire({icon:"error",title:"無法刪除分類資料，請稍後再試"})}},toggleIsEditing(t){this.categories=this.categories.map(e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e)},async updateCategory({categoryId:t,name:e}){try{const{data:a}=await n["a"].categories.update({categoryId:t,name:e});if("error"===a.status)throw new Error;this.toggleIsEditing(t)}catch(a){o["a"].fire({icon:"error",title:"無法刪除分類資料，請稍後再試"})}},handleCancel(t){this.categories=this.categories.map(e=>e.id===t?{...e,name:e.nameCached}:e),this.toggleIsEditing(t)}}},d=c,u=(a("f2fa"),a("2877")),l=Object(u["a"])(d,r,s,!1,null,"5fb94c15",null);e["default"]=l.exports},be6c:function(t,e,a){"use strict";var r=a("2fa3");e["a"]={categories:{get(){return r["b"].get("/admin/categories",{})},create({name:t}){return r["b"].post("/admin/categories",{name:t},{})},delete({categoryId:t}){return r["b"].delete("/admin/categories/"+t,{})},update({categoryId:t,name:e}){return r["b"].put("/admin/categories/"+t,{name:e},{})}},restaurants:{getDetail({restaurantId:t}){return r["b"].get("/admin/restaurants/"+t,{})},create({formData:t}){return r["b"].post("/admin/restaurants",t,{})},get(){return r["b"].get("/admin/restaurants",{})},delete({restaurantId:t}){return r["b"].delete("/admin/restaurants/"+t,{})},update({restaurantId:t,formData:e}){return r["b"].put("/admin/restaurants/"+t,e,{})}},users:{get(){return r["b"].get("/admin/users/",{})},update({userId:t}){return r["b"].put("/admin/users/"+t,{userId:t},{})}}}},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},s=[],i=a("2877"),n={},o=Object(i["a"])(n,r,s,!1,null,null,null);e["a"]=o.exports},f2fa:function(t,e,a){"use strict";a("0685")}}]);
//# sourceMappingURL=chunk-3bf3e2cb.c50da53c.js.map