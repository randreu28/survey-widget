<script setup>
import Webholder from "./media/WebHolder.vue";
import { onMounted } from "vue";
import UxSurvey from "./components/UxSurvey.vue";

onMounted(() => {
  document.body.classList.add("bg-gray-900", "text-white");
});
</script>

<template>
  <div class="h-screen flex">
    <div class="m-auto">
      <Webholder />
      <h1
        class="text-white text-center text-xl font-bold sm:text-2xl md:text-3xl"
      >
        <span class="opacity-25">&lt;</span>
        WebHolder
        <span class="opacity-25">/&gt;</span>
      </h1>
    </div>
  </div>
  <span className="h-[200rem] block" /><!-- Scrolling -->
  <UxSurvey/>
</template>
