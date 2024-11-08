<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<!-- Import global SCSS styles -->
<style lang="scss">
@use 'styles/main.scss' as *;
</style>