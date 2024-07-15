<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CandleCard from '../../components/CandleCard.vue'
import { getBasket, getBasketCandlesInfos, removeItemFromBasket } from '@/utils/basket'
import { reactive, toRefs } from 'vue'

const state = reactive({
  basketIds: getBasket()
})

const { basketIds } = toRefs(state)

const removeCandle = (candleId: number) => {
  removeItemFromBasket(candleId)
  state.basketIds = getBasket()
}
</script>

<template>
  <main id="basket">
    <Navbar id="navbar" ref="scrollContainer" :isScrolled="true" />
    <div id="basket-section">
      <div id="basket-content">
        <div id="basket-header">
          <h3 id="h3-title">Votre panier</h3>
        </div>
        <div v-for="candle in getBasketCandlesInfos(basketIds)" id="candle-infos" :key="candle.id">
          <div id="basket-items-container">
            <CandleCard
              :id="candle.id"
              class="card"
              :title="candle.name"
              :img="candle.img"
              :desc="candle.desc"
              :width="'150px'"
              :height="'188px'"
              :show-desc="false"
              :weight="candle.weight"
            />
            <div id="candle-desc">
              <p>
                Taille en cm (sans la mèche) {{ candle.size.width }} x
                {{ candle.size.height }}
              </p>
              <p>{{ candle.weight }} grammes de cire de Soja</p>
              <p>+ {{ candle.scentPrice }}€ pour l'ajout d'un parfum</p>
              <p>+ {{ candle.colorPrice }}€ pour l'ajout d'une couleur</p>
            </div>
          </div>
          <div>
            <div class="btn" @click="removeCandle(candle.id)">X</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.btn {
  border-radius: 8px;
  background-color: var(--vt-c-dark-green);
  width: 30px;
  height: 30px;
  color: white;
  font-family: 'Open Sauce Sans';
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#basket {
  width: 100%;
  overflow: hidden;
}

#basket-header {
  width: 90%;
  margin-bottom: 20px;
}

#basket-section {
  width: 100%;
  padding: 100px;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
}

#basket-content {
  height: 100%;
  width: 100%;
  margin-top: 80px;
  position: relative;
  z-index: 1;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#h3-title {
  color: var(--vt-c-dark-green);
}

#basket-items-container {
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
}

#candle-desc {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#candle-infos {
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
}

.card {
  margin: 10px 0px;
}

@media (max-width: 800px) {
  #candle-infos {
    width: 100%;
  }
  #basket-header {
    width: 90%;
  }
  #basket-section {
    padding: 50px 20px;
  }
  #basket-items-container {
    flex-direction: column;
  }
  #candle-desc {
    padding: 10px 0;
  }
}
</style>
