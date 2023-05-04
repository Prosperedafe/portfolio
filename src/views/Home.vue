<template>
  <main>
    <About />
    <WhatIDo />
    <Social />
  </main>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import About from "@/components/About.vue";
import WhatIDo from "@/components/WhatIDo.vue";
import Social from "../components/Social.vue";
export default {
  components: {
    About,
    WhatIDo,
    Social,
  },
};
</script>