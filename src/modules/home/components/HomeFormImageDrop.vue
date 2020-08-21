<template>
  <div
    class="flex justify-center border border-red-600 rounded-md"
    @dragover.prevent
    @drop="onDrop"
  >
    <transition name="zoom-fade" mode="out-in">
      <!-- Instructions -->
      <label
        v-if="!image"
        class="flex flex-col items-center justify-center w-full p-5 cursor-pointer"
      >
        <img
          src="../assets/upload-icon.svg"
          alt=""
          aria-hidden="true"
          draggable="false"
          class="w-12 h-12 mb-2"
        />
        <span class="text-center text-red-800 select-none">
          Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar
          a pasta.
        </span>
        <input
          type="file"
          name="image"
          class="absolute z-0 invisible"
          @change="onChange"
        />
      </label>
      <!-- End: Instructions -->

      <!-- Dropped image -->
      <div v-else>
        <div class="relative m-6">
          <img
            :src="image"
            alt=""
            class="object-contain object-center rounded-md"
          />
          <!-- Remove image button --><!-- prettier-ignore -->
          <button
              type="button"
              class="absolute right-0 top-0 w-8 h-8 -mt-4 -mr-4 font-black text-white bg-red-600 rounded-full
              lg:hover:scale-105 lg:active:scale-100
              transition-transform duration-300 ease-out transform active:scale-90
              cursor-pointer focus:outline-none focus:shadow-outline"
              @click="removeFile"
          >
            <img
                alt=""
                src="../assets/cross-icon.svg"
                draggable="false"
                class="w-4 mx-auto"
            />
          </button>
          <!-- End: Remove image button -->
        </div>
      </div>
      <!-- End: Dropped image -->
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component
export default class HomeFormImageDrop extends Vue {
  /*************************
   *  Drag and Drop feature
   ************************/
  @Prop({ required: true }) private image!: string

  async onDrop(e: DragEvent) {
    e.stopPropagation()
    e.preventDefault()

    const files = e.dataTransfer!.files
    await this.createFile(files[0])
  }

  onChange(e: HTMLInputEvent): void {
    const files = e.target!.files
    this.createFile(files![0])
  }

  async createFile(file: File) {
    if (!file.type.match(/image.(jpg|jpeg|png)/i)) {
      this.$emit('invalid-image')
      return
    }
    const reader: FileReader = new FileReader()
    return new Promise((resolve) => {
      reader.onload = () => {
        this.$emit('image-change', reader.result!)
        resolve()
      }
      reader.readAsDataURL(file)
    })
  }

  removeFile(): void {
    this.$emit('image-change', '')
  }
  /******************************
   *  End: Drag and Drop feature
   *****************************/
}
</script>

<style scoped>
/* purgecss start ignore */
.zoom-fade-enter {
  @apply transform scale-90 opacity-0;
}

.zoom-fade-leave-to {
}
.zoom-fade-leave-active {
}

.zoom-fade-enter-active {
  @apply transition duration-500;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}
/* purgecss end ignore */
</style>
