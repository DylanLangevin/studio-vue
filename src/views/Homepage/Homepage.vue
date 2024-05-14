<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
import Preview from '../../components/Homepage/Preview.vue'
import Banner from '../../components/Homepage/Banner.vue'

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
    <Banner />
    <Preview />
    <Banner />
    <div id="img-transition"></div>
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

#img-transition {
  background-image: url('../../assets/img/569ACEB2-B0F7-4C66-9A63-420E80480929.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
}
</style>
