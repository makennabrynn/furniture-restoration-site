<script setup>
import img1 from '@/assets/ku.jpg'


import { ref, onMounted } from 'vue';
const projects = ref([]);

// fetch projects data from server and save it as json data in 'projects' variable
onMounted(async () => {
  const response = await fetch('http://localhost:4000/projects');
  projects.value = await response.json();
})

</script>

<template>
  <div class="title-container">
    <h1 class="page-title">MY WORK</h1>
  </div>
  <div class="label">PREVIOUS<br />PROJECTS</div>
  <div class="work-content">
    <div v-for="item in projects" :key="item">
      <div style="display: flex; gap: 10px">
        <p>{{ item.title }}</p>
        <p style="color: grey">{{ item.price }}</p>
      </div>
      <img :src="img1" :alt="title" />
    </div>
  </div>
</template>

<style scoped>
.title-container {
  position: relative;
  margin-top: 100px;
  height: 175px;
  width: 100%;
  display: flex;
  align-items: center;
}
.page-title {
  font-family: 'Manrope';
  font-size: 55px;
  font-weight: 1000;
  color: rgb(19, 19, 19);
  margin-left: 50px;
}
.label {
  position: absolute;
  font-family: 'Manrope';
  font-size: 20px;
  color: grey;
  margin-left: 50px;
  margin-top: 63px;
}
.work-content {
  position: relative;
  width: 83%;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 25px;
  row-gap: 75px;
  margin-left: auto;
  right: 50px;
  margin-top: 60px;
}

.work-content div {
  color: rgb(19, 19, 19);
  font-size: 30px;
  text-align: left;
}
.work-content img {
  width: 100%;
  aspect-ratio: 100 / 80;
  object-fit: cover;
  margin-top: 15px;
  border-radius: 25px;
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
}
.work-content p {
  font-family: 'Manrope';
  font-size: 24px;
  font-weight: 1000;
}

@media (max-width: 1600px) {
  .work-content {
    width: 100%;
    right: 0px;
    padding: 20px;
  }
  .label {
    margin-top: 0px;
    margin-left: 20px;
  }
  .page-title {
    margin-left: 20px;
  }
}
@media (max-width: 1300px) {
  .work-content {
    width: 100%;
    right: 0px;
    padding: 20px;
    grid-template-columns: auto auto;
  }
  .work-content img {
    height: 435px;
  }
}
@media (max-width: 1000px) {
  .work-content {
    width: 100%;
    right: 0px;
    padding: 20px;
    grid-template-columns: auto;
  }
  .work-content img {
    height: 435px;
  }
}
</style>
