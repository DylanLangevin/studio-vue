<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop
  isScrolled.value = scrollTop > 850
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
    <Heroic />
  </main>
</template>

<style scoped>
#homepage {
  height: 2000px;
  width: 100%;
}
</style>
