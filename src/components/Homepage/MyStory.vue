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
    <div id="my-story-section">
      <div id="my-story-content">
        <div id="imgs-wrapper">
          <div id="first-img-wrapper">
            <img id="first-img" src="../../assets/img/IMG_0327_2.png" alt="" class="img" />
            <img
              id="third-img"
              src="../../assets/img/9CEE5C54-5045-44D8-B17C-813D073E50C6.png"
              alt=""
              class="img"
            />
          </div>
          <img
            id="second-img"
            src="../../assets/img/569ACEB2-B0F7-4C66-9A63-420E804809293.png"
            alt=""
            class="img"
          />
        </div>
        <div id="text-wrapper">
          <h3>Mon Histoire</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis quam, in
            libero est rem corporis, amet unde ipsa deserunt sint aliquam excepturi nobis dicta non.
            Recusandae accusamus rerum dolorum. Inventore, mollitia provident quo corporis
            voluptatibus consequatur voluptatum blanditiis dignissimos dolor beatae tempore
            exercitationem odit similique cum. Ipsa, non incidunt at accusantium enim fugit quaerat
            ratione libero pariatur? Quaerat, porro.
          </p>
          <div id="btn-wrapper">
            <Button
              @click="scrollToSection('preview-section')"
              class="btn"
              :text="'Button'"
              :color="'green'"
            />
            <Button
              @click="scrollToSection('preview-section')"
              class="btn"
              :text="'Button'"
              :color="'green'"
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
  width: 250px;
  height: 250px;
}
#second-img {
  width: 260px;
  height: 348px;
}
#third-img {
  width: 200px;
  height: 200px;
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

@media only screen and (max-width: 850px) {
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
  /* #imgs-wrapper {
    max-width: 200px;
  } */
  #first-img {
    width: 141px;
    height: 141px;
  }
  #second-img {
    width: 147px;
    height: 197px;
  }
  #third-img {
    width: 117px;
    height: 117px;
  }
}

@media (min-width: 900px) and (max-width: 1200px) {
  /* #imgs-wrapper {
    max-width: 200px;
  } */
  #first-img {
    width: 179px;
    height: 179px;
  }
  #second-img {
    width: 187px;
    height: 250px;
  }
  #third-img {
    width: 149px;
    height: 149px;
  }
}

/* Tablettes */
@media (min-width: 600px) and (max-width: 1200px) {
  /* #imgs-wrapper {
    max-width: 200px;
  } */
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
