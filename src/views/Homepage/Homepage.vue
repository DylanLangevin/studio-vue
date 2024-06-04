<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import Heroic from '../../components/Homepage/Heroic.vue'
import Preview from '../../components/Homepage/Preview.vue'
import Banner from '../../components/Homepage/Banner.vue'
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
  translateValue.value = -200 + scrollTop.value / 4
  translateValue1.value = -199 + scrollTop.value / 4
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
    <Navbar ref="scrollContainer" @scroll="handleScroll" :isScrolled="isScrolled" />
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
  height: 100vh;
  width: 100%;
}

#heroic-section {
  height: 100vh;
  position: relative;
  z-index: 1;
}

#preview-section {
  height: 566px;
}

#img-banner-test {
  margin-bottom: 300px;
}

#img-banner-test img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
}

#img-banner {
  z-index: 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  position: relative;
  top: -1250px;
}

#img-banner-2 {
  z-index: -2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  position: absolute;
  top: -1000px;
}

.banner-filter {
  position: relative;
  z-index: -1;
  height: 300px;
}

#homepage {
  overflow: hidden;
}

/* Mobile */
@media only screen and (max-width: 400px) {
  #img-banner {
    top: -300px;
  }
  #img-banner-2 {
    top: -400px;
    background-image: url('../../assets/img/7F94ABB3-3AAE-41E4-863E-102B0FF05D561111111.png');
  }
  .banner-filter {
    height: 120px;
  }
}
/* Mobile */
@media (min-width: 400px) and (max-width: 500px) {
  #img-banner {
    top: -400px;
  }
  #img-banner-2 {
    top: -420px;
  }
  .banner-filter {
    height: 180px;
  }
}
/* Mobile */
@media (min-width: 500px) and (max-width: 600px) {
  #img-banner {
    top: -480px;
  }
  #img-banner-2 {
    top: -420px;
  }
  .banner-filter {
    height: 180px;
  }
}
/* Mobile */
@media (min-width: 600px) and (max-width: 800px) {
  #img-banner {
    top: -550px;
  }
  #img-banner-2 {
    top: -480px;
  }
}

@media (min-width: 800px) and (max-width: 900px) {
  #img-banner {
    top: -700px;
  }
  #img-banner-2 {
    top: -500px;
  }
  .banner-filter {
    height: 200px;
  }
}
@media (min-width: 900px) and (max-width: 1024px) {
  #img-banner {
    top: -800px;
  }
  #img-banner-2 {
    top: -670px;
  }
  .banner-filter {
    height: 200px;
  }
}

@media (min-width: 1024px) {
  #img-banner {
    top: -950px;
  }
  #img-banner-2 {
    top: -700px;
  }
  .banner-filter {
    height: 200px;
  }
}

@media (min-width: 1024px) {
  #img-banner {
    top: -900px;
  }
  #img-banner-2 {
    top: -620px;
  }
}

@media (min-width: 1124px) {
  #img-banner {
    top: -900px;
  }
  #img-banner-2 {
    top: -680px;
  }
}

@media (min-width: 1224px) {
  #img-banner {
    top: -1050px;
  }
  #img-banner-2 {
    top: -850px;
  }
}

@media (min-width: 1424px) {
  #img-banner {
    top: -1180px;
  }
  #img-banner-2 {
    top: -950px;
  }
}

@media (min-width: 1524px) {
  #img-banner {
    top: -1220px;
  }
  #img-banner-2 {
    top: -900px;
  }
}
@media (min-width: 1624px) {
  #img-banner {
    top: -1380px;
  }
  #img-banner-2 {
    top: -950px;
  }
  .banner-filter {
    height: 400px;
  }
}
@media (min-width: 1824px) {
  #img-banner {
    top: -1480px;
  }
  #img-banner-2 {
    top: -1000px;
  }
}
</style>
