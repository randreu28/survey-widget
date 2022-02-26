<script setup>
import Consent from "./Consent.vue";
import Ux from "./Ux.vue";
import Thanks from "./Thanks.vue";

import { ref } from "vue";

const isShowing = ref(0)

</script>

<template>
  <div v-if="isShowing !== -1"
    className="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl space-y-3"
  >
  <Consent :isShowing="isShowing" v-if="isShowing === 0"/>
  <Ux v-if="isShowing === 1"/>
  <Thanks v-if="isShowing === 2"/>
  </div>
</template>
