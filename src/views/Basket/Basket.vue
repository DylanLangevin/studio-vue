<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CandleCard from '../../components/CandleCard.vue'
import Button from '@/components/Button.vue'
import basket from '@/api/basket.js'

const log = (info: String) => {
  console.log(info)
}

console.log(basket)
</script>

<template>
  <main id="basket">
    <Navbar ref="scrollContainer" :isScrolled="true" id="navbar" />
    <div id="basket-content">
      <div id="basket-header">
        <h3 id="h3-title">Votre panier</h3>
      </div>
      <div v-bind:key="candle.id" v-for="candle in basket" id="candle-infos">
        <div id="basket-items-container">
          <CandleCard
            class="card"
            :id="candle.id"
            :title="candle.name"
            :img="candle.img"
            :desc="candle.desc"
            :width="'150px'"
            :height="'188px'"
            :showDesc="false"
          />
          <div id="candle-desc">
            <p v-html="candle.desc"></p>
          </div>
        </div>
        <div>
          <Button @click="log('test')" class="btn" :text="'X'" :color="'green'" />
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
#basket {
  width: 100%;
  overflow: hidden;
}

#basket-content {
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

#basket-items-container {
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: end;
}

#candle-desc {
  padding: 0px 20px;
}

#candle-infos {
  min-width: 500px;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
}

.card {
  margin: 10px 0px;
}
</style>
