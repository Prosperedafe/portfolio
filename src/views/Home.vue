<template>
  <main>
    <About />
    <WhatIDo />
    <Social />
    <Contact/>
  </main>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import About from "@/components/About.vue";
import WhatIDo from "@/components/WhatIDo.vue";
import Social from "../components/Social.vue";
import Contact from '../components/Form.vue';
export default {
  components: {
    About,
    WhatIDo,
    Social,
    Contact,
  },
};
</script>