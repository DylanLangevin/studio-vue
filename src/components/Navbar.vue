<script setup lang="ts">
interface NavbarProps {
  isScrolled: boolean
}
const props = defineProps<NavbarProps>()
</script>

<template>
  <main
    id="navbar"
    class="flex-center"
    :class="{ 'position-fixed': props.isScrolled, 'position-absolute': !props.isScrolled }"
  >
    <div id="navlink-section" class="flex-center">
      <router-link class="navlinks" to="/"><h3>STUDIO BOUGIE</h3></router-link>
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
  z-index: 3;
  transition: all 0.3s ease;
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

.position-absolute {
  color: white;
  position: fixed;
}
</style>
