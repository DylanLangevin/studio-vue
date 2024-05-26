<script setup lang="ts"></script>

<template>
  <main>
    <div id="footer-section">
      <div id="footer-content">
        <div class="footer-text-wrapper">
          <h2>Informations</h2>
          <div class="navlinks-wrapper">
            <router-link class="navlinks" to="/collection"><p>Mes produits</p></router-link>
            <router-link class="navlinks" to="/contact"><p>Me contacter</p></router-link>
          </div>
        </div>
        <div class="footer-text-wrapper">
          <h2>Réseaux Sociaux</h2>
          <div id="instagram-icon"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#footer-section {
  height: 228px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer-content {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  width: 80%;
}

.navlinks p {
  color: white;
}

#instagram-icon {
  background-image: url('../assets/img/icons8-instagram_1.png');
  width: 45px;
  height: 45px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.footer-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-text-wrapper h2,
.footer-text-wrapper p {
  color: white;
  font-family: 'Open Sauce Sans';
}

@media only screen and (max-width: 600px) {
  #footer-section {
    padding: 20px 0;
    margin-bottom: 20px;
    height: fit-content;
  }

  #footer-content {
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    padding: 10px 0;
  }
}
</style>
