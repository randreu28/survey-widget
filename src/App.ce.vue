<script>
import { store } from "./store.js";
import Survey from "./components/Survey.vue";
import Consent from "./components/Consent.vue";
import Thanks from "./components/Thanks.vue";

export default {
  components: {
    Survey,
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
  methods: {
    clientID() {
      store.clientID = this.clientid;
    },
  },
};
</script>

<template>
  {{ clientID() }}
  <Transition name="fade" mode="out-in">
    <component
      v-if="store.currentTab !== null"
      :is="store.currentTab"
      class="fixed z-[999] p-5 bottom-0 right-0 m-3 sm:m-6 text-black bg-white rounded-xl"
    >
    </component>
  </Transition>
</template>

<style lang="scss">
@import "./index.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
