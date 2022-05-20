<script setup>
import Logo from "../media/Logo.vue";
import { store } from "../store.js";
setTimeout(function () {
  store.currentTab = null;
}, 2500);
</script>

<template>
  <div class="flex justify-between space-x-5 drop-shadow-2xl">
    <img
      v-if="store.config.logo_src"
      :src="store.config.logo_src"
      class="h-10 w-10 min-w-fit my-auto hidden sm:flex"
    />
    <img
      v-else
      :src="store.default.logo_src"
      class="h-10 w-10 min-w-fit my-auto hidden sm:flex"
    />
    <h1 class="my-auto">
      {{ store.config.thanks_title ? store.config.thanks_title : store.default.thanks_title }}
    </h1>
  </div>
</template>
