<template>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to = "{name:'Jobs'}">Jobs</router-link>
  </nav> 

  <router-view/>

<button @click="redirect()">Redirect</button>
  <button @click="goback()">Go Back</button>
  <button @click="goforward()">Go Forward</button>

</template>

<script>
export default{
  methods: {
    goback() {
      //go() from $router obj
      this.$router.go(-1)
    },

    goforward() {
      this.$router.go(+1)
    },

    redirect() {
      //after sign up
      //after create account
      // this.$router.push({name: 'Home'})
      console.log("This is redirect")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  border-radius: 5px;
  text-decoration: none
}

nav a.router-link-exact-active {
  color: #42b983;
  background-color: grey;
  padding: 10px 15px
}
</style>
