<template>
  <main>
    <div class="intro-bg"></div>
    <Hero />
  </main>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import Hero from "../components/ProfileCard.vue";

export default {
  components: {
    Hero,
  },
};
</script>