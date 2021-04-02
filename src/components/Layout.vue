<template>
  <Header />
  <slot />
</template>

<script>

import Header from "./Header";

export default {
  components: { Header }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
