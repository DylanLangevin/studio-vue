<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar ref="scrollContainer" :isScrolled="true" id="navbar" />
    <h1>Collection</h1>
  </main>
</template>

<style scoped></style>
