<script setup lang="ts">
import Button from '../Button.vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['scrollToSection'])

const scrollToSection = (section: string) => {
  emits('scrollToSection', section)
}
</script>

<template>
  <main>
    <div id="img-background" class="filter">
      <div id="heroic-content">
        <span></span>
        <h1 id="h1-title">BOUGIES <br />ARTISANALES</h1>
        <Button
          @click="scrollToSection('preview-section')"
          class="btn"
          :text="'Découvrir mes bougies'"
          :color="'white'"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
#img-background {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('@/assets/img/858BFC24-970F-4BB3-8A3F-F1872AB87898.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

#h1-title {
  color: white;
  position: relative;
  text-align: center;
  z-index: 10;
}

#heroic-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
}

#heroic-text {
  color: white;
  max-width: 70%;
  text-align: center;
}
/* 
@media only screen and (max-width: 600px) {
  #h1-title {
    color: brown;
  }
} */
</style>
