<template>
  <li class="relative max-w-4xl mx-auto mb-16 lg:flex 2xl:max-w-6xl c-item">
    <!-- prettier-ignore -->
    <img
      :src="item.image ? item.image : require('../assets/pasteis-placeholder-img.png')"
      :alt="item.title + ' - Pastel de ideias'"
      class="relative z-10 object-cover mx-auto -mb-32 shadow-xl rounded-md bg-white c-image
      lg:mt-5 lg:mb-auto lg:-mr-2"
    />
    <div class="relative w-full rounded-lg shadow-xl lg:mb-auto lg:-ml-16">
      <!-- prettier-ignore -->
      <header
        class="px-8 pt-32 bg-red-600 rounded-t-lg
        lg:items-center lg:justify-between lg:py-3 lg:pl-8 lg:pr-10 lg:flex"
      >
        <h2
          class="my-3 pt-2 text-xl italic font-bold text-yellow-500 text-center
          md:text-3xl
          lg:my-1 lg:pl-20 lg:text-left"
        >
          "{{ item.title }}"
        </h2>
        <h2
          class="pb-3 text-xl italic font-bold text-white text-right
          md:text-3xl
          lg:pb-0 lg:text-left"
        >
          R${{ item.price }}
        </h2>
      </header>
      <section class="px-8 py-8 -mt-1">
        <p class="pb-3 text-xl text-red-800 md:text-2xl lg:pl-20">
          <span class="italic font-bold">Sabor: </span>
          {{ item.flavor }}
        </p>
        <p
          v-if="item.description"
          class="text-xl text-red-800 md:text-2xl lg:pl-20"
        >
          <span class="italic font-bold">Descrição: </span>
          {{ item.description }}
        </p>
      </section>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Item } from 'vue-modules'

@Component
export default class CardItem extends Vue {
  @Prop({ required: true }) private item!: Item
}
</script>

<style scoped>
.c-image {
  height: 180px;
  width: 180px;
}
</style>
