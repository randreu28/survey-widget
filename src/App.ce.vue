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
    client_id: String,
    survey_type: String,

    //Text survey
    survey_confirm: String,
    survey_placeholder: String,

    //Linear Scale survey
    survey_left: String,
    survey_right: String,

    //Common on all survey types
    logo_src: String,
    consent_title: String,
    consent_confirm: String,
    consent_decline: String,
    consent_disclaimer: String,
    survey_title: String,
    thanks_title: String,
  },
  created(){
    store.config = this.$props;
  },
};

</script>

<template>
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
