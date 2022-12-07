<template>
  <h1>Hello World</h1>
  <div v-for="job in jobs" :key="job.id">
    <!-- <router-link :to="{name:'JobDetail', params:{id:job.id}}">
<h1>{{job.title}}</h1>
    </router-link> -->

    <router-link :to="{name:'JobDetail', params:{id: job.id}}">
        <h1>{{job.title}}</h1>

    </router-link>

  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                {id:1,title:"CEO",detail:"CEO of Google"},
                {id:2,title:"designer",detail:"UI/UX designer of Google"},
                {id:3,title:"developer",detail:"Web App Developer of Google"},

            ]
        }
    }

}
</script>

<style>
h1{
    color: crimson;
}
</style>