<script setup lang="ts">
const contactInstagram = import.meta.env.VITE_CONTACT_INSTAGRAM
const contactFacebook = import.meta.env.VITE_CONTACT_FACEBOOK
const contactThreads = import.meta.env.VITE_CONTACT_THREADS

function redirectTo(location: string) {
  window.open(location, '_blank')
}
</script>

<template>
  <main>
    <div id="footer-section">
      <div id="footer-content">
        <div class="footer-text-wrapper">
          <h3>Informations</h3>
          <div class="navlinks-wrapper">
            <router-link class="navlinks" to="/collection"><p>Mes produits</p></router-link>
          </div>
        </div>
        <div class="footer-text-wrapper">
          <h3>Suivez moi</h3>
          <div id="contact-icons">
            <div
              id="instagram-icon"
              class="contact-icon"
              @click="redirectTo(contactInstagram)"
            ></div>
            <div id="facebook-icon" class="contact-icon" @click="redirectTo(contactFacebook)"></div>
            <div id="threads-icon" class="contact-icon" @click="redirectTo(contactThreads)"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#footer-section {
  height: 228px;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer-content {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.navlinks p {
  color: white;
}

#instagram-icon,
#facebook-icon,
#threads-icon {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#instagram-icon {
  background-image: url('https://res.cloudinary.com/do3dud2ur/image/upload/v1729609692/icons8-instagram_1_ieao5g.png');
  width: 45px;
  height: 45px;
}

#facebook-icon {
  background-image: url('https://res.cloudinary.com/do3dud2ur/image/upload/v1729609689/icons8-facebook-50_luwkpe.png');
  width: 42px;
  height: 42px;
}

#threads-icon {
  background-image: url('https://res.cloudinary.com/do3dud2ur/image/upload/v1729609692/icons8-fils-de-discussion-48_i1dlly.png');
  width: 50px;
  height: 50px;
}

.footer-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-text-wrapper h3,
.footer-text-wrapper p {
  color: white;
  font-family: 'Open Sauce Sans';
}

#contact-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  #footer-section {
    padding: 50px 0;
    height: fit-content;
  }

  #footer-content {
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
  }

  #instagram-icon {
    width: 40px;
    height: 40px;
  }

  #facebook-icon {
    width: 38px;
    height: 38px;
  }

  #threads-icon {
    width: 45px;
    height: 45px;
  }
}
@media only screen and (min-width: 1600px) {
  #footer-section {
    height: 568px;
  }

  #footer-content {
    justify-content: center;
    gap: 100px;
  }
}
</style>
