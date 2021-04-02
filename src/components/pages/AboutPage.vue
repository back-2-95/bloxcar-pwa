<template>
  <Layout>
    <div>
      <h3>{{ page_title }}</h3>
    </div>
  </Layout>
</template>

<script>

import Layout from "../Layout";

export default {
  name: 'AboutPage',
  components: { Layout },
  props: {
    page_title: String
  }
};

</script>