<script setup lang="ts"></script>

<template>
  <main>
    <div id="banner-section">
      <p id="banner-text">
        Lorem ipsum dolor sit amet consectetur - adipisicing elit. Iure, pariatur. Dolores corporis
        dolorem, facere architecto repudiandae distinctio c - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iure, pariatur. - Dolores corporis dolorem, facere architecto- repudiandae
        distinctio c
      </p>
    </div>
  </main>
</template>

<style scoped>
#banner-section {
  height: 50px;
  background-color: var(--vt-c-dark-green);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

#banner-text {
  color: white;
  position: absolute;
  animation: moveBanner 20s linear infinite;
  white-space: nowrap;
  font-size: 0.8rem;
}

@keyframes moveBanner {
  0% {
    left: 0%;
  }
  100% {
    left: -100%;
  }
}
</style>
