<template>
  <main>
    <About />
    <Projects />
    <WhatIDo />
    <Contact />
  </main>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import About from "@/components/About.vue";
import WhatIDo from "@/components/WhatIDo.vue";
import Contact from '../components/Form.vue';
import Projects from '@/components/Projects.vue';
export default {
  components: {
    About,
    WhatIDo,
    Contact,
    Projects,
  },
};
</script>