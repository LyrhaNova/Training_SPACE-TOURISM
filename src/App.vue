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

<!-- <template>
  <div id="app">
    <NavBar />
    <div ref="pageContainer" class="page-container">
      <router-view v-slot="{ Component }">
        <transition 
          @before-enter="beforeEnter"
          @enter="onEnter"
          @after-enter="afterEnter">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    // Typage explicite pour `pageContainer` comme un HTMLElement
    const pageContainer = ref<HTMLElement | null>(null);

    // Transition hooks sans le paramètre `done`
    const beforeEnter = (el: Element) => {
      // On commence le fondu
      if (pageContainer.value) {
        pageContainer.value.style.opacity = '0';
      }
    };

    const onEnter = (el: Element) => {
      // Démarrer la transition de fondu
      if (pageContainer.value) {
        pageContainer.value.style.transition = 'opacity 1s ease-in-out';
        pageContainer.value.style.opacity = '1';
      }
    };

    const afterEnter = () => {
      // Assurer que la page a fini de fondre
      if (pageContainer.value) {
        pageContainer.value.style.transition = '';
      }
    };

    return {
      pageContainer,
      beforeEnter,
      onEnter,
      afterEnter,
    };
  },
});
</script>

<style lang="scss">
@use 'styles/main.scss' as *;
.page-container {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
 -->
