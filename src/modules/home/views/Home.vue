<template>
  <main class="flex flex-col items-center justify-start min-h-screen">
    <span
      id="gradient"
      class="absolute inset-0"
    />
    <img
      id="wave"
      class="absolute inset-0 w-full"
      src="../assets/wave.svg"
      draggable="false"
      aria-hidden="true"
      alt=""
    >
    <header class="container relative mt-10 mb-6 2xl:mt-16">
      <img
        class="w-full max-w-xs mx-auto sm:max-w-sm 2xl:max-w-full 2xl:w-auto"
        src="../assets/logo.svg"
        alt="Logo - Pastel de ideias"
      >
    </header>
    <div class="container mb-32">
      <home-form />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeForm from '@/modules/home/components/HomeForm.vue'

@Component({
  components: { HomeForm }
})
export default class Home extends Vue {}
</script>

<style scoped>
main {
  background: url(../assets/pattern.png) repeat;
}

#gradient {
  background: linear-gradient(90deg, rgba(255, 0, 0, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 0, 0, 0));
}

#wave {
  height: 330px;
}

@screen 2xl {
  #wave {
    height: 546px;
  }
}
</style>