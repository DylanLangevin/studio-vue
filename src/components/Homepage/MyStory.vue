<script setup lang="ts">
import Button from '../Button.vue'
import { defineEmits, onMounted, onUnmounted, ref } from 'vue'

const emits = defineEmits(['scrollToSection'])

// const scrollToSection = (section: string) => {
//   emits('scrollToSection', section)
// }

function redirectTo() {
  window.open(import.meta.env.VITE_CONTACT_INSTAGRAM, '_blank')
}

const isScrolled = ref(false)
const scrollTop = ref(0)
let translateValue1 = ref(55)
let translateValue2 = ref(30)
const handleScroll = () => {
  scrollTop.value = document.documentElement.scrollTop
  isScrolled.value = scrollTop.value > 850
  translateValue1.value = -55 + scrollTop.value / 14
  translateValue2.value = -30 + scrollTop.value / 14
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main>
    <div id="my-story-section">
      <div id="my-story-content">
        <div id="imgs-wrapper">
          <div id="first-imgs-wrapper">
            <div id="first-img-wrapper">
              <img
                id="first-img"
                src="https://res.cloudinary.com/do3dud2ur/image/upload/v1729609693/IMG_0327_2_wbg0nd.png"
                alt=""
                class="img"
                :style="{ transform: `translateY(${translateValue1}px)` }"
              />
            </div>
            <div id="third-img-wrapper">
              <img
                id="third-img"
                src="https://res.cloudinary.com/do3dud2ur/image/upload/v1729609689/9CEE5C54-5045-44D8-B17C-813D073E50C6_wbxtw3.png"
                alt=""
                class="img"
                :style="{ transform: `translateY(${translateValue1}px)` }"
              />
            </div>
          </div>
          <div id="second-img-wrapper">
            <img
              id="second-img"
              src="https://res.cloudinary.com/do3dud2ur/image/upload/v1729609689/569ACEB2-B0F7-4C66-9A63-420E804809293_qgw4tx.png"
              alt=""
              class="img"
              :style="{ transform: `translateY(${translateValue2}px)` }"
            />
          </div>
        </div>
        <div id="text-wrapper">
          <h3>A propos</h3>
          <p>
            L'idée de capturer des parfums et de les transformer en lumière m'a toujours fascinée. Alors, un jour, j'ai décidé de fabriquer les miennes. Je me suis lancée, d'abord avec de simples ingrédients : cire, mèches, et des huiles essentielles que j'aimais. Chaque étape est un mélange de patience et de créativité. Je choisis chaque parfum en fonction de mon humeur, et le résultat est une pièce unique. Maintenant, je vends même mes bougies artisanales, chacune racontant une petite histoire de moi.
          </p>
          <div id="btn-wrapper">
            <Button
              class="btn"
              :text="'Me contacter'"
              :color="'green'"
              @click="redirectTo()"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#my-story-section {
  background-color: var(--vt-c-dark-yellow);
  height: 100vh;
  width: 100vw;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#my-story-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

#imgs-wrapper {
  display: flex;
  align-items: center;
}

#text-wrapper {
  width: 50%;
  height: 50%;
  padding-left: 100px;
}

#text-wrapper h3 {
  margin-bottom: 50px;
  color: var(--vt-c-dark-green);
}
#btn-wrapper {
  display: flex;
  margin-top: 30px;
}

.btn {
  margin-right: 20px;
}

#first-img {
  width: 290px;
  height: 290px;
  position: relative;
  top: -25%;
  left: 10%;
  z-index: 234;
}

#first-imgs-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
}

#first-img-wrapper {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
}
#second-img {
  width: 400px;
  height: 400px;
  position: relative;
  top: -30%;
  z-index: 234;
}

#second-img-wrapper {
  width: 260px;
  height: 348px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
}
#third-img {
  width: 310px;
  height: 310px;
  position: relative;
  top: -30%;
  z-index: 234;
}

#third-img-wrapper {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 20px;
  margin-right: 20px;
}

.img {
  border-radius: 16px;
}

#first-img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 20px;
  gap: 20px;
}

@media only screen and (max-width: 880px) {
  #my-story-section {
    padding: 100px 0;
    height: fit-content;
  }

  #my-story-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text-wrapper {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  #text-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #btn-wrapper {
    justify-content: center;
    gap: 20px;
  }

  .btn {
    margin: 20px 0 0 0;
  }

  #imgs-wrapper {
    display: none;
    align-items: center;
  }
}

@media (min-width: 600px) and (max-width: 900px) {
  #first-img {
    width: 179px;
    height: 179px;
    left: 0%;
    top: -25%;
  }

  #second-img {
    width: 187px;
    height: 250px;
  }
  #second-img-wrapper {
    width: 200px;
    margin-top: 60px;
  }

  #third-img {
    width: 200px;
    height: 250px;
  }
  #third-img-wrapper {
    width: 150px;
    height: 150px;
    margin-top: 0;
  }

  #first-img-wrapper {
    width: 200px;
  }
}

@media (min-width: 900px) and (max-width: 1200px) {
  #first-img {
    width: 179px;
    height: 179px;
    left: 0%;
    top: -25%;
  }

  #second-img {
    width: 187px;
    height: 250px;
  }
  #second-img-wrapper {
    width: 200px;
    margin-top: 60px;
  }

  #third-img {
    width: 200px;
    height: 250px;
  }
  #third-img-wrapper {
    width: 150px;
    height: 150px;
    margin-top: 0;
  }

  #first-img-wrapper {
    width: 200px;
  }
}

/* Tablettes */
@media (min-width: 600px) and (max-width: 1200px) {
  #text-wrapper {
    width: 100%;
    padding: 0px 20px;
  }
  #imgs-wrapper {
    padding: 0px 20px;
  }
  #my-story-content {
    justify-content: space-between;
  }
}

/* Mobile et Tablettes */
@media (max-width: 1200px) {
  #my-story-section {
    padding: 100px 0;
    height: fit-content;
  }

  #my-story-content {
    padding: 20px;
  }
}
</style>
