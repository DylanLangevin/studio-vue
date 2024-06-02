<script setup lang="ts"></script>

<template>
  <main>
    <div id="banner-section">
      <h3 id="banner-text">Lorem ipsum dolor</h3>
    </div>
  </main>
</template>

<style scoped>
#banner-section {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: var(--vt-c-dark-yellow);
}

#banner-text {
  color: var(--vt-c-dark-green);
  position: absolute;
  animation: moveBanner 30s linear infinite;
  white-space: nowrap;
}

@keyframes moveBanner {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
