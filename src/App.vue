<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted, } from 'vue';

onMounted(() => {
  console.log("mounted::component -> <App />")
})

// router.push({ name: "notes", replace: true });
</script>

<style scoped>
</style>