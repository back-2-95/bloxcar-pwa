<template>
  <div v-for="(b, i) in vehicles" :key="i" class="car">
    <VehicleListItem :vehicle=b></VehicleListItem>
  </div>
</template>

<script>

import VehicleListItem from "./VehicleListItem";

export default {
  name: 'VehicleList',
  props: {
    vehicles: [Promise, Array]
  },
  components: {VehicleListItem},
}

</script>
