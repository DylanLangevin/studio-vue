<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
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
    <div id="preview-section"></div>
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
  height: 100vh;
}
</style>
