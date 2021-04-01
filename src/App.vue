<template>
  <img alt="BloxCar logo" class="logo" src="./assets/bloxcar_brand_logo_red.svg">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App'
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
