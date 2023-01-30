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
          <input type="text" class="form-control" v-model="password" />
        </div>

        <button @click.prevent="convertString" class="btn btn-primary">
          Submit
        </button>
        <button @click="sendData">POST Data</button>
      </form>
      <div class="container-fluid">
        <h1>{{ md5Hash }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const crypto = require("crypto-js");
const password = ref("");
const username = ref("");
const md5Hash = ref("");
const data = [
  {
    loginUserName: "muhammad.nadeem@emircom.com",
    hashedUserPassword: "eb24f71a6bca2405cffbc5122d32f32d",
  },
];

// Convert the string to its md5 hash
function convertString() {
  md5Hash.value = crypto.MD5(password.value).toString();
  password.value = "";
  //console.log(md5Hash.value);
  //console.log(username.value);
}
const post = () => {
  fetch(
    "https://businessonline.etisalat.ae/selfcare/currentUser/userAuthentication",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "x-calling-application": "CMS",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      responseData.value = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
post();
function sendData() {
  //post();
  console.log("Hello world");
}
</script>

<style></style>
