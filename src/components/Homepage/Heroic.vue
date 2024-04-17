<script setup lang="ts"></script>

<template>
  <main id="heroic-section">
    <div id="img-background" class="filter">
      <h1 id="h1-title">BOUGIES <br />ARTISANALES</h1>
    </div>
  </main>
</template>

<style scoped>
#heroic-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#img-background {
  height: 100%;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('../../assets/img/858BFC24-970F-4BB3-8A3F-F1872AB87898.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

#h1-title {
  color: white;
  position: relative;
  text-align: center;
  z-index: 10;
}
</style>
