<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '@fontsource/manrope'
import '@fontsource/caprasimo'
</script>

<template>
  <div class="nav-bar">
    <RouterLink class="home-button" to="/">Kenna Design</RouterLink>

    <div class="nav-buttons-container">
      <RouterLink class="button-text" to="/about">ABOUT</RouterLink>
      <RouterLink class="button-text" to="/work">WORK</RouterLink>
      <RouterLink class="button-text" to="/contact">CONTACT</RouterLink>
    </div>

    <hr class="nav-line"></hr>
  </div>

</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0px;
  left: 50px;
  right: 50px;
  height: 102px;
  background: rgb(250, 250, 250);
}
.home-button {
  position: absolute;
  top: 32px;
  font-size: 35px;
  font-family: 'caprasimo';
  text-decoration: none;
  color: rgb(19, 19, 19);
}
.button-text {
  font-size: 18px;
  font-family: 'Manrope';
  text-decoration: none;
  color: black;
  display: inline-block;
  position: relative;
  font-weight: 700;
}
.nav-buttons-container {
  position: absolute;
  right: 0px;
  height: 100%;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-line {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 102px;
  height: 1px;
  border: none;
  background-color: rgb(19, 19, 19);
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 1600px) {
  .nav-bar {
    left: 20px;
    right: 20px;
  }
}
</style>
