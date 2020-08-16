<template>
  <li class="relative flex max-w-6xl mx-auto mb-16 c-item">
    <img
      src="../assets/pasteis-placeholder-img.png"
      alt=""
      class="z-10 mb-auto -mt-3 -ml-8 -mr-2"
    />
    <div class="relative w-full mb-auto -ml-24 rounded-lg shadow-xl">
      <header
        class="items-center justify-between py-5 pl-8 pr-10 text-center bg-red-600 rounded-t-lg lg:flex lg:text-left"
      >
        <h2
          class="text-xl italic font-bold text-yellow-500 md:text-3xl lg:pl-20"
        >
          "{{ item.title }}"
        </h2>
        <h2 class="text-xl italic font-bold text-white md:text-3xl">
          R${{ item.price }}
        </h2>
      </header>
      <section class="px-8 py-6">
        <p class="pb-4 text-xl text-red-800 md:text-2xl lg:pl-20">
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

<style scoped></style>
