<template>
  <kinesis-container
    tag="main"
    class="relative flex flex-col items-center justify-start min-h-screen overflow-hidden"
  >
    <span id="gradient" class="absolute inset-0" />
    <!-- Background red wave -->
    <img
      id="wave"
      alt=""
      src="../assets/wave.svg"
      draggable="false"
      aria-hidden="true"
      class="absolute inset-0 object-cover object-bottom w-full lg:object-fill"
    />
    <!-- End: Background red wave -->
    <header class="container relative flex mt-10 mb-6 2xl:mt-16">
      <div
        class="relative max-w-xs mx-auto sm:max-w-sm lg:max-w-xl 2xl:max-w-full"
      >
        <!-- Logo --><!-- prettier-ignore -->
        <img
          id="logo"
          src="../assets/logo.svg"
          alt="Logo - Pastel de ideias"
          class="mb-12
          sm:mb-16
          lg:mb-0 lg:pr-12
          2xl:pr-40"
        />
        <!-- End: Logo -->
        <!-- Absolute image --><!-- prettier-ignore -->
        <img
          src="../assets/pasteis-img.png"
          alt="Pasteis - Pastel de ideias"
          class="absolute bottom-0 left-0 right-0 w-40 mx-auto -mb-20
          sm:-mb-24 sm:w-48
          lg:left-auto lg:-mr-40 lg:-mb-32 lg:w-64
          2xl:-mb-48 2xl:w-auto"
        />
        <!-- End: Absolute image -->
      </div>
      <!-- Parallax image --><!-- prettier-ignore -->
      <kinesis-element :strength="20" class="absolute inset-0 z-10 hidden
      lg:block lg:mt-6 lg:-ml-32 lg:max-w-xs
      xl:-ml-12
      2xl:-ml-32 2xl:max-w-full">
        <img
          v-parallax="-0.2"
          src="../assets/pastel-parallax.png"
          alt="Pastel - Pastel de ideias"
          class="lg:-ml-12
          xl:-ml-6
          2xl:ml-0"
        />
      </kinesis-element>
      <!-- End: Parallax image -->
    </header>
    <div class="container mb-24">
      <home-form />
    </div>
    <!-- Divisor -->
    <transition name="slide-top">
      <div v-if="items.length" class="relative flex items-center w-full mb-16">
        <span class="flex-1 inline-block h-1 border-t border-red-600" />
        <p
          class="flex-shrink-0 px-6 text-xl italic font-bold text-center text-red-800 sm:px-12 md:text-2xl"
        >
          Veja como será <br class="sm:hidden" />apresentado ao cliente
        </p>
        <span class="flex-1 inline-block h-1 border-t border-red-600" />
      </div>
    </transition>
    <!-- End: Divisor -->
    <!-- List -->
    <transition-group name="zoom-fade" tag="ul" class="container">
      <card-item v-for="item in items" :key="item.id" :item="item" />
    </transition-group>
    <!-- End: List -->
  </kinesis-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { GET_ITEMS } from '@/modules/home/store/getters'
import { Item } from 'vue-modules'
import HomeForm from '@/modules/home/components/HomeForm.vue'
import CardItem from '@/modules/home/components/CardItem.vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

const home = namespace('home')

@Component({
  components: { CardItem, HomeForm, KinesisContainer, KinesisElement }
})
export default class Home extends Vue {
  @home.Getter(GET_ITEMS) items!: [Item]
}
</script>

<style lang="scss" scoped>
main {
  background: url(../assets/pattern.png) repeat;
}

#gradient {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1),
    rgba(255, 0, 0, 0)
  );
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

#logo {
  height: 114px;
  @screen sm {
    height: 137px;
  }

  @screen lg {
    height: 188px;
  }

  @screen 2xl {
    height: 263px;
  }
}

.c-item {
  @apply transition duration-700;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}

/*! purgecss start ignore */
.zoom-fade-enter {
  @apply transform scale-90 opacity-0;
}
.slide-top-enter,
.slide-top-leave-to {
  @apply transform translate-y-full opacity-0;
}
.slide-top-leave-active,
.slide-top-enter-active {
  @apply transition duration-500;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}
/*! purgecss end ignore */
</style>
