<template>
  <h1>Posting a String Data to MongoDB</h1>
  <button @click="post" class="btn btn-primary">Submit Post API</button>
  <p>{{ responseData }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "AboutUs",
  setup() {
    const data = [
      { username: "example2", password: "password2" },
      { username: "example3", password: "password4" },
    ];
    const responseData = ref(null);

    const post = () => {
      fetch("http://192.168.0.44:1880/post", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          responseData.value = data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    //post();
    return {
      post,
      responseData: responseData,
    };
  },
};
</script>

<style></style>
