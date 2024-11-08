<template>
   <nav class="navbar">
      
     <div class="navbar__icon">
       <!-- Menu icon stays visible, but will be hidden under the sliding menu -->
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
       <div
         class="navbar__icon__menu"
         @click="toggleMenu"
       >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
           <g fill="#D0D6F9" fill-rule="evenodd">
             <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
           </g>
         </svg>
       </div>
     </div>
     <!-- Menu list with animation -->
     <div class="navbar__list-wrapper" :class="{ 'navbar__list-wrapper--open': isMenuOpen }">
       <ul class="navbar__list">
         <!-- Close icon now follows the list -->
         <div class="navbar__icon__close-wrapper">
           <!-- Close icon shown when menu is open -->
           <div class="navbar__icon__close" @click="toggleMenu">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
               <g fill="#D0D6F9" fill-rule="evenodd">
                 <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
                 <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
               </g>
             </svg>
           </div>
         </div>
            <li class="navbar__list__item"><span class="navbar__list__item-number">00</span>HOME</li>
            <li class="navbar__list__item"><span class="navbar__list__item-number">01</span>DESTINATION</li>
            <li class="navbar__list__item"><span class="navbar__list__item-number">02</span>CREW</li>
            <li class="navbar__list__item"><span class="navbar__list__item-number">03</span>TECHNOLOGY</li>
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
    width: 65%;
    height: 100vh;
    z-index: 10;
    transition: right 1.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    
    &--open {
      right: 0;
    }

    .navbar__list {
      list-style: none;
      height: 100%;
      background-color: grey;
      padding: 100px 0 0 30px;
      &__item-number {
      font-weight: bold;
      margin-right: 10px;
    }
    &__item {
      margin-top: 18px;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 16px;
      letter-spacing: 2px;
    }

    }



    .navbar__icon__close-wrapper {
      position: absolute;
      top: 25px;
      right: 35px;
      z-index: 15;
    }

    .navbar__icon__close {
      cursor: pointer;
      color: white;
    }
  }
}
</style>


 
 
 
 
 
 
 
 
 




 


 <!-- <template>
   <nav class="navbar">
     <div class="navbar__icon">
       <div class="navbar__icon__logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
           <g fill="none" fill-rule="evenodd">
             <circle cx="24" cy="24" r="24" fill="#FFF" />
             <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
           </g>
         </svg>
       </div>
       <div class="navbar__icon__menu" @click="toggleMenu" v-if="!isMenuOpen">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
           <g fill="#D0D6F9" fill-rule="evenodd">
             <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
           </g>
         </svg>
       </div>
       <div class="navbar__icon__close" @click="toggleMenu" v-if="isMenuOpen">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
           <g fill="#D0D6F9" fill-rule="evenodd">
             <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
             <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
           </g>
         </svg>
       </div>
     </div>
      Utilisation de v-if pour la gestion du DOM et des transitions
     <ul v-if="isMenuOpen" class="navbar__list" :class="{ 'navbar__list--open': isMenuOpen }">
       <li class="navbar__list__item">
         <router-link to="/" aria-label="Home">HOME</router-link>
       </li>
       <li class="navbar__list__item">
         <router-link to="/destination" aria-label="Destination">DESTINATION</router-link>
       </li>
       <li class="navbar__list__item">
         <router-link to="/crew" aria-label="Crew">CREW</router-link>
       </li>
       <li class="navbar__list__item">
         <router-link to="/technology" aria-label="Technology">TECHNOLOGY</router-link>
       </li>
     </ul>
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
   &__icon {
     display: flex;
     align-items: center;
     justify-content: space-between;
 
     &__logo {}
 
     &__menu,
     &__close {
       cursor: pointer;
       display: block;
     }
 
     &__close {
       z-index: 6;
     }
   }
 
   &__list {
     position: fixed;
     top: 0;
     left: 100%; /* Par défaut, la div est complètement à droite */
     list-style: none;
     justify-content: flex-end;
     height: 100vh;
     width: 100%;
     background-color: grey;
     z-index: 5;
     padding: 75px 0 0 35px;
     transition: transform 0.5s ease-in-out; /* Transition sur transform */
 
     /* Transition vers la gauche quand le menu est ouvert */
     &--open {
       transform: translateX(-100%); /* Déplacement à gauche */
     }
 
     &__item {
       margin-top: 25px;
 
       a {
         color: white;
         text-decoration: none;
         transition: color 0.3s;
 
         &:hover {
           color: #ff6f61;
         }
       }
     }
   }
 
   &__icon__close {
     display: block;
     z-index: 6;
   }
 
   &__icon__menu {
     display: block;
   }
 }
 </style> -->