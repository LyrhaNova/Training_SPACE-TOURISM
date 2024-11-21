<script setup lang="ts">
import { ref, onMounted } from 'vue';
import data from '@/data/data.json';

interface Crew {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}

// Fonction pour convertir un nom en chemin valide
function formatNameToPath(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const crewMember = ref<Crew[]>(data.crew);
const selectedCrew = ref<Crew | null>(null);

onMounted(() => {
  const images = import.meta.glob('/src/assets/crew/*.{png,webp}', { eager: true }) as Record<string, { default: string }>;

  // Mapper les membres d'équipage avec leurs chemins d'images
  crewMember.value = crewMember.value.map(crew => {
    const formattedName = formatNameToPath(crew.name);
    return {
      ...crew,
      images: {
        png: images[`/src/assets/crew/image-${formattedName}.png`]?.default || '',
        webp: images[`/src/assets/crew/image-${formattedName}.webp`]?.default || '',
      },
    };
  });

  console.log('Crew members after mapping:', crewMember.value);

  // Définir le premier membre comme sélectionné par défaut
  selectedCrew.value = crewMember.value[0] || null;
});
</script>

<template>
  <main>
    <section class="crew">
      <div class="crew__infos">
        <h2 class="crew__infos__title">
          <span class="crew__infos__title-number">02</span>MEET YOUR CREW
        </h2>
        <h3 class="crew__infos__role">{{ selectedCrew?.role }}</h3>
        <h2 class="crew__infos__name">{{ selectedCrew?.name }}</h2>
        <p class="crew__infos__bio">{{ selectedCrew?.bio }}</p>
        <div class="crew__infos__choice">
          <button
            v-for="(crew, index) in crewMember"
            :key="index"
            @click="selectedCrew = crew"
            :class="{ active: selectedCrew?.name === crew.name }"
            aria-label="Select crew member {{ crew.name }}"
          ></button>
        </div>
      </div>
      <div class="crew__picture">
        <img v-if="selectedCrew" :src="selectedCrew.images.png" :alt="selectedCrew.name" />
      </div>
    </section>
  </main>
</template>
 
 <style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('@/assets/crew/background-crew-mobile.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: 'Barlow Condensed';
  color: var(--vt-c-white);
  font-size: 1rem;
  letter-spacing: 1px;
}

.crew {
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  &__infos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    letter-spacing: 2px;
    
    &__title {
      font-size: 1rem;
      margin-bottom: 50px;
    }
    &__title-number {
      margin-right: 20px;
      color: var(--vt-c-text-dark-2);
      font-weight: 400;
      font-size: 1rem;
    }
    &__role {
      font-family: 'Bellefair';
      font-size: 1.1rem;
      letter-spacing: 0px;
      color: var(--vt-c-text-dark-2);
    }
    &__name {
      font-family: 'Bellefair';
      font-size: 1.5rem;
      letter-spacing: 0px;
      margin-bottom: 25px;
    }
    &__bio {
      text-align: center;
      font-size: 0.9rem;
      padding: 0 15px;
      color: var(--vt-c-white-blue);
      height: 155px;
    }
    &__choice {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 18px;
      button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
      }
    }
  }
  &__picture {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(95% - 60vh);
    margin-bottom: 20px;
    overflow: hidden;

    img {
      position: absolute;
      bottom: 0;
      width: auto;
      height: 100%;
      object-fit: contain;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(transparent, rgb(11, 14, 23));
      z-index: 2;
      pointer-events: none;
    }
  }
 }

/* LARGE MOBILE */
@media (min-width: 500px) {
.crew {
  &__infos {    
    &__bio {
      height: 120px;
    }
  }
  &__picture {
    height: calc(100% - 60vh);
  }
 }
}

/* TABLET */
@media (min-width: 768px) {
  main {
  background-image: url('@/assets/crew/background-crew-tablet.jpg');
}

.crew {
  margin-top: 140px;
  &__infos {    
    &__title {
      width: 100%;
      padding-left: 50px;
      font-size: 1.25rem;
    }
    &__title-number {
      margin-right: 25px;
      font-size: 1.25rem;
    }
    &__role {
      font-size: 1.5rem;
    }
    &__name {
      font-size: 2.5rem;
    }
    &__bio {
      font-size: 1rem;
      padding: 0 110px;
      height: 130px;
    }
  }
  &__picture {
    height: calc(95% - 52vh);
    margin: 0;

    &::after {
      height: 15%;
    }
  }
 }
}
/* LARGE TABLET */
@media (min-width: 1024px) {
  .crew {
  &__infos {    
    &__bio {
      padding: 0 200px;
      height: 100px;
    }
  }
 }
}

/* DESKTOP */
@media (min-width: 1440px) {
  main {
  background-image: url('@/assets/crew/background-crew-desktop.jpg');
}

.crew {
  width: 100%;
  margin: 0;

  &__infos {
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  position: absolute;
  top: 20%;
  left: 12.5%;
  width: 39.5%;
  height: 80%;

  &__title {
    position: absolute;
    font-size: 1.75rem;
    letter-spacing: 4px;
    padding: 0;
    margin: 0;
  }
  &__title-number {
    margin-right: 20px;
    font-size: 1.75rem;
  }

  &__role,
  &__name,
  &__bio {
    position: relative;
  }

  &__role {
    font-size: 2rem;
    margin-top: 170px;
  }

  &__name {
    font-size: 3.5rem;
  }

  &__bio {
    text-align: left;
    font-size: 1.1rem;
    height: calc(100% - 200px);
    padding: 0;
  }

  &__choice {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 85%;
    left: 0;
    gap: 40px;
    button {
      width: 15px;
      height: 15px;
    }
  }
}

  &__picture {
    bottom: 0;
    left: 47%;
    width: 50%;
    height: calc(100% - 35vh);
    margin-bottom: 60px;

    &::after {
      height: 20%;
    }
  }
 }
}
</style>