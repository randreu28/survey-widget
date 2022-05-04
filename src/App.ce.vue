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
    logo_src: String,
    consent_title: String,
    consent_confirm: String,
    consent_decline: String,
    consent_disclaimer: String,
    survey_title: String,
    thanks_title: String,
  },
  methods: {
    storeSettings() {
      store.client_id = this.client_id;
      store.logo_src = this.logo_src;
      store.consent_title = this.consent_title;
      store.consent_confirm = this.consent_confirm;
      store.consent_decline = this.consent_decline;
      store.consent_disclaimer = this.consent_disclaimer;
      store.survey_title = this.survey_title;
      store.thanks_title = this.thanks_title;
    },
  },
};
</script>

<template>
  {{ storeSettings() }}
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
