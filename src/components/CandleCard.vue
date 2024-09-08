<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue'
import { uuid } from 'vue-uuid'

import { getBasket, getBasketIds } from '@/utils/basket'

const descActive = ref(false)

export interface CandleCardProps {
  id: number
  title: string
  img: string
  candleSizeWidth: number
  candleSizeHeight: number
  scentPrice: number
  colorPrice: number
  weight: number
  showDesc: boolean
  candlePrice: number
  width?: string | null
  height?: string | null
}
export interface basketItem {
  id: string
  candleId: number
  scent: string
  color: string
  basicPrice: number
}

const props = defineProps<CandleCardProps>()

const state = reactive({
  basketIds: getBasketIds()
})

const { basketIds } = toRefs(state)

const isMobile = computed(() => {
  return window.innerWidth < 768
})

const image = props.img
const width = props.width
const height = props.height
const candleId = props.id
const shouldShowDesc = props.showDesc ? true : false

const cardStyle = computed(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: width ? width : '281px',
  height: height ? height : '383px',
}))

const isInBasket = computed(() => {
  return basketIds.value.includes(candleId)
})

const addToBasketObject = (candleId: number, candlePrice: number) => {
  let basket = getBasket()

  let candleItem: basketItem = {
    id: '',
    candleId: 0,
    scent: '',
    color: '',
    basicPrice: candlePrice
  }

  // TODO 1
  if (!basketIds.value.includes(candleId)) {
    candleItem['id'] = uuid.v1()
    candleItem['candleId'] = candleId
    candleItem['scent'] = ''
    candleItem['color'] = ''
    candleItem['basicPrice'] = candlePrice

    basket.push(candleItem)
    sessionStorage.setItem('basketIds', JSON.stringify(basket))
  }
  basketIds.value = getBasketIds()
}
</script>

<template>
  <main>
    <div
      id="card"
      :style="cardStyle"
      @mouseover="descActive = true"
      @mouseleave="descActive = false"
    >
      <div :class="{ 'card-header': (descActive || isMobile) && shouldShowDesc }">
        <h3 id="card-title">{{ props.title }}</h3>

        <span
          v-if="shouldShowDesc"
          class="icon"
          :class="{ 'is-visible': descActive || isMobile }"
          @click="addToBasketObject(props.id, props.candlePrice)"
        ></span>
      </div>

      <div v-if="shouldShowDesc && isInBasket" id="in-basket">
        <p>Déja dans votre panier !</p>
      </div>
      <div
        v-if="shouldShowDesc"
        :class="{ 'is-visible': descActive || isMobile }"
        class="card-desc"
      >
      <h3 style="font-family: Open Sauce Sans;color: white;">{{ props.candlePrice }} €</h3>
        <p>
          Taille en cm {{ props.candleSizeWidth }} x {{ props.candleSizeHeight }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
#card {
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 30px;
  position: relative;
  z-index: 20;
  overflow: visible;
  width: 281px;
  height: 353px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin:0 20px;
}

.icon {
  width: 30px;
  height: 30px;
  opacity: 0;
  background-image: url('../assets/img/icons8-ajouter-un-panier-30.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 5px;
  padding: 15px;
}

.icon:hover {
  cursor: pointer;
}

.is-visible {
  opacity: 1;
  transition: opacity 0.3s ease;
}

#card-title {
  color: white;
  text-align:center
}

.card-desc {
  width: 100%;
  z-index: 2;
  padding: 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-desc.is-visible {
  opacity: 1;
}
.card-desc p {
  font-size: 0.8rem;
  color: white;
}

#in-basket {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
#in-basket p {
  color: white;
}

@media only screen and (max-width: 600px) {
  #preview-section {
    justify-content: start;
    align-items: start;
  }
}
@media only screen and (max-width: 800px) {
  .card-header {
    gap: 30px;
  }
}
</style>
