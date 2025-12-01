<template>
  <div class="title-container">
    <h1 class="page-title">CONTACT</h1>
  </div>
  <div class="contact-container">
    <div>
      <!-- <p class="subtitle">I'm happy you're here.</p> -->
      <p class="subtitle">Phone</p>
      <p class="small-text">(913) 608-1981</p>
      <br />
      <p class="subtitle">Email</p>
      <p class="small-text">Makennaloewenherz@gmail.com</p>

      <button class="facebook-button small-text">
        <a href="https://www.facebook.com/makenna.loewenherz" target="_blank"
          >Facebook Marketplace Listings</a
        >
      </button>
    </div>
    <img src="@/assets/ku.jpg" class="contact-img" />
  </div>
</template>

<script>
export default {}
</script>

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
.contact-container {
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  margin-left: 50px;
  line-height: 75px;
  margin-top: 50px;
}
.subtitle {
  font-family: 'caprasimo';
  font-size: 8vw;
  font-weight: 100;
  letter-spacing: -8px;
  color: rgb(19, 19, 19);
  text-align: left;
  filter: drop-shadow(-10px 10px 0px rgba(0, 0, 0, 0.1));
}
.small-text {
  font-family: 'Manrope';
  font-size: 20px;
  color: rgb(19, 19, 19);
  margin-top: 10px;
  text-align: left;
}
.contact-img {
  width: 60%;
  height: 800px;
  border-radius: 25px;
  margin-left: auto;
  margin-top: -100px;
  object-fit: cover;
  filter: drop-shadow(-10px 10px 0px rgba(0, 0, 0, 0.1));
}
.facebook-button {
  padding: 10px 20px;
  border: none;
  background: rgb(255, 209, 24);
  cursor: pointer;
  margin-top: 100px;
  border-radius: 10px;
}
.small-text {
  font-size: 20px;
  font-family: 'Manrope';
  color: rgb(19, 19, 19);
}

@media (max-width: 1600px) {
  .subtitle {
    letter-spacing: -5px;
  }
}

@media (max-width: 950px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }
  .subtitle {
    font-size: 100px;
    text-align: center;
  }
  .small-text {
    font-size: 20px;
    text-align: center;
  }
  .facebook-button {
    margin-top: 100px;
  }
  .contact-img {
    margin-top: 100px;
    width: 100%;
    height: auto;
  }
}
</style>
