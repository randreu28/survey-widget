<script setup>
import Logo from '../media/Logo.vue';
import XIcon from '../media/XIcon.vue';
import Sad from '../media/Sad.vue';
import Unhappy from '../media/Unhappy.vue';
import Neutral from '../media/Neutral.vue';
import Happy from '../media/Happy.vue';
import VeryHappy from '../media/VeryHappy.vue';

</script>

<template>
      <div class="flex space-x-10">
        <div class="flex space-x-5">
          <Logo class="h-10 w-10 min-w-fit my-auto hidden sm:flex" />
          <h1 class="sm:text-xl pb-3 my-auto max-w-xs">
            ¿Qué tan satisfecho estás con nuestros servicios hoy?
          </h1>
        </div>
        <button
          class="hover:bg-gray-100 rounded p-2 h-fit"
          @click="props.isShowing = -1"
        >
          <XIcon class="h-6 w-6" />
        </button>
      </div>

      <div class="flex space-x-4 justify-center pb-1.5">
        <button
          class="hover:bg-gray-100 p-3 rounded-xl duration-100"
          @click="props.isShowing = -1"
        >
          <Sad class="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          class="hover:bg-gray-100 p-3 rounded-xl duration-100"
          @click="props.isShowing = -1"
        >
          <Unhappy class="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          class="hover:bg-gray-100 p-3 rounded-xl duration-100"
          @click="props.isShowing = -1"
        >
          <Neutral class="h-5 w-5 sm:h-10 sm:w-10" />
        </button>
        <button
          class="hover:bg-gray-100 p-3 rounded-xl duration-100"
          @click="props.isShowing = -1"
        >
          <Happy class="h-5 w-5 sm:h-10 sm:w-10" />
        </button>

        <button
          class="hover:bg-gray-100 p-3 rounded-xl duration-100"
          @click="props.isShowing = -1"
        >
          <VeryHappy class="h-5 w-5 sm:h-10 sm:w-10" />
        </button>
      </div>
      <div class="flex justify-between sm:text-lg">
        <h2>Insatisfecho</h2>
        <h2>Satisfecho</h2>
      </div>
</template>