<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { computed, ref } from 'vue'

const descActive = ref(false)

export interface CandleCardProps {
  id: number
  title: String
  img: String
  desc: String
  width: String | null
  height: String | null
  showDesc: Boolean
}
const props = defineProps<CandleCardProps>()

const isMobile = computed(() => {
  return window.innerWidth < 768
})

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
  height: height ? height : '353px'
}))

const addToBasket = (candleId: number) => {
  console.log(candleId)
}
</script>

<template>
  <main>
    <div
      @mouseover="descActive = true"
      @mouseleave="descActive = false"
      :style="cardStyle"
      id="card"
    >
      <div :class="{ 'card-header': (descActive || isMobile) && shouldShowDesc }">
        <h2 id="card-title">{{ props.title.toLocaleUpperCase() }}</h2>
        <span
          v-if="shouldShowDesc"
          @click="addToBasket(props.id)"
          class="icon"
          :class="{ 'is-visible': descActive || isMobile }"
        ></span>
      </div>

      <div
        v-if="shouldShowDesc"
        :class="{ 'is-visible': descActive || isMobile }"
        class="card-desc"
      >
        <p v-html="props.desc"></p>
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
}

.icon {
  width: 30px;
  height: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-image: url('../assets/img/icons8-ajouter-un-panier-30.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 5px;
}

.icon:hover {
  cursor: pointer;
  padding: 10px;
}

.is-visible {
  opacity: 1;
  transition: opacity 0.3s ease;
}

#card-title {
  color: white;
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
