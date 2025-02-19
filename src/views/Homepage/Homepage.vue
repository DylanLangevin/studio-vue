<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Heroic from '@/components/Homepage/Heroic.vue'
import Preview from '@/components/Homepage/Preview.vue'
import MyStory from '@/components/Homepage/MyStory.vue'
import Explanation from '@/components/Homepage/Explanation.vue'
import Footer from '@/components/Footer.vue'

import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const scrollTop = ref(0)

let translateValueImg1 = ref(200)
let translateValueImg2 = ref(199)

const handleScroll = () => {
  scrollTop.value = document.documentElement.scrollTop
  isScrolled.value = scrollTop.value > 850
  translateValueImg1.value = -200 + scrollTop.value / 5
  translateValueImg2.value = -199 + scrollTop.value / 5
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
    <Heroic id="heroic-section" @scroll-to-section="handleScrollToSection" />

    <Preview />

    <div class="banner-filter">
      <img
        id="img-banner"
        src="https://res.cloudinary.com/do3dud2ur/image/upload/v1729609689/569ACEB2-B0F7-4C66-9A63-420E804809293_qgw4tx.png"
        alt=""
        :style="{ transform: `translateY(${translateValueImg1}px)` }"
      />
    </div>

    <MyStory />
    <div class="banner-filter">
      <img
        id="img-banner-2"
        src="https://res.cloudinary.com/do3dud2ur/image/upload/v1729609688/7F94ABB3-3AAE-41E4-863E-102B0FF05D56_jqd6g2.png"
        alt=""
        :style="{ transform: `translateY(${translateValueImg2}px)` }"
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
  height: 600px;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: -350px;
}

#img-banner-2 {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: -400px;
}

.banner-filter {
  position: relative;
  z-index: -1;
  height: 300px;
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
