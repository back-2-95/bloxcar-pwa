<template>
  <Layout>
    <div class="hello">
      <h3>{{ page_title }}</h3>
      <VehicleList :vehicles=vehicles></VehicleList>
    </div>
  </Layout>
</template>

<script>
import { onMounted } from 'vue';
import useBloxCarApi from '../../composables/vehicles';
import Layout from "../Layout";
import VehicleList from '../VehicleList'

export default {
  name: 'HomePage',
  setup() {
    const { vehicles, getVehicles } = useBloxCarApi();
    onMounted(() => getVehicles());
    return { vehicles };
  },
  components: { Layout, VehicleList },
  props: {
    page_title: String
  }
};

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
