<template>
  <main>
    <About />
    <WhatIDo />
  </main>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import About from "@/components/About.vue";
import WhatIDo from "@/components/WhatIDo.vue";

export default {
  components: {
    About,
    WhatIDo,
  },
};
</script>