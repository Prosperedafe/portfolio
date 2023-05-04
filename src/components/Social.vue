<template>
  <section class="social">
    <div class="social__bg">
      <h2>Get In Touch</h2>
      <h3>Just Say Hello!</h3>
      <div class="links">
        <a v-for="link in links" :key="link.id">
          <img :src="link.img" />
        </a>
      </div>
      <!-- <img :src="image" alt="hello" class="hello"> -->
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
import Hello from '../assets/images/Hello.svg'

export default {
  data() {
    return {
      image: Hello,
      links: [
        {
          id: 1,
          label: "UI/UX",
          img: facebook,
        },
        {
          id: 2,
          label: "Web",
          img: linkedin,
        },
        {
          id: 3,
          label: behance,
          img: behance,
        },
        {
          id: 4,
          label: twitter,
          img: twitter,
        },
        {
          id: 5,
          label: dribble,
          img: dribble,
        },
      ],
    };
  },
};

</script>
