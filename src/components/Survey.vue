<script>
import Logo from "../media/Logo.vue";
import XIcon from "../media/XIcon.vue";
import Sad from "../media/Sad.vue";
import Unhappy from "../media/Unhappy.vue";
import Neutral from "../media/Neutral.vue";
import Happy from "../media/Happy.vue";
import VeryHappy from "../media/VeryHappy.vue";
import { store } from "../store.js";

export default {
  components: {
    Logo,
    XIcon,
    Sad,
    Unhappy,
    Neutral,
    Happy,
    VeryHappy,
  },
  props: {
    clientid: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getData(a) {
      store.currentTab = "Thanks";
      const date = new Date();
      const data = {
        ux: a,
        date: date,
        userLang: navigator.language || navigator.userLanguage,
        url: window.location.href,
        client_id: store.client_id,
        //...
      };
      fetch("http://httpbin.org/post?key=abc123", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        }),
        (error) => {
          console.error(error);
        };
    },
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
    <div class="flex space-x-4 justify-center pb-1.5">
      <button
        class="hover:bg-gray-100 p-3 rounded-xl duration-100"
        @click="getData(1)"
      >
        <Sad class="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
      <button
        class="hover:bg-gray-100 p-3 rounded-xl duration-100"
        @click="getData(2)"
      >
        <Unhappy class="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
      <button
        class="hover:bg-gray-100 p-3 rounded-xl duration-100"
        @click="getData(3)"
      >
        <Neutral class="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
      <button
        class="hover:bg-gray-100 p-3 rounded-xl duration-100"
        @click="getData(4)"
      >
        <Happy class="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
      <button
        class="hover:bg-gray-100 p-3 rounded-xl duration-100"
        @click="getData(5)"
      >
        <VeryHappy class="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
    </div>
    <div class="flex justify-between sm:text-lg">
      <h2>Insatisfecho</h2>
      <h2>Satisfecho</h2>
    </div>
  </div>
</template>
