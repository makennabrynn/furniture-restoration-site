<template>
  <div class="title-container">
    <h1 class="page-title">PROFILE</h1>
  </div>
  <div class="content">
  <div class="bio-container">
    <p>
      Hi there— I’m Channing Lee, interior designer with a deep passion for crafting visually
      captivating spaces. With a formal education in graphic design, my approach seamlessly merges
      graphic design sensibilities with spatial design principles to redefine interior aesthetics
      creating harmonious, functional living spaces.<br></br><br></br> I'm passionate about inspiring others and
      transforming residential, commercial, or public spaces. Please feel free to explore my work
      and join me on this journey of reimagining interior spaces through a unique fusion of graphic
      design and interior design. Currently available for new projects.
    </p>
  </div>
  <div class="sticker-container">
  <img class="sticker" src="@/assets/Sticker.svg" />
  <p class="sticker-p">Hello!</p>
  </div>
    <img src="@/assets/makenna.jpg" class="profile-img"/>
  </div>
</template>

<script setup></script>

<style scoped>
.sticker-container {
  position: relative;
  z-index: 9;
  margin-top: -120px;
  left: 100px;
  width: 20vw;
  margin-left: -100px;
}
.sticker {
  width: 100%;
  filter: drop-shadow(-10px 10px 0px rgba(0, 0, 0, 0.1));
}
.sticker-p {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4vw;
  font-family: 'caprasimo';
  font-weight: 100;
  color: white;
}
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
.bio-container {
  position: relative;
  width: 50%;
  font-family: 'Manrope';
  font-size: 30px;
  color: rgb(19, 19, 19);
  background: rgb(240, 240, 240);
  line-height: 35px;
  padding: 20px;
  border-radius: 25px;
  font-weight: 900;
  filter: drop-shadow(-10px 10px 0px rgba(0, 0, 0, 0.1));
}
.profile-img {
  position: relative;
  top: -200px;
  width: 38%;
  height: 1000px;
  border-radius: 25px;
  object-fit: cover;
  object-position: 25% 25%;
  filter: drop-shadow(-10px 10px 0px rgba(0, 0, 0, 0.1));
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
}


@media (max-width: 1600px) {
  .page-title {
    margin-left: 20px;
  }
  .bio-container {
    margin-left: 20px;
  }
  .content {
    margin-left: 0px;
    margin-right: 20px;
  }
}
@media (max-width: 950px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .bio-container {
    width: 100%;
    font-size: 25px;
  }
  .profile-img {
    margin-left: 20px;
    width: 90%;
    height: auto;
    margin-top: 50px;
  }
  .sticker-container {
    margin-top: 300px;
    left: 25%;
    width: 300px;
    margin-left: 0px;
  }
  .sticker-p {
    font-size: 60px;
  }
}
</style>
