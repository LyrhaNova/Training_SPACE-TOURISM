<script setup lang="ts">
import { ref, onMounted } from 'vue';
import data from '@/data/data.json';

interface Destination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}

// Déclarez `destinations` comme une `ref` de type `Destination[]`
const destinations = ref<Destination[]>(data.destinations);
const selectedDestination = ref<Destination>(destinations.value[0] || null);

onMounted(async () => {
  // Charger les images avec import.meta.glob
  const images = import.meta.glob('/src/assets/destination/*.{png,webp}', { eager: true });

  // Ajouter un cast pour dire à TypeScript que chaque image a une propriété `default`
  const typedImages = images as Record<string, { default: string }>;

  // Mettre à jour les destinations avec les images résolues
  destinations.value = destinations.value.map(destination => ({
    ...destination,
    images: {
      // Utiliser le cast pour accéder à `default` sans erreur
      png: typedImages[`/src/assets/destination/image-${destination.name.toLowerCase()}.png`]?.default || '',
      webp: typedImages[`/src/assets/destination/image-${destination.name.toLowerCase()}.webp`]?.default || '',
    }
  }));

  // Sélectionner la première destination
  selectedDestination.value = destinations.value[0]; 
});
</script>

<template>
  <main>
    <section class="planet">
      <h2 class="planet__dest">
        <span class="planet__dest-number">01</span>PICK YOUR DESTINATION
      </h2>

      <div class="planet__img">
        <img :src="selectedDestination.images.png" :alt="selectedDestination.name" />
      </div>
    </section>
    <section class="infos">
      <div class="infos__choice">
        <ul class="infos__choice__tabs">
          <li
            v-for="(destination, index) in destinations"
            :key="index"
            @click="selectedDestination = destination"
            :class="{ active: selectedDestination.name === destination.name }"
          >
            {{ destination.name }}
          </li>
        </ul>
      </div>
        <h3 class="infos__name">{{ selectedDestination.name }}</h3>
        <p class="infos__description">{{ selectedDestination.description }}</p>
        <div class="infos__details">
          <span class="infos__details__line"></span>
          <div class="infos__details__data">
            <div class="infos__details__data__dist">
              <h4>AVG. DISTANCE</h4>
              <p>{{ selectedDestination.distance }}</p>
            </div>
            <div class="infos__details__data__travel">
              <h4>EST. TRAVEL TIME</h4>
              <p>{{ selectedDestination.travel }}</p>
            </div>
          </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('@/assets/destination/background-destination-mobile.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: 'Barlow Condensed';
  color: var(--vt-c-white);
  font-size: 1rem;
  letter-spacing: 1px;
}

.planet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 110px;
  &__dest {
    display: flex;
    align-items: center;
    font-size: 1rem;
    letter-spacing: 2px;
  }
  &__dest-number {
    margin-right: 20px;
    color: var(--vt-c-text-dark-2);
    font-weight: 400;
  }
  &__img {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    img {
      width: 40%;
    }
  }
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__choice {
    margin-bottom: 5px;
    &__tabs {
      display: flex;
      justify-content: center;
      flex-direction: row;
      list-style: none;
      gap: 30px;
      padding: 0;
      margin: 0;
      height: 35px;
      li {
        position: relative;
        cursor: pointer;
        &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--vt-c-white-blue);
        opacity: 0;
        transition: opacity 0.8s ease;
      }
       &:hover::after {
         opacity: 0.5;
       }
       &.active::after {
        opacity: 1;
       }
      }
    }
  }
  &__name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bellefair';
    font-size: 3.5rem;
    height: 95px;
  }
  &__description {
    padding: 0 35px;
    text-align: center;
    color: var(--vt-c-white-blue);
    height: 120px;
    width: 100%;
    font-size: 0.9rem;
    overflow: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
  }
  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    &__line {
      display: flex;
      justify-content: center;
      width: 85%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 15px 0;
    }
    &__data {
      &__dist, &__travel {
        margin-bottom: 8px;
      }
    }
    h4 {
      color: var(--vt-c-white-blue);
    }
    p {
      font-family: 'Bellfair', sans-serif;
      font-weight: 0;
      font-size: 1.4rem;
    }
  }
  }

  /* LARGE MOBILE */
@media (min-width: 500px) {
.infos {
  &__description {
    height: 75px;
  }
}
}

/* TABLET */
@media (min-width: 768px) {
  main {
  background-image: url('@/assets/destination/background-destination-tablet.jpg');
  font-size: 1.2rem;
}

.planet {
  margin-top: 140px;
  &__dest {
    align-items: flex-start;
    width: 100%;
    padding-left: 50px;
    font-size: 1.25rem;
    letter-spacing: 3px;
  }
  &__dest-number {
    margin-right: 25px;
  }
  &__img {
    margin: 50px 0;
    img {
      width: 60%;
    }
  }
}
.infos {
  &__choice {
    &__tabs {
      gap: 40px;
      height: 35px;
      }
    }
  
  &__name {
    font-size: 4.5rem;
    height: 110px;
  }
  &__description {
    padding: 0 143px;
    height: 100px;
    font-size: 1rem;
  }
  &__details {
    height: 100px;
    margin: 0;
    &__line {
      width: 75%;
      margin: 0;
    }
    &__data {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 55%;
      &__dist {
        width: 138px;
        margin: 0;
      }
      &__travel {
        width: 129px;
        margin: 0;
      }
    }
  }
 }
}

/* DESKTOP */
@media (min-width: 1440px) {
  main {
  background-image: url('@/assets/destination/background-destination-desktop.jpg');
  font-size: 1.2rem;
  flex-direction: row;
}

.planet {
  margin-top: 80px;
  width: 50%;
  height: 100%;
  &__dest {
    padding-left: 25%;
    font-size: 1.75rem;
    letter-spacing: 4px;
  }
  &__img {
    margin: 88px 0 0 0;
    padding-left: 25%;
    img {
      width: 480px;
    }
  }
}
.infos {
  width: 36%;
  align-items: start;
  padding-left: 100px;
  margin-top: 13%;
  &__choice {
    margin: 0 0 10px 0;
    &__tabs {
      height: 40px;
      }
    }
  
  &__name {
    font-size: 6rem;
    height: 160px;
  }
  &__description {
    padding: 0;
    margin-bottom: 15px;
    text-align: left;
    height: 130px;
    max-width: 450px;
    font-size: 1.1rem;
  }
  &__details {
    height: 100%;
    &__line {
      width: 100%;
      margin-bottom: 40px;
    }
    &__data {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      width: 100%;
      &__dist {
        width: 100%;
      }
      &__travel {
        width: 100%;
      }
    }
  }
 }
}
</style>