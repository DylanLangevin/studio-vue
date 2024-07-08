<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main id="basket">
    <Navbar ref="scrollContainer" :isScrolled="true" id="navbar" />
    <div id="basket-content">
      <div id="basket-header">
        <h3 id="h3-title">basket</h3>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
#basket {
  width: 100%;
  overflow: hidden;
}

#basket-content {
  height: 100%;
  margin-top: 80px;
  position: relative;
  z-index: 1;
  background-color: var(--vt-c-dark-yellow);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
}

#h3-title {
  color: var(--vt-c-dark-green);
  margin-left: 100px;
}
</style>
