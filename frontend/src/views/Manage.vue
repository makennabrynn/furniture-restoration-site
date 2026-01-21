<template>
  <div class="container">
    <h1>Manage Page</h1>
    <p>Add Product:</p>
    <input v-model="title" type="text" placeholder="Product Title" /><br/>
    <input v-model="description" type="text" placeholder="Description" /><br/>
    <!-- <input v-model="image_url" type="text" placeholder="Image URL" /><br/> -->
    <input type="file" :key="file_input_key" @change="handleFile" /><br/>
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

    <p>Update a Product:</p>
    <input v-model="productIdUpdate" type="text" placeholder="Product ID to Update"/><br/>
    <input v-model="new_title" type="text" placeholder="New Title" /><br/>
    <input v-model="new_description" type="text" placeholder="New Description" /><br/>
    <input v-model="new_image_url" type="text" placeholder="New Image URL" /><br/>
    <input v-model="new_price" type="text" placeholder="New Price" /><br/>
    <button @click="updateProduct(productIdUpdate)">Update Product</button>

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
// const image_url = ref("");
const image_file = ref(null);
const price = ref("");
const productId = ref("");
const file_input_key = ref(0);


//reactive edit a project form fields
const new_title = ref();
const new_description = ref();
const new_image_url = ref();
const new_price = ref();
const productIdUpdate = ref();

const clickedProject = ref("");

const message = ref("");
const deleted_message = ref("");

function handleFile(e) {
  image_file.value = e.target.files[0];
}

async function addProduct() {
  try {
    const form_data = new FormData();
    form_data.append("title", title.value);
    form_data.append("description", description.value);
    form_data.append("price", price.value);

    if (image_file.value) {
      form_data.append("image", image_file.value);
    }

    const res = await fetch("http://localhost:4000/projects", {
      method: "POST",
      body: form_data
    });

    const data = await res.json();
    console.log("Inserted:", data);

    message.value = "Product Successfully Added!";

    projects.value.push(data);

    // increment key so that vue recognizes that file upload has changed
    file_input_key.value++;

    // clear inputs
    title.value = "";
    description.value = "";
    image_file.value = null;
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

async function updateProduct(id) {
  try {
    const update_body = {};
    if (new_title.value) update_body.title = new_title.value;
    if (new_description.value) update_body.description = new_description.value;
    if (new_image_url.value) update_body.image_url = new_image_url.value;
    if (new_price.value) update_body.price = new_price.value;

    const res = await fetch(`http://localhost:4000/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(update_body)
    });
    if (res.ok) {
      new_title.value = "";
      new_description.value = "";
      new_image_url.value = "";
      new_price.value = "";
      productIdUpdate.value = "";
      // update products list with new changes..

    }
  }
  catch (err) {
    console.error(err);
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
