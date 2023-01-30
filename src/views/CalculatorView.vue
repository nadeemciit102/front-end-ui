<template>
  <h1>{{ count }}</h1>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { ref } from "vue";
//export default {};
const count = ref(0);
function increment() {
  count.value++;
}
</script>

<style></style>
