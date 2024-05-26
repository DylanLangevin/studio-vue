<script setup lang="ts">
import { computed } from 'vue'
interface NavbarProps {
  isScrolled: boolean
}
const props = defineProps<NavbarProps>()

const isMobile = computed(() => {
  return window.innerWidth < 768
})
</script>

<template>
  <main
    id="navbar"
    class="flex-center"
    :class="[{ 'position-fixed': props.isScrolled, 'position-absolute': !props.isScrolled }]"
  >
    <div id="navlink-section" class="flex-center">
      <router-link v-if="isMobile" class="navlinks" to="/"><div id="logo-icon"></div></router-link>
      <router-link v-else class="navlinks" to="/"><h3>STUDIO BOUGIE</h3></router-link>
      <!-- <div v-if="isMobile" id="navlink-section-right">
        <div id="mobile-icon"></div>
      </div> -->
      <div id="navlink-section-right">
        <router-link class="navlinks" to="/collection"><p>Collection</p></router-link>
        <router-link class="navlinks" to="/contact"><p>Contact</p></router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navlink-section-right {
  display: flex;
  gap: 30px;
}

#navbar {
  height: 80px;
  width: 100%;
  z-index: 3000;
  transition: all 0.3s ease-in-out;
}

#navlink-section {
  width: 100%;
  margin: 0 60px;
}

.navlinks {
  text-decoration: none;
  font-family: 'Tan Nimbus';
  color: inherit;
}

.navlinks p {
  font-family: 'Tan Nimbus';
}

.position-fixed {
  position: fixed;
  background-color: var(--vt-c-dark-yellow);
  color: var(--vt-c-dark-green);
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.1);
  z-index: 12;
}

.position-fixed #logo-icon,
.position-fixed #mobile-icon {
  background-color: var(--vt-c-dark-green);
}

.position-absolute {
  color: white;
  position: absolute;
}

#mobile-icon {
  width: 30px;
  height: 30px;
  background-color: white;
}

#logo-icon {
  width: 50px;
  height: 50px;
  border-radius: 300px;
  background-color: white;
}

/* .navbar-hidden {
  top: -80px;
  transition: top 0.3s ease;
} */

/* Mobile */
@media only screen and (max-width: 600px) {
  #navlink-section {
    margin: 0 20px;
  }

  #navbar {
    height: 52px;
    z-index: 300;
    transition: all 0.3s ease;
  }

  #navlink-section-right {
    display: flex;
    gap: 10px;
  }
}

/* Tablettes */
@media (min-width: 600px) and (max-width: 1024px) {
}
</style>
