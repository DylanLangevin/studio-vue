<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import CandleCard from '../../components/CandleCard.vue'
import Footer from '@/components/Footer.vue'
import Button from '../../components/Button.vue'
import {  ref, computed } from 'vue'

import candles from '@/api/candles.js'

import { useRoute } from 'vue-router'
const route = useRoute()

const candleId = computed(() => {

    return route.params.id;
})

const candle = computed(() => {

    return candles.find(element => element.candleId === parseInt(candleId.value));
});

</script>

<template>
  <main id="candle">
    <Navbar id="navbar" ref="scrollContainer" :isScrolled="true" />
    <div id="cards-container">
    </div>
    <div id="candle-content">
           <CandleCard
       
             :candleId="candle.candleId"
             :key="candle.candleId"
             class="card"
             :title="candle.name"
             :img="candle.img"
             :candleSizeWidth="candle.size.width"
             :candleSizeHeight="candle.size.height"
             :scentPrice="candle.scentPrice"
             :colorPrice="candle.colorPrice"
             :weight="candle.weight"
             :candlePrice="candle.price"
             :show-desc="true"
           />
           
            <div id="candle-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptatum quaerat placeat officiis illum dolorum delectus adipisci voluptatem non in, nihil cum, maxime ad quis. Quam dignissimos debitis modi officiis.
                Nam eos illo architecto labore, quod officia ipsam perferendis dicta aspernatur maxime pariatur id vel. Debitis, nisi impedit voluptate excepturi odio ipsum quae enim, eveniet quidem blanditiis placeat, nihil quas?
                Fugit illo sed animi unde ea. Iure non molestiae cupiditate maxime, repellat deserunt laborum soluta architecto repudiandae explicabo numquam ab iusto error pariatur! Facere, hic neque. Odio modi quos nam..</p>
                <Button
                  class="btn"
                  :text="'Me contacter'"
                  :color="'green'"
                />
                
            </div>

            
       </div> 
    <Footer />
  </main>
</template>

<style scoped>
#candle {
  width: 100%;
  overflow: hidden;
}

#candle-content {
  height: 100%;
  margin-top: 80px;
  position: relative;
  z-index: 1;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  flex-direction: row;
  padding: 100px;
}
#candle-header {
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
#candle-description {
    margin: 10px 20px;
}

.card {
    padding: 10px;
}

.btn {
    margin-top: 20px;
}

@media (max-width: 1000px) {
  #candle-infos {
    width: 100%;
  }
  #candle-header {
    width: 100%;
  }
  #candle-content {
    padding: 50px 20px;
  }
  #basket-items-container {
    flex-direction: column;
  }
  #candle-desc {
    padding: 10px 0;
  }
  #candle-header {
    width: 80%;
  }
}
</style>
