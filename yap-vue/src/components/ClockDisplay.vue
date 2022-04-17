<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { formatCurrentTime } from '../utils/formatters';

const time = ref(formatCurrentTime());

let interval: number;

onMounted(() => {
  interval = window.setInterval(() => {
      time.value = formatCurrentTime();
  }, 1000);
});

onUnmounted(() => {
  window.clearInterval(interval);
});
</script>

<template>
  <span>{{ time }}</span>
</template>

<style scoped>
* {
  color: #c1c1c1;
}
</style>