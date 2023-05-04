<template>
  <section class="social">
    <h2>Get In Touch</h2>
    <h3>Just Say Hello!</h3>
    <div class="links">
      <a v-for="link in links" :key="link.id">
        <img :src="link.img" />
      </a>
    </div>
  </section>
</template>

<style>
@import "../assets/style/social.css";
</style>

<script>
import facebook from "../assets/images/facebook 1.svg";
import linkedin from "../assets/images/linkedin-logo 1.svg";
import twitter from "../assets/images/twitter 1.svg";
import behance from "../assets/images/behance 1.svg";
import dribble from "../assets/images/dribbble 1.svg";

export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: "UI/UX",
          img: facebook,
        },
        {
          id: 2,
          title: "Web",
          img: linkedin,
        },
        {
          id: 3,
          title: behance,
          img: behance,
        },
        {
          id: 4,
          title: twitter,
          img: twitter,
        },
        {
          id: 5,
          title: dribble,
          img: dribble,
        },
      ],
    };
  },
};
</script>