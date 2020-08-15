<template>
  <form
    action="/"
    class="relative w-full max-w-6xl pb-12 mx-auto bg-white rounded-lg shadow-xl"
  >
    <header class="flex items-center justify-between p-5 pb-10 bg-yellow-500 rounded-t-lg">
      <h2 class="pl-12 text-2xl italic font-bold text-red-900">
        Monte aqui o seu cardápio. O que está esperando?
      </h2>
      <!-- Checkbox -->
      <!-- TODO: Create checkbox component -->
      <div class="flex items-center">
        <span class="text-red-900">Comida</span>
        <div class="relative mx-3">
          <div class="w-10 h-3 bg-white rounded-full shadow-inner" />
          <div
            class="absolute inset-y-0 left-0 w-5 h-5 -mt-1 bg-red-600 rounded-full"
          />
        </div>
        <span class="text-red-900">Bebida</span>
      </div>
      <!-- End: Checkbox -->
    </header>
    <!-- First row -->
    <div class="flex pr-5 -mt-5 space-x-5">
      <label
        class="sr-only"
        for="title"
      >Título do pedido</label>
      <input
        id="title"
        type="text"
        placeholder="Título do pedido"
        class="w-full px-4 py-2 placeholder-red-900 border border-red-500 rounded-lg"
      >
      <label
        class="sr-only"
        for="flavor"
      >Sabor</label>
      <input
        id="flavor"
        type="text"
        placeholder="Sabor"
        class="w-full px-4 py-2 placeholder-red-900 border border-red-500 rounded-lg"
      >
      <label
        class="sr-only"
        for="price"
      >R$</label>
      <input
        id="price"
        type="text"
        placeholder="R$"
        class="w-48 px-4 py-2 placeholder-red-900 border border-red-500 rounded-lg"
      >
    </div>
    <!-- End: First row -->
    <!-- Second row -->
    <div class="flex pr-5 mt-5 space-x-5">
      <label
        class="sr-only"
        for="description"
      >Descrição</label>
      <textarea
        id="description"
        placeholder="Descrição"
        rows="3"
        class="w-full px-4 py-2 placeholder-red-900 border border-red-500 rounded-lg resize-none"
      />
    </div>
    <!-- End: Second row -->
    <!-- Third row -->
    <!-- TODO: Create drag and drop component -->
    <div class="px-5 mt-5">
      <div
        class="flex flex-col items-center justify-center w-full p-5 border border-red-500 rounded-lg"
      >
        <img
          src="../assets/upload-icon.svg"
          alt=""
          aria-hidden="true"
          class="w-12 mb-2"
        >
        <p class="text-red-900">
          Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar
          a pasta.
        </p>
      </div>
    </div>
    <!-- End: Third row -->
    <!-- Buttons -->
    <!-- TODO: Abstract button component -->
    <div class="absolute w-full mt-5 text-center">
      <input
        type="reset"
        value="LIMPAR"
        class="w-48 py-4 mx-5 text-xl font-black text-white bg-red-600 rounded-full"
      >
      <input
        type="submit"
        value="CADASTRAR"
        class="w-48 py-4 mx-5 text-xl font-black text-red-900 bg-yellow-500 rounded-full"
      >
    </div>
    <!-- End: Buttons -->
  </form>
</template>

<script>
export default {
  name: 'HomeForm',
}
</script>
