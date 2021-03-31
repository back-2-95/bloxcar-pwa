<template>
  <img alt="BloxCar logo" class="logo" src="./assets/bloxcar_brand_logo_red.svg">
  <HomePage msg="Welcome to BloxCar"/>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
  margin-top: 60px;
}
.logo {
  max-width: 50%;
}
</style>
