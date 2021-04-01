<template>
  <div>
    <h3>{{ vehicle.title }}</h3>
    <p><img :alt=vehicle.title :src=vehicle.image></p>
    <p>{{ vehicle.vehicle_average_rating }}</p>
  </div>
</template>

<script>

import { requestsMixin } from "@/mixins/BloxCarApiMixin";

export default {
  name: 'VehiclePage',
  mixins: [requestsMixin],
  data() {
    return {
      vehicle: []
    }
  },
  created() {
    this.vehicle = this.getVehicleData(this.$route.params.id);
  }
}
</script>
