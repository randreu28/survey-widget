<script setup>
import Logo from "../media/Logo.vue";
import { store } from "../store.js";
setTimeout(function () {
  store.currentTab = null;
}, 2500);
</script>

<template>
  <div class="flex justify-between space-x-5 drop-shadow-2xl">
    <Logo class="h-6 w-6 m-auto" />
    <h1 class="">Gracias!</h1>
  </div>
</template>
