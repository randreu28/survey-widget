<script setup>
import Logo from '../media/Logo.vue'
import XIcon from '../media/XIcon.vue'

const props = defineProps({
  isShowing: Number,
});

</script>

<template>
  <div class="flex space-x-10">
    <div class="flex space-x-5">
      <Logo class="h-10 w-10 min-w-fit my-auto hidden sm:flex" />
      <h1 class="text-xl pb-3 my-auto max-w-xs">
        ¡Ayudanos a mejorar nuestros servicios!
      </h1>
    </div>
    <button class="hover:bg-gray-100 rounded p-2 h-fit" @click="isShowing = -1">
      <XIcon class="h-6 w-6" />
    </button>
  </div>

  <div class="space-x-5 flex justify-end pb-3 border-b-2">
    <button
      @click="isShowing = -1"
      class="text-blue-500 py-2 px-3 hover:bg-blue-100 rounded-lg duration-100 font-semibold"
    >
      No, gracias
    </button>
    <button
      @click="isShowing = -1"
      class="text-white bg-blue-600 rounded-lg py-2 px-3 font-semibold hover:bg-opacity-90 duration-100"
    >
      Ayudanos
    </button>
  </div>
  <p class="max-w-fit text-sm text-gray-600 pt-1">
    Al continuar, accede que utilicemos sus respuestas y datos de usuario para
    mejorar nuestros servicios.
  </p>
</template>
