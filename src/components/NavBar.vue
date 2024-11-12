<template>
  <nav class="navbar">
    <div class="navbar__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
        </g>
      </svg>
      <div class="navbar__icon__menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
    </div>
    <div class="navbar__list-wrapper" :class="{ 'navbar__list-wrapper--open': isMenuOpen }">
      <ul class="navbar__list">
        <div class="navbar__icon__close-wrapper">
          <div class="navbar__icon__close" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
        </div>
        <li class="navbar__list__item">
          <router-link to="/">
            <span class="navbar__list__item-number">00</span>HOME
          </router-link>
        </li>
        <li class="navbar__list__item">
          <router-link to="/destination">
            <span class="navbar__list__item-number">01</span>DESTINATION
          </router-link>
        </li>
        <li class="navbar__list__item">
          <router-link to="/crew">
            <span class="navbar__list__item-number">02</span>CREW
          </router-link>
        </li>
        <li class="navbar__list__item">
          <router-link to="/technology">
            <span class="navbar__list__item-number">03</span>TECHNOLOGY
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
 import { defineComponent, ref } from 'vue';
 
 export default defineComponent({
   name: 'NavBar',
   setup() {
     const isMenuOpen = ref(false);
 
     const toggleMenu = () => {
       isMenuOpen.value = !isMenuOpen.value;
     };
 
     return {
       isMenuOpen,
       toggleMenu,
     };
   },
 });
</script>

<style scoped lang="scss">
.navbar {
  padding: 25px 22px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 5;
    font-family: 'Cantarell';

    &__menu {
      cursor: pointer;
      font-size: 1.5rem;
      z-index: 5;
    }
  }

  &__list-wrapper {
    position: fixed;
    top: 0;
    right: -100%;
    width: 67%;
    height: 100vh;
    z-index: 10;
    transition: right 1.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    backdrop-filter: blur(35px);
    
    &--open {
      right: 0;
    }

    .navbar__list {
      list-style: none;
      height: 100%;
      padding: 122px 0 0 30px;
      color: var(--vt-c-white);

      &__item-number {
        font-weight: bold;
        margin-right: 10px;
        text-decoration: none;
      }

      &__item {
        margin-top: 24px;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px;
        letter-spacing: 2px;

        a {
          color: var(--vt-c-white);
          text-decoration: none;
        }
      }
    }

    .navbar__icon__close-wrapper {
      position: absolute;
      top: 30px;
      right: 29px;
      z-index: 15;
    }

    .navbar__icon__close {
      cursor: pointer;
      color: var(--vt-c-white);
    }
  }
}

/* TABLET */
@media (min-width: 768px) {
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    &__icon {
      display: flex;
      align-items: center;
      z-index: 5;
      padding-left: 30px;

      &__menu {
        display: none;
      }
    }

    &__list-wrapper {
      position: static;
      width: 85%;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: center;
      padding: 0;
      transition: none;
      backdrop-filter: blur(35px);

      .navbar__list {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
        gap: 7%;
        padding: 0 35px 0 0;

        &__item {
          margin: 0;
          height: 100px;
          display: flex;
          align-items: center;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: white;
            text-decoration: none;
            position: relative;
            transition: color 0.3s;

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: var(--vt-c-white-blue);
              opacity: 0;
              transition: opacity 0.8s ease;
            }

            &:hover::after {
              opacity: 1;
            }
          }

          }
        }
      .navbar__icon__close-wrapper {
        display: none;
      }
    }
  }
}


</style>

