<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="nav-container">
    <Navigation />
  </div>

  <div class="content-container">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-container {
  position: absolute;
  z-index: 10;
}
</style>
