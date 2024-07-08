<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { computed, ref } from 'vue'

const descActive = ref(false)

export interface CandleCardProps {
  id: number
  title: String
  img: String
  desc: String
  width: String
  height: String
}
const props = defineProps<CandleCardProps>()

const image = props.img
const width = props.width
const height = props.height

const cardStyle = computed(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: width,
  height: height
}))
</script>

<template>
  <main>
    <div
      @mouseover="descActive = true"
      @mouseleave="descActive = false"
      :style="cardStyle"
      id="card"
    >
      <div :class="{ 'card-header': descActive }">
        <h2 id="card-title">{{ props.title.toLocaleUpperCase() }}</h2>
        <span class="icon" :class="{ 'is-visible': descActive }"></span>
      </div>

      <div :class="{ 'is-visible': descActive }" class="card-desc">
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
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.icon {
  width: 30px;
  height: 30px;
  background-color: aliceblue;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.is-visible {
  opacity: 1;
  transition: opacity 0.3s ease;
}

#card:hover {
  cursor: pointer;
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
  #card {
    width: 193px;
    height: 243px;
  }
}
</style>
