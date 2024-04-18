<script setup lang="ts">
interface ButtonProps {
  text: string
}
const props = defineProps<ButtonProps>()
</script>

<template>
  <main id="button">
    <p>{{ props.text }}</p>
  </main>
</template>

<style scoped>
#button {
  background-color: #fff;
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
</style>
