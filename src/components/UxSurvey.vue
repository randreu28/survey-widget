<script setup>
import Consent from "./Consent.vue";
import Ux from "./Ux.vue";
import Thanks from "./Thanks.vue";

import { ref } from "vue";

const isShowing = ref(0)

</script>

<template>
  <div
    className="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl space-y-3"
  >
  <Consent v-if="isShowing === 0"/>
  </div>
</template>
