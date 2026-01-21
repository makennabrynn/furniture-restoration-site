<script setup>
import '@fontsource/caprasimo'
</script>

<template>
  <div class="title-container">
    <h1 class="page-title">Kenna Design</h1>
  </div>

  <div class="image-container">
    <img class="image" src="@/assets/dresser_original.jpg" />
    <img class="texture" src="@/assets/texture.svg" alt="texture" />
    <div class="sticker-container">
      <img class="sticker" src="@/assets/Sticker.svg" />
      <p class="sticker-p">Made in KC</p>
    </div>
  </div>

  <div class="text-container">
    <div class="small-text">WHO AM I?</div>
    <div class="large-text">
      I’m Makenna, and I love transforming tired furniture into beautiful, modern pieces.
    </div>
    <button class="small-text about-button">ABOUT ME</button>
  </div>

  <div class="row">
    <div class="column">
      <img src="@/assets/plant_stands1.jpg" alt="Snow" style="width: 100%" />
    </div>
    <div class="column">
      <img src="@/assets/chairs2.jpg" alt="Forest" style="width: 100%" />
    </div>
    <div class="column">
      <img src="@/assets/shelf.jpg" alt="Mountains" style="width: 100%" />
    </div>
  </div>
</template>

<style scoped>
.title-container {
  position: relative;
  margin-top: 100px;
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-title {
  font-family: 'caprasimo';
  font-size: 14vw;
  font-weight: 100;
  letter-spacing: -10px;
  color: rgb(19, 19, 19);
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
}
.image-container {
  position: relative;
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  position: relative;
  z-index: 1;
  width: 88%;
  height: 800px;
  border-radius: 25px;
  object-fit: cover;
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
  object-position: 50% 25%;
}
.texture {
  position: absolute;
  z-index: 2;
  width: 88%;
  height: 800px;
  border-radius: 25px;
  opacity: 25%;
  object-fit: cover;
}
.sticker-container {
  position: absolute;
  z-index: 3;
  right: 0px;
  bottom: -100px;
  width: 300px;
}
.sticker {
  width: 100%;
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
}
.sticker-p {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(10deg);
  font-size: 60px;
  font-family: 'caprasimo';
  font-weight: 100;
  color: white;
  line-height: 60px;
  text-align: center;
}
.text-container {
  position: relative;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: rgb(240, 240, 240);
  padding-top: 20px;
  padding-bottom: 20px;
}
.small-text {
  font-size: 20px;
  font-family: 'Manrope';
  color: rgb(19, 19, 19);
}
.large-text {
  font-size: 50px;
  font-family: 'Manrope';
  color: rgb(19, 19, 19);
  font-weight: 1000;
  width: 60%;
  text-align: center;
}
.about-button {
  padding: 10px 20px;
  border: none;
  background: rgb(255, 209, 24);
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
}

.row {
  display: flex;
  position: relative;
  margin-top: 150px;
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  gap: 50px;
}
.column {
  width: 33%;
}
.column img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 25px;
  filter: drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.1));
}

@media (max-width: 1150px) {
  .large-text {
    font-size: 45px;
  }
}
@media (max-width: 1050px) {
  .large-text {
    font-size: 40px;
  }
}
@media (max-width: 950px) {
  .large-text {
    font-size: 35px;
  }
}
@media (max-width: 850px) {
  .large-text {
    font-size: 30px;
  }
  .row {
    flex-direction: column;
    margin-top: 150px;
    align-items: center;
    gap: 50px;
  }
  .column {
    width: 90%;
  }
}
@media (max-width: 800px) {
  .page-title {
    letter-spacing: -9px;
  }
}
@media (max-width: 750px) {
  .page-title {
    letter-spacing: -8px;
  }
}
@media (max-width: 700px) {
  .page-title {
    letter-spacing: -7px;
  }
}
@media (max-width: 650px) {
  .page-title {
    letter-spacing: -6px;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: rgb(250, 250, 250);
}
</style>
