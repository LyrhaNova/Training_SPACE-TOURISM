<script setup lang="ts">
</script>

<template>
  <main>
    <header class="intro">
      <div class="intro__first-text">
        <p>SO, YOU WANT TO TRAVEL TO</p>
      </div>
      <div class="intro__title">
        <h1>SPACE</h1>
      </div>
      <div class="intro__second-text">
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
    </header>
    <section class="btn">
      <button class="btn__explore">
      <p>EXPLORE</p>
    </button>
    </section>

  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('@/assets/home/background-home-mobile.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 510px;
  width: 100%;
  row-gap: 5px;

  &__first-text {
    color: var(--vt-c-white-blue);
    font-family: 'Barlow Condensed';
    font-size: 1rem;
    letter-spacing: 2px;
  }

  &__title {
    color: var(--vt-c-white);
    font-family: "Bellefair", serif;
    font-size: 2.4rem;
  }

  &__second-text {
    padding: 0 35px;
    text-align: center;
    color: var(--vt-c-white-blue);
    font-size: 0.9rem;
    font-family: 'Barlow Condensed';
    letter-spacing: 1px;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  &__explore {
  position: relative;
  background-color: var(--vt-c-white);
  height: 144px;
  width: 144px;
  border-radius: 100%;
  border-style: none;
  font-family: 'Bellefair';
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;
  color: var(--vt-c-black);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220%;
    height: 220%;
    background-color: #FFFFFF;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    transition: opacity 0.4s ease;
  }

  &:hover {
      color: var(--vt-c-text-light-2);
    }

  &:hover::after {
    opacity: 0.1;
  }
}
}

/* TABLET */
@media (min-width: 768px) {
  main {
  background-image: url('@/assets/home/background-home-tablet.jpg');
}

.intro {
  justify-content: end;
  height: 570px;
  row-gap: 0;

  &__first-text {
    font-size: 1.75rem;
  }

  &__title {
    font-size: 4.5rem;
  }

  &__second-text {
    padding: 0 110px;
    font-size: 1.1rem;
    line-height: 1.8;
  }
}

.btn {
  height: 440px;
  &__explore {
  height: 272px;
  width: 272px;
  font-size: 2rem;

  &::after {
    width: 188%;
    height: 188%;
  }

  &:hover::after {
    opacity: 0.1;
  }
 }
}
}
</style>