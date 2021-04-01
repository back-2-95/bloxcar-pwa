<template>
    <router-link :to="{ name: 'Vehicle', params: { id: vehicle.id } }">{{vehicle.title}}</router-link>
    <p><img :alt=vehicle.title :src=vehicle.image></p>
</template>

<script>

export default {
  name: 'VehicleListItem',
  props: {
    vehicle: Object
  }
}

</script>
