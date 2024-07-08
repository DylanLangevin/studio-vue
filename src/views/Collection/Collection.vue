<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import CandleCard from '../../components/CandleCard.vue'
import Footer from '@/components/Footer.vue'

import candles from '@/api/candles.js'
</script>

<template>
  <main id="collection">
    <Navbar ref="scrollContainer" :isScrolled="true" id="navbar" />
    <div id="collection-content">
      <div id="collection-header">
        <h3 id="h3-title">Collection</h3>
      </div>
      <div id="cards-container">
        <CandleCard
          class="card"
          :id="candles.id"
          :title="candle.name"
          :img="candle.img"
          :desc="candle.desc"
          v-for="candle in candles"
          v-bind:key="candle.id"
          :width="'281px'"
          :height="'353px'"
        />
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
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
  flex-direction: column;
  padding: 50px;
}

#h3-title {
  color: var(--vt-c-dark-green);
  margin-left: 100px;
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
</style>
