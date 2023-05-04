<template>
  <section class="intro">
    <div>
      <p class="intro__hello">
        <span class="line"></span>
        <span>Hello</span>
      </p>
      <h1>I’m Sarah Jackson</h1>
      <p class="about__me">
        A UX / UI designer, product designer, content creator and creative
        director.
      </p>
    </div>
    <figure>
      <img :src="profile" alt="profile" />
    </figure>
  </section>
</template>

<style>
@import "../assets/style/home.css";
</style>

<script>
import profile from "../assets/images/Image Container.png";

export default {
  data: function () {
    return {
      profile: profile,
    };
  },
};
</script>