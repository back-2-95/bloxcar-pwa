<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Location></Location>
  </div>
</template>

<script>
import Location from './Location.vue';

export default {
  name: 'HomePage',
  components: {Location},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
