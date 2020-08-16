<template>
  <form
    action="/"
    class="relative w-full max-w-4xl pb-32 mx-auto bg-white rounded-lg shadow-xl sm:pb-12 2xl:max-w-6xl"
  >
    <header
      class="items-center justify-between p-5 pb-10 text-center bg-yellow-500 rounded-t-lg lg:flex lg:text-left"
    >
      <h2 class="text-xl italic font-bold text-red-800 md:text-2xl lg:pl-12">
        Monte aqui o seu cardápio. O que está esperando?
      </h2>
      <!-- Checkbox -->
      <!-- TODO: Create checkbox component -->
      <div
        class="flex items-center justify-center mt-5 lg:justify-start lg:mt-0"
      >
        <span class="text-red-800">Comida</span>
        <div class="relative mx-3">
          <div class="w-10 h-3 bg-white rounded-full shadow-inner" />
          <div
            class="absolute inset-y-0 left-0 w-5 h-5 -mt-1 bg-red-600 rounded-full"
          />
        </div>
        <span class="text-red-800">Bebida</span>
      </div>
      <!-- End: Checkbox -->
    </header>
    <!-- First row --><!-- prettier-ignore -->
    <div
      class="px-5 -mt-10 space-y-5
      lg:flex lg:pr-5 lg:pl-0 lg:space-y-0 lg:-mt-5 lg:space-x-5"
    >
      <label class="sr-only" for="title">Título do pedido</label>
      <input
        id="title"
        type="text"
        placeholder="Título do pedido"
        class="z-10 w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md focus:outline-none focus:shadow-outline"
      />
      <label class="sr-only" for="flavor">Sabor</label>
      <input
        id="flavor"
        type="text"
        placeholder="Sabor"
        class="w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md focus:outline-none focus:shadow-outline"
      />
      <label class="sr-only" for="price">R$</label>
      <input
        id="price"
        type="text"
        placeholder="R$"
        class="w-40 px-4 py-2 placeholder-red-800 border border-red-600 rounded-md focus:outline-none focus:shadow-outline"
      />
    </div>
    <!-- End: First row -->
    <!-- Second row -->
    <div class="flex pr-5 mt-5 space-x-5">
      <label class="sr-only" for="description">Descrição</label>
      <textarea
        id="description"
        placeholder="Descrição"
        rows="3"
        class="z-10 w-full px-4 py-2 placeholder-red-800 border border-red-600 rounded-md resize-none focus:outline-none focus:shadow-outline"
      />
    </div>
    <!-- End: Second row -->
    <!-- Third row -->
    <!-- TODO: Create drag and drop component -->
    <div class="z-10 px-5 mt-5">
      <div
        class="flex flex-col items-center justify-center w-full p-5 border border-red-600 rounded-md"
      >
        <img
          src="../assets/upload-icon.svg"
          alt=""
          aria-hidden="true"
          class="w-12 mb-2"
        />
        <p class="text-center text-red-800">
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
        type="reset"
        value="LIMPAR"
        class="block w-48 py-4 mx-auto mb-5 text-xl font-black text-white bg-red-600 rounded-full focus:outline-none focus:shadow-outline
        sm:mx-5 sm:inline"
      />
      <!-- prettier-ignore -->
      <input
        type="submit"
        value="CADASTRAR"
        class="block w-48 py-4 mx-auto mb-5 text-xl font-black text-red-800 bg-yellow-500 rounded-full focus:outline-none focus:shadow-outline
        sm:mx-5 sm:inline"
      />
    </div>
    <!-- End: Buttons -->
  </form>
</template>

<script>
export default {
  name: 'HomeForm'
}
</script>
