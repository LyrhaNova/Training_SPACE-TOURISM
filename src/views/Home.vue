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
  background-image: url('@/assets/home/background-home-mobile.jpg');
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  min-height: 100vh;
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
  position: relative; /* Nécessaire pour positionner le pseudo-élément */
  background-color: var(--vt-c-white);
  height: 144px;
  width: 144px;
  border-radius: 100%;
  border-style: none;
  font-family: 'Bellefair';
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;

  /* Pseudo-élément pour le cercle */
  &::after {
    content: ''; /* Nécessaire pour générer le pseudo-élément */
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220%; /* Le cercle est plus grand que le bouton */
    height: 220%; /* Le cercle est plus grand que le bouton */
    background-color: #FFFFFF; /* Couleur explicite du cercle */
    border-radius: 50%; /* Cercle parfait */
    transform: translate(-50%, -50%); /* Centrer le cercle */
    opacity: 0; /* Le cercle est invisible au départ */
    z-index: 1; /* Le cercle est derrière le texte du bouton */
    transition: opacity 0.4s ease; /* Simple fondu */
  }

  /* Effet hover sur le bouton uniquement */
  &:hover::after {
    opacity: 0.1; /* Le cercle devient visible */
  }
}
}








</style>






<!-- <style lang="scss" module src="../styles/HomeView.module.scss"></style> -->

<!--
300px - 600px
600px - 1024
1024 - < 
-->