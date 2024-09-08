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
    :class="[{ 'position-fixed': props.isScrolled, 'position-absolute': !props.isScrolled }]"
  >
    <div id="navlink-section" class="flex-center">
      <router-link  class="navlinks" to="/"><h3>STUDIO BOUGIE</h3></router-link>
      <div id="navlink-section-right">
        <router-link class="navlinks" to="/"><p>Accueil</p></router-link>
        <router-link class="navlinks" to="/collection"><p>Collection</p></router-link>
        <router-link class="navlinks" to="/basket"
          ><div
            :class="[{ 'basket-icon': props.isScrolled, 'basket-icon-fixed': !props.isScrolled }]"
          ></div
        ></router-link>
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
  width: 100vw;
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

.position-absolute {
  color: white;
  position: absolute;
}

#mobile-icon {
  width: 60px;
  height: 60px;
  border-radius: 100px;
}

.bcg-yellow {
  background-color: var(--vt-c-dark-yellow);
}

.bcg-green {
  background-color: var(--vt-c-dark-green);
}

#logo-icon {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  background-image: url('../assets/img/logo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1000;
}
.basket-icon {
  background-image: url('../assets/img/icons8-panier-1-96.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.basket-icon-fixed {
  background-image: url('../assets/img/icons8-panier-2-96.png');
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Mobile */
@media only screen and (max-width: 600px) {
  #navlink-section {
    margin: 0 20px;
  }

  #navbar {
    height: 80px;
    z-index: 300;
    transition: all 0.3s ease;
  }

  #navlink-section-right {
    display: flex;
    gap: 10px;
  }
}

</style>
