<template>
  <header>
    <nav class="header__nav" id="nav">
      <img :src="logo" alt="Logo" class="header__logo" />
    </nav>
  </header>
</template>
<style>
@import "../assets/style/header.css";
</style>
<script>
import logo from "../assets/images/logo.svg";

export default {
  data: function () {
    return {
      logo: logo,
    };
  },
};
</script>

