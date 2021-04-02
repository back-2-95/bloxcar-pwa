<template>
  <Layout>
    <div>
      <h3>{{ vehicle.title }}</h3>
      <p><img :alt=vehicle.title :src=vehicle.image></p>
      <p>{{ vehicle.vehicle_average_rating }}</p>
    </div>
  </Layout>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Layout from "../Layout";
import useBloxCarApi from '../../composables/vehicles';

export default {
  name: 'VehiclePage',
  components: { Layout },
  setup() {
    const { vehicle, getVehicle } = useBloxCarApi();
    onMounted(() => getVehicle(useRoute().params.id));
    return { vehicle };
  }
};

</script>
