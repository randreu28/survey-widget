<script>
import Webholder from "./media/WebHolder.vue";
import { store } from "./store.js";
import Ux from "./components/Ux.vue";
import Consent from "./components/Consent.vue";
import Thanks from "./components/Thanks.vue";

export default {
  components: {
    Webholder,
    Ux,
    Consent,
    Thanks,
  },
  data() {
    return {
      store
    };
  },
};
</script>

<script setup>
import { onMounted } from "vue";
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
  <span class="h-[200rem] block" /><!-- Scrolling -->
  <component v-if="store.currentTab !== null" :is="store.currentTab" class="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl">
  </component>
</template>
