<template>
  <textarea @input="updateResponseText($event.target.value)"
      class="
        form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        resize-x
        w-80
        max-w-lg
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      rows="3"
      placeholder="Tu respuesta"
    />
    <button @click="textValue ? getData(textValue) : isntValid = true" class="text-white bg-blue-600 rounded-lg py-2 px-3 font-semibold hover:bg-opacity-90 duration-100 float-right mt-3">
      Enviar
    </button>
    <p v-if="isntValid" class="p-2 text-red-500">Porfavor, escribe una respuesta</p>
</template>

<script>
import { store } from "../../store.js";
import XIcon from "../../media/XIcon.vue";

export default {
  components: {
    XIcon
  },
  data() {
    return {
      store,
      textValue: null,
      isntValid: null,
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
    updateResponseText(value){
      this.textValue = value;
    },
  },
}
</script>
