<template>
  <div class="container">
    <h1>Check ATG Credentials</h1>
    <div class="col-4">
      <form>
        <div class="mb-3">
          <label class="form-label">ATG Username</label>
          <input type="username" class="form-control" v-model="username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="text" class="form-control" v-model="originalString" />
        </div>

        <button @click.prevent="convertString" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div class="container-fluid">
        <h1>{{ md5Hash }}</h1>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <h1>{{ username }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
const crypto = require("crypto-js");

export default {
  name: "MD5",
  setup() {
    const originalString = ref("");
    const username = ref("");
    const md5Hash = ref("");

    // Convert the string to its md5 hash
    function convertString() {
      md5Hash.value = crypto.MD5(originalString.value).toString();
      originalString.value = "";
      console.log(md5Hash.value);
      console.log(username.value);
    }
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

    return {
      originalString: originalString,
      convertString,
      username: username,
      md5Hash: md5Hash,
    };
  },
};
</script>

<style></style>
