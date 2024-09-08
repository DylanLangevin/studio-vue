<script setup lang="ts">
interface ButtonProps {
  text: string
  color: string
}
const props = defineProps<ButtonProps>()
</script>

<template>
  <main id="button" :class="'button-' + props.color">
    <p>{{ props.text }}</p>
  </main>
</template>

<style scoped>
p {
  text-align: center;
}

#button {
  border: none;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 100px;
  z-index: 120;
  position: relative;
  cursor: pointer;
}

#button:hover {
  cursor: pointer;
}

.button-white {
  background-color: white;
}
.button-white p {
  color: black;
}

.button-green {
  background-color: var(--vt-c-dark-green);
}

.button-grey {
  background-color: rgba(255, 255, 255, 0.3);
}

.button-white p,
.button-green p,
.button-grey p {
  color: white;
}

.button-white:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 0.2s ease-in-out;
}
.button-white:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
.button-white:hover p {
  color: black;
}
</style>
