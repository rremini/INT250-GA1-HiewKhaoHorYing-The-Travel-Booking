<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/shared/Navbar.vue";
import Footer from "./components/shared/Footer.vue";
</script>

<template>
  <Navbar />
  <main class="mt-20">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
