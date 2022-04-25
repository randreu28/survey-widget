<script>
import { store } from "./store.js";
import Ux from "./components/Ux.vue";
import Consent from "./components/Consent.vue";
import Thanks from "./components/Thanks.vue";

export default {
  components: {
    Ux,
    Consent,
    Thanks,
  },
  data() {
    return {
      store,
    };
  },
  props: {
    clientid: String,
  },
};
</script>

<template>
  {{ (store.clientID = clientid) }}
  <Transition name="fade" mode="out-in">
    <component
      v-if="store.currentTab !== null"
      :is="store.currentTab"
      class="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl"
    >
    </component>
  </Transition>
</template>

<!-- Being a CustomWebComponent, the css clases get scoped, so I had to reference tailwind again-->
<style lang="scss">
  @import "./index.css";
</style>