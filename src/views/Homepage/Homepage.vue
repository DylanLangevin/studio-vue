<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
import Preview from '../../components/Homepage/Preview.vue'
import Banner from '../../components/Homepage/Banner.vue'
import MyStory from '../../components/Homepage/MyStory.vue'
import Explanation from '../../components/Homepage/Explanation.vue'
import Footer from '../../components/Footer.vue'

import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop
  isScrolled.value = scrollTop > 850
}

const handleScrollToSection = (val: string) => {
  const targetSection = document.getElementById(val)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main id="homepage">
    <Navbar ref="scrollContainer" @scroll="handleScroll" :isScrolled="isScrolled" />
    <Heroic @scrollToSection="handleScrollToSection" id="heroic-section" />
    <!-- <Banner /> -->
    <Preview />
    <!-- <Banner /> -->
    <div id="img-banner"></div>
    <MyStory />
    <div id="img-banner-2"></div>
    <Explanation />
    <Footer />
  </main>
</template>

<style scoped>
#homepage {
  height: 100vh;
  width: 100%;
}

#heroic-section {
  height: 100vh;
  position: relative;
  z-index: -12;
}

#preview-section {
  height: 566px;
}

#img-banner,
#img-banner-2 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  width: 100vw;
}
#img-banner {
  background-image: url('../../assets/img/569ACEB2-B0F7-4C66-9A63-420E80480929.png');
}
#img-banner-2 {
  background-image: url('../../assets/img/7F94ABB3-3AAE-41E4-863E-102B0FF05D56.png');
}
/* Mobile */
@media only screen and (max-width: 600px) {
  #img-banner,
  #img-banner-2 {
    height: 180px;
  }
}
/* Tablettes */
@media (min-width: 600px) and (max-width: 1024px) {
}
</style>
