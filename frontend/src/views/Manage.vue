<template>
  <div class="container">
    <h1>Manage Page</h1>
    <p>Add Product:</p>
    <input v-model="title" type="text" placeholder="Product Title" /><br/>
    <input v-model="description" type="text" placeholder="Description" /><br/>
    <input v-model="image_url" type="text" placeholder="Image URL" /><br/>
    <input v-model="price" type="text" placeholder="Price" /><br/>
    <button @click="addProduct">Add Product</button>
    <p v-if="message">{{ message }}</p>

    <p>Delete Product:</p>
    <input v-model="productId" type="text" placeholder="Product ID to Delete"/><br/>
    <button @click="deleteProduct(productId)">Delete Product</button>
    <p style="font-size: 20px;">OR CHOOSE FROM THE LIST WHICH YOU WANT TO DELETE:</p>
    <div class="products-list-container">
      <button
      class="list-text"
      :class="{'selected': clickedProject.id===project.id}"
      v-for="project in projects"
      :key="project.id"
      @click="clickedProject=project">
        {{ project.title }}
      </button>
    </div>
    <button @click="deleteProduct(clickedProject.id)">Delete Product</button>
    <p v-if="deleted_message">{{ deleted_message }}</p>

    </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';

// fetch projects data from server and save it as json data in 'projects' variable
const projects = ref([]);
onMounted(async () => {
  const response = await fetch('http://localhost:4000/projects');
  projects.value = await response.json();
})

// reactive form fields
const title = ref("");
const description = ref("");
const image_url = ref("");
const price = ref("");
const productId = ref("");

const clickedProject = ref("");

const message = ref("");
const deleted_message = ref("");

async function addProduct() {
  try {
    const res = await fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        image_url: image_url.value,
        price: price.value
      })
    });

    const data = await res.json();
    console.log("Inserted:", data);

    message.value = "Product Successfully Added!";

    projects.value.push({
      id: data.id,
      title: title.value,
      description: description.value,
      image_url: image_url.value,
      price: price.value
    });

    // clear inputs
    title.value = "";
    description.value = "";
    image_url.value = "";
    price.value = "";

  } catch (err) {
    console.error(err);
    message.value = "Something went wrong.";
  }
}

// id is a parameter to the function, so it can be passed into the url
async function deleteProduct(id) {
  try {
    const res = await fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      console.log("Deleted product:", id);
      deleted_message.value = "Product Successfully Deleted.";
      // filter the projects json so that all projects except the deleted one remain (if the project id === id in the parameter, exclude form the new list)
      projects.value = projects.value.filter(item => item.id !== id);
    } else {
      console.error("Delete failed");
    }

  } catch (err) {
    console.error(err);
    message.value = "Something went wrong.";
  }
}

</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  margin-top: 150px;
  margin-left: 50px;
  line-height: 100px;
}
.container h1 {
  font-family: 'Manrope';
  font-size: 55px;
  font-weight: 1000;
  color: rgb(19, 19, 19);
}
.container p {
  font-family: 'Manrope';
  font-size: 30px;
  color: rgb(19, 19, 19);
}
.container input {
  font-size: 50px;
  font-family: 'Manrope';
  color: rgb(55, 55, 55);
  padding: 10px 30px;
  border-radius: 25px;
}
.container button {
  font-size: 30px;
  padding: 10px 30px;
  border-radius: 10px;
}
.container button:hover {
  background-color: rgb(200, 200, 200);
  cursor: pointer;
}

.products-list-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.list-text {
  border: 2px solid black;
}
.selected {
  background-color: lightgrey;
}
</style>
