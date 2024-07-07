<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
import Preview from '../../components/Homepage/Preview.vue'
// import Banner from '../../components/Homepage/Banner.vue'
import MyStory from '../../components/Homepage/MyStory.vue'
import Explanation from '../../components/Homepage/Explanation.vue'
import Footer from '../../components/Footer.vue'
// import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const scrollTop = ref(0)
let translateValue = ref(200)
let translateValue1 = ref(199)
const handleScroll = () => {
  scrollTop.value = document.documentElement.scrollTop
  isScrolled.value = scrollTop.value > 850
  translateValue.value = -200 + scrollTop.value / 5
  translateValue1.value = -199 + scrollTop.value / 5
  console.log(scrollTop.value, translateValue)
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
    <Navbar ref="scrollContainer" :isScrolled="isScrolled" />
    <Heroic @scrollToSection="handleScrollToSection" id="heroic-section" />

    <Preview />

    <div class="banner-filter">
      <img
        id="img-banner"
        src="../../assets/img/569ACEB2-B0F7-4C66-9A63-420E804809293.png"
        alt=""
        :style="{ transform: `translateY(${translateValue}px)` }"
      />
    </div>

    <MyStory />
    <div class="banner-filter">
      <img
        id="img-banner-2"
        src="../../assets/img/7F94ABB3-3AAE-41E4-863E-102B0FF05D56.png"
        alt=""
        :style="{ transform: `translateY(${translateValue1}px)` }"
      />
    </div>
    <Explanation />
    <Footer />
  </main>
</template>

<style scoped>
#homepage {
  width: 100%;
  overflow: hidden;
}

#heroic-section {
  height: 100vh;
  position: relative;
  z-index: 1;
}

#preview-section {
  height: 566px;
}

#img-banner {
  width: 100%;
  height: 600px; /* Hauteur souhaitée */
  object-fit: cover; /* Couvre l'espace sans changer la résolution */
  object-position: center; /* Centre l'image en haut */
  position: absolute;
  top: -350px;
}

#img-banner-2 {
  width: 100%;
  height: 600px; /* Hauteur souhaitée */
  object-fit: cover; /* Couvre l'espace sans changer la résolution */
  object-position: center; /* Centre l'image en haut */
  position: absolute;
  top: -400px;
}

.banner-filter {
  position: relative;
  z-index: -1;
  height: 300px; /* Hauteur souhaitée */
  background-color: var(--vt-c-dark-yellow);
}

@media (max-width: 800px) {
  #img-banner {
    top: -280px;
  }
  .banner-filter {
    height: 180px;
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  #img-banner {
    top: -300px;
  }
  #img-banner-2 {
    top: -400px;
  }
}
</style>
