<template>
  <form
    class="relative w-full max-w-4xl pb-32 mx-auto bg-white rounded-lg shadow-xl sm:pb-12 2xl:max-w-6xl"
    @submit.prevent="submit"
  >
    <header
      class="items-center justify-between p-5 pb-10 text-center bg-yellow-500 rounded-t-lg lg:flex lg:text-left"
    >
      <!-- prettier-ignore -->
      <h2
        class="mb-5 text-xl italic font-bold text-red-800 select-none
        md:text-2xl
        lg:pl-8 lg:mb-0"
      >
        Monte aqui o seu cardápio. O que está esperando?
      </h2>
      <home-form-check-box v-model="item.isDrink" :value="item.isDrink" />
    </header>
    <!-- First row -->
    <div
      id="wrapper"
      class="px-5 -mt-5 space-y-5 lg:flex lg:space-y-0 lg:space-x-5"
    >
      <div class="z-10 w-full">
        <label class="sr-only" for="title">Título do pedido</label>
        <!-- prettier-ignore -->
        <input
          id="title"
          ref="title"
          v-model="item.title"
          type="text"
          placeholder="Título do pedido"
          class="w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md c-scroll-container
          focus:outline-none focus:shadow-outline"
          @input="errors.title = ''"
        />
        <transition name="zoom-fade">
          <p
            v-show="errors.title"
            class="inline-block mt-1 text-xs italic text-red-600"
          >
            {{ errors.title }}
          </p>
        </transition>
      </div>
      <div class="z-10 w-full">
        <label class="sr-only" for="flavor">Sabor</label>
        <!-- prettier-ignore -->
        <input
          id="flavor"
          ref="flavor"
          v-model="item.flavor"
          type="text"
          placeholder="Sabor"
          class="w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md c-scroll-container
          focus:outline-none focus:shadow-outline"
          @input="errors.flavor = ''"
        />
        <transition name="zoom-fade">
          <p
            v-show="errors.flavor"
            class="inline-block mt-1 text-xs italic text-red-600"
          >
            {{ errors.flavor }}
          </p>
        </transition>
      </div>
      <div class="z-10">
        <label class="sr-only" for="price">R$</label>
        <!-- prettier-ignore -->
        <input
          id="price"
          ref="price"
          v-model="item.price"
          type="number"
          step="0.01"
          placeholder="R$"
          class="w-40 px-4 py-2 placeholder-red-800 border border-red-600 rounded-md c-scroll-container
          focus:outline-none focus:shadow-outline"
          @input="errors.price = ''"
        />
        <transition name="zoom-fade">
          <p
            v-show="errors.price"
            class="inline-block mt-1 text-xs italic text-red-600"
          >
            {{ errors.price }}
          </p>
        </transition>
      </div>
    </div>
    <!-- End: First row -->
    <!-- Second row -->
    <div class="flex pr-5 mt-5 space-x-5">
      <label class="sr-only" for="description">Descrição</label>
      <!-- prettier-ignore -->
      <textarea
        id="description"
        v-model="item.description"
        placeholder="Descrição"
        rows="3"
        class="z-10 w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md resize-none
        focus:outline-none focus:shadow-outline"
      />
    </div>
    <!-- End: Second row -->
    <!-- Third row -->
    <!-- TODO: Create drag and drop component -->
    <div class="z-10 px-5 mt-5">
      <div
        class="flex flex-col items-center justify-center w-full p-5 border border-red-600 rounded-md cursor-pointer"
      >
        <img
          src="../assets/upload-icon.svg"
          alt=""
          aria-hidden="true"
          draggable="false"
          class="w-12 h-12 mb-2"
        />
        <p class="text-center text-red-800 select-none">
          Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar
          a pasta.
        </p>
      </div>
    </div>
    <!-- End: Third row -->
    <!-- Buttons -->
    <!-- TODO: Abstract button component -->
    <div class="absolute w-full mt-5 text-center">
      <!-- prettier-ignore -->
      <input
        type="button"
        value="LIMPAR"
        class="block w-48 py-4 mx-auto mb-5 text-xl font-black text-white bg-red-600 rounded-full cursor-pointer
        sm:mx-5 sm:inline
        transition-transform transform duration-300 ease-out active:scale-90
        lg:hover:scale-105 lg:active:scale-100
        focus:outline-none focus:shadow-outline"
        @click="resetForm"
      />
      <!-- prettier-ignore -->
      <input
        type="submit"
        value="CADASTRAR"
        class="block w-48 py-4 mx-auto mb-5 text-xl font-black text-red-800 bg-yellow-500 rounded-full cursor-pointer
        sm:mx-5 sm:inline
        transition-transform transform duration-300 ease-out active:scale-90
        lg:hover:scale-105 lg:active:scale-100
        focus:outline-none focus:shadow-outline"
      />
    </div>
    <!-- End: Buttons -->
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ADD_ITEM } from '@/modules/home/store/action-types'
import { Item } from 'vue-modules'
import HomeFormCheckBox from '@/modules/home/components/HomeFormCheckBox.vue'
import smoothReflow, { Options } from 'vue-smooth-reflow'

const home = namespace('home')
@Component({
  components: { HomeFormCheckBox },
  mixins: [smoothReflow]
})
export default class HomeForm extends Vue {
  /***************************
   *  Form submission feature
   **************************/
  @home.Action(ADD_ITEM) addItem!: (item: Item) => void

  currentId: number = 1
  item: Item = {
    id: 0,
    isDrink: false,
    title: '',
    flavor: '',
    price: '',
    description: '',
    image: ''
  }
  errors = {
    title: '',
    flavor: '',
    price: ''
  }

  submit(): void {
    if (!this.validateForm()) return

    // Save with unique id
    this.item.id = this.currentId++
    // Remove leading zeros
    this.item.price = this.item.price.replace(/^[0]+/g, '')
    // Replace dot for comma
    this.item.price = this.item.price.replace('.', ',')

    this.addItem({ ...this.item })
    this.resetForm()
  }

  resetForm(): void {
    // Reset models
    this.item.isDrink = false
    this.item.title = ''
    this.item.flavor = ''
    this.item.price = ''
    this.item.description = ''
    this.item.image = ''

    // Reset errors
    this.errors.title = ''
    this.errors.flavor = ''
    this.errors.price = ''
  }

  validateForm(): boolean {
    const req = 'Deve preencher este campo'
    const min = 'Mínimo 3 caracteres'
    const max = 'Máximo 60 caracteres'
    const invalid = 'Precio inválido!'

    // Title input validation
    if (!this.item.title.length) {
      this.errors.title = req
    } else if (this.item.title.length < 3) {
      this.errors.title = min
    } else if (this.item.title.length > 60) {
      this.errors.title = max
    }

    // Flavor input validation
    if (!this.item.flavor.length) {
      this.errors.flavor = req
    } else if (this.item.flavor.length < 3) {
      this.errors.flavor = min
    } else if (this.item.flavor.length > 60) {
      this.errors.flavor = max
    }

    // Price input validation
    if (!this.item.price) {
      this.errors.price = req
    } else if (parseInt(this.item.price) < 1) {
      this.errors.price = invalid
    }

    // Check for errors and scroll + focus on input if any
    if (Object.values(this.errors).find((value) => value.length > 0)) {
      const elementId = Object.keys(this.errors)[
        Object.values(this.errors).findIndex((value) => value.length > 0)
      ]
      const element: HTMLElement = this.$refs[elementId] as HTMLElement
      element.focus({ preventScroll: true })
      element.scrollIntoView({ behavior: 'smooth' })
      return false
    }
    return true
  }
  /********************************
   *  End: Form submission feature
   *******************************/

  mounted() {
    // Height transition feature
    const options: Options = {
      el: '#wrapper',
      hideOverflow: false,
      transition: 'height .25s ease-out'
    }
    this.$smoothReflow!(options)
  }
}
</script>

<style>
.c-scroll-container {
  scroll-margin: 9rem;
  scroll-padding: 9rem;
}

/********************************
  Remove arrows on number inputs
*********************************/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

/* purgecss start ignore */
.zoom-fade-enter,
.zoom-fade-leave-to {
  @apply transform scale-90 opacity-0;
}
.zoom-fade-leave-active,
.zoom-fade-enter-active {
  @apply transition duration-500;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}
/* purgecss end ignore */
</style>
