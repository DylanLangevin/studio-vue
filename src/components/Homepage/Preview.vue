<script setup lang="ts">
import CandleCard from '../CandleCard.vue'

import candles from '../../api/candles.js'
import { onMounted } from 'vue'
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
        <div id="cards-container">
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
  min-width: 1200px;
  z-index: 2;
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
}
</style>
