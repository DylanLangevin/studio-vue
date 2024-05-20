<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CandleCard from '../CandleCard.vue'

import candles from '../../api/candles.js'

const containerRef = ref<HTMLElement | null>(null)
const leftPosition = ref(0)

const handleScroll = (event: WheelEvent) => {
  if (containerRef.value) {
    const scrollDistance = event.deltaY // distance de défilement de la molette de la souris
    const currentScrollLeft = containerRef.value.scrollLeft
    containerRef.value.scrollLeft = currentScrollLeft + scrollDistance
    event.preventDefault() // Empêche le défilement de la page entière
  }
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('wheel', handleScroll)
  }
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('wheel', handleScroll)
  }
})
</script>

<template>
  <main>
    <span id="bcg-green"></span>
    <div id="preview-section">
      <div id="preview-content">
        <div id="preview-heading">
          <h3 id="h3-title">Petit aperçu de mes produits</h3>
          <router-link id="p-see-more" to="/collection"><p>Voir tout</p></router-link>
        </div>
        <div id="cards-container" ref="containerRef" :style="{ left: leftPosition + 'px' }">
          <CandleCard
            :title="candle.name"
            :img="candle.img"
            :desc="candle.desc"
            v-for="candle in candles"
            v-bind:key="candle.id"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* #bcg-green {
  width: 25%;
  height: 566px;
  position: absolute;
  right: 0;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: var(--vt-c-dark-green);
} */

#preview-section {
  height: 800px;
  width: 100%;
  background-color: var(--vt-c-dark-yellow);

  display: flex;
  justify-content: center;
  align-items: center;
}

#preview-content {
  min-width: fit-content;
  z-index: 2;
  position: relative;
}

#preview-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

#h3-title,
#p-see-more {
  color: var(--vt-c-dark-green);
}

#p-see-more {
  cursor: pointer;
}

#p-see-more:hover {
  text-decoration: underline;
}

#cards-container {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

@media only screen and (max-width: 960px) {
  #preview-section {
    justify-content: start;
    align-items: start;
    height: fit-content;
    padding: 70px 0px;
  }

  #preview-content {
    min-width: 100vw;
    padding: 20px;
  }

  #preview-heading h3 {
    justify-content: space-around;
  }

  #preview-heading h3 {
    width: 70%;
  }

  #cards-container {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: thin;
  }

  #cards-container::-webkit-scrollbar {
    height: 6px;
  }

  #cards-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
}
</style>
