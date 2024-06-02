<script setup lang="ts"></script>

<template>
  <RouterView id="router" />
</template>

<style scoped>
#router {
  height: auto;
  z-index: -10001;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;
}

#router::-webkit-scrollbar {
  display: none;
}
</style>
