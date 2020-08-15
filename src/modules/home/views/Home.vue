<template>
  <main class="flex flex-col items-center justify-start min-h-screen">
    <!-- Background white gradient -->
    <span
      id="gradient"
      class="absolute inset-0"
    />
    <!-- End: Background white gradient -->
    <!-- Background red wave -->
    <img
      id="wave"
      alt=""
      src="../assets/wave.svg"
      draggable="false"
      aria-hidden="true"
      class="absolute inset-0 object-cover object-bottom w-full lg:object-fill"
    >
    <!-- End: Background red wave -->
    <header class="container flex mt-10 mb-6 2xl:mt-16">
      <div class="relative max-w-xs mx-auto sm:max-w-sm lg:max-w-xl 2xl:max-w-full">
        <!-- Logo -->
        <img
          src="../assets/logo.svg"
          alt="Logo - Pastel de ideias"
          class="mb-12
          sm:mb-16
          lg:mb-0 lg:pr-12
          2xl:pr-40"
        >
        <!-- End: Logo -->
        <!-- Absolute image -->
        <img
          src="../assets/pasteis-img.png"
          alt="Pasteis - Pastel de ideias"
          class="absolute bottom-0 left-0 right-0 mx-auto w-40 -mb-20
          sm:-mb-24 sm:w-48
          lg:left-auto lg:-mr-40 lg:-mb-32 lg:w-64
          2xl:-mb-48 2xl:w-auto"
        >
        <!-- End: Absolute image -->
      </div>
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

<style lang="scss" scoped>
main {
  background: url(../assets/pattern.png) repeat;
}

#gradient {
  background: linear-gradient(90deg, rgba(255, 0, 0, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 0, 0, 0));
}

#wave {
  height: 360px;
  @screen sm {
    height: 460px;
  }

  @screen lg {
    height: 420px;
  }

  @screen xl {
    height: 380px;
  }

  @screen 2xl {
    height: 546px;
  }
}
</style>