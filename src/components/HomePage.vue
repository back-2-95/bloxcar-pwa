<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <Location></Location>
    <VehicleList :vehicles=vehicles></VehicleList>
  </div>
</template>

<script>
import Location from './Location.vue';
import VehicleList from './VehicleList'

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
  components: {Location, VehicleList},
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
<style>
a {
  color: #ff5a64;
  text-decoration: none;
}
img {
  max-width: 100%;
}
</style>
