<template>
  <div class="flex items-center justify-center lg:justify-start">
    <label for="toggle" class="flex items-center cursor-pointer">
      <span class="text-red-800">Comida</span>
      <span class="relative mx-3">
        <input
          id="toggle"
          type="checkbox"
          class="hidden"
          :checked="value"
          @change="$emit('input', $event.target.checked)"
        />
        <span class="block w-10 h-3 bg-white rounded-full shadow-inner" />
        <span
          id="dot"
          class="absolute inset-y-0 left-0 w-5 h-5 -mt-1 transition duration-300 ease-in-out bg-red-600 rounded-full"
        />
      </span>
      <span class="text-red-800">Bebida</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HomeFormCheckBox extends Vue {
  @Prop({ required: true }) private value!: boolean
}
</script>

<style scoped>
input:checked ~ #dot {
  @apply transform translate-x-full;
}

/*****************************************
   Remove highlight blue color on buttons
   when tapped, only for mobile devices
*****************************************/
label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
