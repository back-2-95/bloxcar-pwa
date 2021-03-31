<template>
    <p><a :href=vehicle.web_url>{{vehicle.title}}</a></p>
    <p><img :alt=vehicle.title :src=vehicle.image></p>
</template>

<script>

export default {
  name: 'VehicleListItem',
  props: {
    vehicle: Array
  }
}

</script>
