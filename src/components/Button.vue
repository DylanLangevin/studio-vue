<script setup lang="ts">
interface ButtonProps {
  text: String
  color: String
}
const props = defineProps<ButtonProps>()
</script>

<template>
  <main id="button" :class="'button-' + props.color">
    <p>{{ props.text }}</p>
  </main>
</template>

<style scoped>
#button {
  border: none;
  width: fit-content;
  padding: 15px;
  border-radius: 100px;
  z-index: 120;
  position: relative;
  cursor: pointer;
}

#button:hover {
  cursor: pointer;
}

.button-white {
  background-color: rgba(255, 255, 255, 0.3);
}

.button-white p {
  color: white;
}

.button-white:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.3
  ); /* Utilisation de RGBA pour définir une opacité partielle */
  transition: background-color 0.2s ease-in-out; /* Transition uniquement pour le fond */
}
.button-white:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
.button-white:hover p {
  color: black;
}
</style>
