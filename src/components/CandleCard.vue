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
      :class="{ 'background-darker': descActive }"
      @mouseover="descActive = true"
      @mouseleave="descActive = false"
      :style="cardStyle"
      id="card"
    >
      <h2 id="card-title">{{ props.title.toLocaleUpperCase() }}</h2>

      <div v-if="descActive" id="card-desc">
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
  transition: 0.1s ease-in;
  position: relative;
  z-index: 20;
  overflow: visible;
}

#card:hover {
  cursor: pointer;
}

#card-title {
  color: white;
}

#card-desc {
  width: 100%;
  z-index: 2;
  padding: 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  transition-delay: 1s;
  transition-property: width;
}

#card-desc p {
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
