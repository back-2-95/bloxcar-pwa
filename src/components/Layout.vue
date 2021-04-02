<template>
  <img alt="BloxCar logo" class="logo" src="../assets/bloxcar_brand_logo_red.svg">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <slot />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo {
  max-width: 50%;
}

</style>
