<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import CandleCard from '../../components/CandleCard.vue'
import Footer from '@/components/Footer.vue'
import Button from '../../components/Button.vue'
import { fetchCandles } from '@/api/candle/candle'
import { ref, onMounted } from 'vue'

const candles = ref([])

onMounted(async () => {
  
  candles.value = await fetchCandles()
})

</script>

<template>
  <main id="collection">
    <Navbar id="navbar" ref="scrollContainer" :isScrolled="true" />
    <div id="collection-content">
      <div id="collection-header">
        <h3 id="h3-title">Collection</h3>
      </div>
      <!-- <Button
          class="btn"
          :text="'Me contacter'"
          :color="'green'"
          @click="testCreate({ _type: 'candle', title: 'Nouveau post' })"
        /> -->
      <div id="cards-container">
        <CandleCard
          v-for="candle in candles"
          :key="candle._id"
          :id="candle._id"
          :slug="candle.slug"
          class="card"
          :title="candle.name"
          :img="candle.imageUrl"
          :candleSizeWidth="candle.width"
          :candleSizeHeight="candle.height"
          :scentPrice="candle.scentPrice"
          :colorPrice="candle.colorPrice"
          :weight="candle.weight"
          :candlePrice="candle.candlePrice"
          :show-desc="true"
        />
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>


.btn {
    margin-top: 20px;
}

#collection {
  width: 100%;
  overflow: hidden;
}

#collection-content {
  height: 100%;
  margin-top: 80px;
  position: relative;
  z-index: 1;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px;
}
#collection-header {
  width: 90%;
}

#h3-title {
  color: var(--vt-c-dark-green);
}

#cards-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}

.card {
  padding: 10px;
}

@media (max-width: 1000px) {
  #candle-infos {
    width: 100%;
  }
  #collection-header {
    width: 100%;
  }
  #collection-content {
    padding: 50px 20px;
  }
  #basket-items-container {
    flex-direction: column;
  }
  #candle-desc {
    padding: 10px 0;
  }
  #collection-header {
    width: 80%;
  }
}
</style>
