<template>
  <h1>Hello This is job detail</h1>
  <!-- <h1>Job Details {{$route.params.id}}</h1> -->
  <h1>Job Detail {{id}}</h1>
</template>

<script>
export default {
  props:["id"],
  data() {
    return{
      // id:this.$route.params.id
    }
  }

}
</script>

<style>

</style>