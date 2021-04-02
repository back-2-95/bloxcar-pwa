<template>
  <div>
    <h3>{{ page_title }}</h3>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  props: {
    page_title: String
  }
};

</script>