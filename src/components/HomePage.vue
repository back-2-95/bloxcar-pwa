<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Location></Location>
    <div v-for="(b, i) in vehicles" :key="i" class="car">
        <p>{{b.title}}</p>
    </div>
  </div>
</template>

<script>
import Location from './Location.vue';
import { requestsMixin } from "@/mixins/BloxCarApiMixin";

export default {
  name: 'HomePage',
  mixins: [requestsMixin],
  data() {
    return {
      vehicles: []
    }
  },
  created() {
    this.vehicles = this.getVehicles();
  },
  components: {Location},
  props: {
    msg: String
  },
  methods: {
    async getVehicles() {
      try {
        let response = await this.getVehiclesData();
        this.vehicles = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
