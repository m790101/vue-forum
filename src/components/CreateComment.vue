<template>
  <form>
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        @click.stop.prevent="handleSubmit"
      >
        Submit
      </button>
    </div>
  </form>
</template>



<script>
export default {
    props:{
        restaurantId:{
            type:Number,
            required:true
        }
    },
    data(){
        return {
            text:''
        }
    },
    methods:{
        handleSubmit(){
            this.$emit('after-create-comment',{
                restaurantId: this.restaurantId,
                text: this.text
            })
            this.text = ''
        }
    }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>