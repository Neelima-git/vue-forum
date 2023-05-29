<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>
    <div class="custom-page">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding-bottom: 4rem;
}
.custom-page {
  background-color: #e0e1f5;
  min-height: 100vh;
}
</style>
