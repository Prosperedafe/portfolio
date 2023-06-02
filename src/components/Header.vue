<template>
  <header>
    <nav class="header__nav" id="nav">
      <div class="header__logo">p</div>
      <div :class="[open ? 'links active' : 'links']">
        <a href="https://www.linkedin.com/in/edafe-prosper-b046ba239/" target="_blank">Linkedin</a>
        <a href="https://github.com/Prosperedafe" target="_blank">Github</a>
        <a href="https://www.facebook.com/prosper.edafe.10?mibextid=ZbWKwL" target="_blank">Facebook</a>
        <a href="https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/prosperedafe19/" target="_blank">Instagram</a>
      </div>
      <div @click="MenuOPen()" class="hamburger">
        <span :class="[open ? 'rl' : '']"></span>
        <span :class="[open ? 'r0' : '']"></span>
        <span :class="[open ? 'rr' : '']"></span>
      </div>
    </nav>
  </header>
</template>

<style>
@import "../assets/style/header.css";
</style>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    let open = ref(false)

    const MenuOPen = () => {
      open.value = !open.value;
    }

    return { open, MenuOPen }
  }
};
</script>

