<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import CandleCard, { CandleCardProps } from '../CandleCard.vue'
import { fetchCandles } from '@/api/candle/candle'
import Button from '@/components/Button.vue'
import { useRouter } from 'vue-router'

const candles = ref([])

onMounted(async () => {
  
  candles.value = await fetchCandles()
})

const isMobile = computed(() => {
  return window.innerWidth < 768
})

const router = useRouter()
const containerRef = ref<HTMLElement | null>(null)
const leftPosition = ref(0)

const previewCandles = computed(() => {
  return candles.value
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
});

const redirectTo = (location: string) => {
  router.push(location)
}

const handleScroll = (event: WheelEvent) => {
  if (containerRef.value && window.innerWidth < 1220) {
    const scrollDistance = event.deltaY
    const currentScrollLeft = containerRef.value.scrollLeft
    containerRef.value.scrollLeft = currentScrollLeft + scrollDistance
    event.preventDefault()
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
          <router-link v-if="!isMobile" id="p-see-more" to="/collection"
            ><p>Voir tout</p></router-link
          >
        </div>
        <div v-if="previewCandles" id="cards-container" ref="containerRef" :style="{ left: leftPosition + 'px' }">
          <CandleCard
            v-for="candle in previewCandles"
            :key="candle._id"
            :id="candle._id"
            :slug="candle.slug"
            :title="candle.name"
            :img="candle.imageUrl"
            :candleSizeWidth="candle.width"
            :candleSizeHeight="candle.height"
            :scentPrice="candle.scentPrice"
            :colorPrice="candle.colorPrice"
            :weight="candle.weight"
            :desc="candle.desc"
            :candlePrice="candle.candlePrice"
            class="candle-card"
            :show-desc="true"
          />
        </div>
        <div v-if="isMobile" id="btn-wrapper">
          <Button
            class="btn"
            :text="'Voir tous mes produits'"
            :color="'green'"
            @click="redirectTo('/collection')"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#preview-section {
  height: 800px;
  width: 100vw;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
}

.candle-card {
  margin: 40px 10px;
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
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
}

/* Mobile */
@media only screen and (max-width: 600px) {
  #preview-heading {
    justify-content: center;
  }

  #preview-heading h3 {
    justify-content: space-around;
  }

  #cards-container::-webkit-scrollbar {
    height: 6px;
  }

  #cards-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
  #btn-wrapper {
    display: flex;
    justify-content: center;
  }
}

/* Tablettes */
@media (min-width: 600px) and (max-width: 1024px) {
  #preview-heading {
    justify-content: space-between;
  }
  #cards-container {
    padding: 0px 20px;
  }
  #preview-heading {
    padding: 0px 20px;
  }
}

/* Mobile et Tablettes */
@media (max-width: 1200px) {
  #cards-container {

    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    scrollbar-width: thin;
    overflow-x: hidden;
  }

  #preview-section {
    justify-content: start;
    align-items: start;
    height: fit-content;
    padding: 100px 0px;
  }

  #preview-content {
    min-width: 100vw;
    padding: 20px;
    justify-content: center;
  }
}
</style>
