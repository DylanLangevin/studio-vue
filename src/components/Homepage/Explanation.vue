<script setup lang="ts">
import Button from '@/components/Button.vue'

function redirectTo() {
  window.open(import.meta.env.VITE_CONTACT_INSTAGRAM, '_blank')
}
</script>

<template>
  <main>
    <div id="explanation-section">
      <div id="explanation-content">
        <h3>Commander une bougie c'est très simple !</h3>
        <div id="icons-wrapper">
          <div class="icon-wrapper">
            <div id="candle-icon" class="icon"></div>
            <p class="icon-text">Choisissez votre bougie</p>
          </div>
          <div class="icon-wrapper">
            <div id="color-icon" class="icon"></div>
            <p class="icon-text">Sa couleur</p>
          </div>
          <div class="icon-wrapper">
            <div id="parfum-icon" class="icon"></div>
            <p class="icon-text">Son parfum</p>
          </div>
          <div class="icon-btn-wrapper">
            <div class="icon-wrapper">
              <div id="contact-icon" class="icon"></div>
              <Button
                class="btn"
                :text="'Commandez sur instagram'"
                :color="'green'"
                @click="redirectTo()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#explanation-section {
  background-color: var(--vt-c-dark-yellow);
  height: 50vh;
  width: 100vw;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#explanation-section h3 {
  color: var(--vt-c-dark-green);
}

#explanation-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

#explanation-content h3 {
  padding: 0px 20px;
}

#icons-wrapper {
  display: flex;
  gap: 30px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;
}

.icon {
  width: 90px;
  height: 90px;
}

.icon-wrapper p {
  margin: 10px 0px;
  text-align: center;
  width: 150px;
}

#contact-icon,
#candle-icon,
#parfum-icon,
#color-icon {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#contact-icon {
  background-image: url('@/assets/img/icons8-instagram-100_1.png');
}
#candle-icon {
  background-image: url('@/assets/img/icons8-candle-100_1.png');
}
#parfum-icon {
  background-image: url('@/assets/img/icons8-wind-64_1.png');
}
#color-icon {
  background-image: url('@/assets/img/icons8-color-100_1.png');
}

/* 0 - 860px */
@media only screen and (max-width: 860px) {
  #icons-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .icon-wrapper {
    min-width: 350px;
  }
  .icon {
    width: 70px;
    height: 70px;
  }
}

/* 800 - 900 */
@media (min-width: 800px) and (max-width: 900px) {
  .icon {
    width: 70px;
    height: 70px;
  }
  #icons-wrapper {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .icon-btn-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .icon-wrapper p {
    width: 150px;
    word-wrap: break-word;
  }
}

/* Tablettes 900 - 1200 */
@media (min-width: 900px) and (max-width: 1200px) {
  #icons-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 0px 20px;
  }
  .icon-wrapper {
    min-width: 200px;
  }
  #explanation-section h3 {
    padding: 0 20px;
  }

  .icon {
    width: 70px;
    height: 70px;
  }
}

/* 0 - 1200 */
@media (max-width: 1200px) {
  #explanation-section {
    padding: 100px 0;
    height: fit-content;
  }

  #explanation-content {
    padding: 20px;
  }
}
</style>
