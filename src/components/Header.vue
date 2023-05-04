<template>
  <header>
    <nav class="header__nav" id="nav">
      <img :src="logo" alt="Logo" class="header__logo" />
      <!-- <ul class="header__nav__ul">
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li>Contact</li>
      </ul> -->
    </nav>

    <!-- <button @click="redirect" >redirect</button>
        <button @click="back" >Go back</button>
        <button @click="foward">Go foward</button> -->
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

<!-- <script>
export default {
    // methods: {
    //     redirect() {
    //         this.$router.push({name: 'Home'})
    //     },
    //     back() {
    //         this.$router.go(-1)
    //     },
    //     foward() {
    //         this.$router.go(+1)
    //     },
    // },
     data: function () {
        return {
            image: image
        },
}
</script> -->