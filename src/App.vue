<script setup lang="ts"></script>

<template>
  <div id="router">
    <RouterView />
  </div>
</template>

<style scoped>
#router {
  height: 100%;
  z-index: -10001;
  position: relative;
}
</style>
