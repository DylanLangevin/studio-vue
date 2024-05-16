<script setup lang="ts">
import Button from '../../components/Button.vue'
</script>

<template>
  <main>
    <div id="explanation-section">
      <div id="explanation-content">
        <h3>Commander une bougie c'est très simple !</h3>
        <div id="icons-wrapper">
          <div class="icon-wrapper">
            <div class="icon" id="candle-icon"></div>
            <p class="icon-text">Choisissez votre bougie</p>
          </div>
          <div class="icon-wrapper">
            <div class="icon" id="color-icon"></div>
            <p class="icon-text">Sa couleur</p>
          </div>
          <div class="icon-wrapper">
            <div class="icon" id="parfum-icon"></div>
            <p class="icon-text">Son parfum</p>
          </div>
          <div class="icon-wrapper">
            <div class="icon" id="contact-icon"></div>
            <Button
              @click="scrollToSection('preview-section')"
              class="btn"
              :text="'Commandez sur instagram'"
              :color="'green'"
            />
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
  width: 100%;
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

#icons-wrapper {
  display: flex;
  gap: 30px;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
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
  background-image: url('../../assets/img/icons8-instagram-100_1.png');
}
#candle-icon {
  background-image: url('../../assets/img/icons8-candle-100_1.png');
}
#parfum-icon {
  background-image: url('../../assets/img/icons8-wind-64_1.png');
}
#color-icon {
  background-image: url('../../assets/img/icons8-color-100_1.png');
}
</style>
