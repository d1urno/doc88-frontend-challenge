<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  max-width: 1920px;
  min-width: 320px;
  margin: auto;
  position: relative;
}
</style>