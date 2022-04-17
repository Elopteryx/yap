<template>
  <div class="container">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'SimpleText',
  props: {
    text: String
  }
}
</script>

<style scoped>
* {
  color: #c1c1c1;
}
</style>
