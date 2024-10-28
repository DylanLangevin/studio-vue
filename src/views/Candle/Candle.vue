<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import CandleCard from '../../components/CandleCard.vue'
import Footer from '@/components/Footer.vue'
import Button from '../../components/Button.vue'
import {  ref, computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'

import candles from '@/api/candles.js'
const route = useRoute()
const router = useRouter()

const candleId = computed(() => {

    return route.params.id;
})

const candle = computed(() => {

    return candles.find(element => element.candleId === parseInt(candleId.value));
});

function redirectToInsta() {
  window.open(import.meta.env.VITE_CONTACT_INSTAGRAM, '_blank')
}

function redirectToHomepage() {
  router.push({ name: 'collection'});
}

const image = candle.value.img

const cardStyle = computed(() => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minWidth: '281px',
  minHeight: '383px',
  paddingTop: '30px',
  borderRadius: '16px'
}))

</script>

<template>
  <main id="candle">
    <Navbar id="navbar" ref="scrollContainer" :isScrolled="true" />
    <div id="candle-content">
      <div id="candle-description-container">
        <div id="candle-description">
          <div id="candle-img" :style="cardStyle">
            <h3 id="candle-title">{{ candle.name }}</h3>
            <div
              class="card-desc"
            >
              <h3 style="font-family: Open Sauce Sans; color: white;">
                {{ candle.price }} €
              </h3>
              <p style="color:white">
                Taille en cm {{ candle.size.width }} x {{ candle.size.height }}
              </p>
            </div>
          </div>
          <div id="candle-description-text-btns">
            <p id="candle-description-text">
              <span>
                {{candle.desc}}
              </span> <br><br>
              <p>Contactez moi sur instagram pour me commander une {{ candle.name  }} ! </p>
            </p>
            <div id="candle-button-container">
  
              <Button
                class="btn"
                :text="'Me contacter'"
                :color="'green'"
                @click="redirectToInsta()"
              />
            </div>
          </div>
        </div>
      </div> 
    </div>  
    <Footer />
  </main>
</template>

<style scoped>
#card {
  border-radius: 16px;
}

#candle {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

#candle-img {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

#candle-title {
  color: white;
  text-align:center;
}

#candle-description {
  display: flex;
}

.card-desc {
  width: 100%;
  z-index: 2;
  padding: 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  transition: opacity 0.3s ease;
}

#candle-description-container {
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#candle-description-text-btns {
  width: 90%;
  margin: 10px 20px;
}


#candle-button-container {

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.card {
    padding: 10px;
}

.btn {
    margin-top: 20px;
}

@media (max-width:890px) {

  #candle-header {
    width: 100%;
  }
  #candle-content {
    padding: 50px 20px;
  }

  #candle-desc {
    padding: 10px 0;
  }
}
@media (max-width:680px) {

  #candle-header {
    width: 100%;
  }
  #candle-content {
    flex-direction: column-reverse;
    align-items: center;
  }

  #card {
    border-radius: 16px;
    width: 153px;
    height: 255px;
  }

  #candle-desc {
    padding: 10px 0;
  }

  #candle-description {
    flex-direction: column;
    align-items: center;
  }

  #candle-img {
    margin-bottom: 20px;
    width: 337px;
    height: 459px;
  }

  #candle-button-container {

    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

</style>
