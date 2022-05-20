<script setup>
import Logo from "../media/Logo.vue";
import XIcon from "../media/XIcon.vue";
import { store } from "../store.js";
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
            store.config.consent_title
              ? store.config.consent_title
              : store.default.consent_title
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
    <div class="space-x-5 flex justify-end pb-3 border-b-2">
      <button
        @click="store.currentTab = null"
        class="text-blue-500 py-2 px-3 hover:bg-blue-100 rounded-lg duration-100 font-semibold"
      >
        {{
          store.config.consent_decline
            ? store.config.consent_decline
            : store.default.consent_decline
        }}
      </button>
      <button
        @click="store.currentTab = 'Survey'"
        class="text-white bg-blue-600 rounded-lg py-2 px-3 font-semibold hover:bg-opacity-90 duration-100"
      >
        {{
          store.config.consent_confirm ? store.config.consent_confirm : store.default.consent_confirm
        }}
      </button>
    </div>
    <p class="max-w-fit text-sm text-gray-600 pt-1">
      {{
        store.config.consent_disclaimer
          ? store.config.consent_disclaimer
          : store.default.consent_disclaimer
      }}
    </p>
  </div>
</template>
