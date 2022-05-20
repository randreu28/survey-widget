<script>
import Logo from "../media/Logo.vue";
import LinearScale from "./Survey/LinearScale.vue";
import { store } from "../store.js";

export default {
  components: {
    Logo,
    LinearScale
  },
  props: {
    clientid: String,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="drop-shadow-2xl">
    <div class="flex space-x-10 justify-between pb-4">
      <div class="flex space-x-5">
        <img
          v-if="store.logo_src"
          :src="store.logo_src"
          class="h-10 w-10 min-w-fit my-auto hidden sm:flex"
        />
        <img
          v-else
          :src="store.default.logo_src"
          class="h-10 w-10 min-w-fit my-auto hidden sm:flex"
        />
        <h1 class="sm:text-xl my-auto max-w-xs">
          {{
            store.survey_title ? store.survey_title : store.default.survey_title
          }}
        </h1>
      </div>
      <button
        class="hover:bg-gray-100 rounded p-2 h-fit"
        @click="store.currentTab = null"
      >
        <XIcon class="h-6 w-6" />
      </button>
    </div>
    <LinearScale/>
  </div>
</template>
