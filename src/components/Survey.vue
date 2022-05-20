<script>
import Logo from "../media/Logo.vue";
import XIcon from "../media/XIcon.vue";
import LinearScale from "./Survey/LinearScale.vue";
import Text from "./Survey/Text.vue";
import { store } from "../store.js";

export default {
  components: {
    Logo,
    LinearScale,
    Text,
    XIcon,
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
    <div class="flex justify-between pb-4">
      <div class="flex space-x-5">
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
        <h1 class="text-xl my-auto max-w-xs">
          {{
            store.config.survey_title ? store.config.survey_title : store.default.survey_title
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
    <Text />
  </div>
</template>
