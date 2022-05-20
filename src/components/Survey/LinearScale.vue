<template>
  <div>
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
      <h2>{{store.config.survey_left ? store.config.survey_left : store.default.survey_left}}</h2>
      <h2>{{store.config.survey_right ? store.config.survey_right : store.default.survey_right}}</h2>
    </div>
  </div>
</template>

<script>
import XIcon from "../../media/XIcon.vue";
import Sad from "../../media/Sad.vue";
import Unhappy from "../../media/Unhappy.vue";
import Neutral from "../../media/Neutral.vue";
import Happy from "../../media/Happy.vue";
import VeryHappy from "../../media/VeryHappy.vue";
import { store } from "../../store.js";

export default {
  components: {
    XIcon,
    Sad,
    Unhappy,
    Neutral,
    Happy,
    VeryHappy,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getData(value) {
      store.currentTab = "Thanks";
      const date = new Date();
      const data = {
        surveyType: "LinearScale",
        value: value,
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
}
</script>
