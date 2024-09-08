<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CandleCard from '../../components/CandleCard.vue'
import Button from '@/components/Button.vue'
import {
  getBasket,
  getBasketIds,
  getBasketCandlesInfos,
  removeItemFromBasket,
  modifyBasketItem,
  getBasketItemById
} from '@/utils/basket'
import { computed, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import scents from '@/api/scents.js'
import colors from '@/api/colors.js'

const router = useRouter()

const state = reactive({
  basketIds: getBasketIds(),
  basket: getBasket()
})

const { basketIds } = toRefs(state)

const removeCandle = (candleId: number) => {
  removeItemFromBasket(candleId)
  state.basketIds = getBasketIds()
}

const redirectTo = (location: string) => {
  router.push(location)
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
              :width="'150px'"
              :height="'188px'"
              :show-desc="false"
              :weight="candle.weight"
              :candleSizeWidth="candle.size.width"
              :candleSizeHeight="candle.size.height"
              :scentPrice="candle.scentPrice"
              :colorPrice="candle.colorPrice"
              :candlePrice="candle.price"
            />
            <div id="candle-desc">
              <div>
                <p>Ajouter un parfum ? (+ {{ candle.scentPrice }}€)</p>
                <select
                  @change="(event) => modifyBasketItem(candle.id, 'scent', event.target.value)"
                >
                  <option v-for="scent in scents" :key="scent.id" :value="scent.name">
                    {{ scent.name }}
                  </option>
                </select>
              </div>
              <div>
                <p>Ajouter une couleur ? (+ {{ candle.colorPrice }}€)</p>
                <select
                  @change="(event) => modifyBasketItem(candle.id, 'color', event.target.value)"
                >
                  <option
                    v-for="color in colors"
                    :key="color.id"
                    :value="color.name"
                    @click="modifyBasketItem(candle.id, 'color', color.name)"
                  >
                    {{ color.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 10px 0;
            "
          >
            <div class="btn" @click="removeCandle(candle.id)">X</div>
            <p>{{ candle.price }}€</p>
          </div>
        </div>
        <div v-if="getBasketCandlesInfos(basketIds).length < 1" id="empty-basket">
          <p>Votre panier est vide !</p>
          <div id="empty-basket-button">
            <Button
              :text="'Voir mes produits'"
              :color="'green'"
              @click="redirectTo('/collection')"
            />
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
  min-height: 100vh;
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
  gap: 20px;
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

#empty-basket {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#empty-basket-button {
  margin-top: 20px;
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
