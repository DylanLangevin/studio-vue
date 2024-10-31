<script setup lang="ts">
import { computed, ref } from 'vue'

const descActive = ref(false)

export interface CandleCardProps {
  id: string
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
  candleId: number
}
export interface basketItem {
  id: string
  candleId: number
  scent: string
  color: string
  basicPrice: number
  price: number
}

const props = defineProps<CandleCardProps>()

const isMobile = computed(() => {
  return window.innerWidth < 768
})

import { useRouter } from 'vue-router'
const router = useRouter()

const image = props.img
const width = props.width
const height = props.height
const shouldShowDesc = props.showDesc ? true : false

const cardStyle = computed(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: width ? width : '281px',
  height: height ? height : '383px',
}))

const goToProduct = (id: number) => {

  router.push({ name: 'candle', params: { id:id } });
}

</script>

<template>
  <main>
    <div
      id="card"
      :style="cardStyle"
      @mouseover="descActive = true"
      @mouseleave="descActive = false"
      @click="goToProduct(props.candleId)"
    >

        <h3 id="card-title">{{ props.title }}</h3>
        
        <div
          v-if="shouldShowDesc"
          :class="{ 'is-visible': descActive || isMobile }"
          class="card-desc"
        >
          <h3 style="font-family: Open Sauce Sans; color: white;">
            {{ props.candlePrice }} €
          </h3>
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

#card:hover {

  cursor: pointer;
  transform: scale(1.07);
  transition-property: transform;
  transition-duration: 0.3s;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin:0 20px;
}

.is-visible {
  opacity: 1;
  transition: opacity 0.3s ease;
}

#card-title {
  color: white;
  text-align:center;
  
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

.product-added-alert {
  color: white;
  font-family: 'Open Sans Sauce';
}

@media only screen and (max-width: 800px) {
  .card-header {
    gap: 30px;
  }
}

@media only screen and (max-width: 700px) {
  #preview-section {
    justify-content: start;
    align-items: start;
  }

  #card {
    max-width: 187px;
    max-height: 255px;
  }
}



@media only screen and (max-width: 600px) {
  #preview-section {
    justify-content: start;
    align-items: start;
  }

  #card {
    max-width: 155px;
    max-height: 212px;
  }
}


@media only screen and (max-width: 500px) {
  #preview-section {
    justify-content: start;
    align-items: start;
  }

  #card {
    max-width: 129px;
    max-height: 176px;
  }
}
</style>
