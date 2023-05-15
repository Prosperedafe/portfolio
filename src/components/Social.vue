<template>
  <section class="social">
    <div class="social__bg">
      <h2>Get In Touch</h2>
      <h3>Just Say Hello!</h3>
      <div class="links">
        <a v-for="link in links" :key="link.id" :href="link.url" target="_blank">
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
import github from "../assets/images/icons8-github.svg";
import Hello from '../assets/images/Hello.svg'

export default {
  data() {
    return {
      image: Hello,
      links: [
        {
          id: 3,
          label: github,
          img: github,
          url: 'https://github.com/Prosperedafe'
        },
        {
          id: 2,
          label: "Web",
          img: linkedin,
          url: 'https://www.linkedin.com/in/edafe-prosper-b046ba239/'
        },
        {
          id: 1,
          label: "UI/UX",
          img: facebook,
          url: 'https://www.facebook.com/prosper.edafe.10?mibextid=ZbWKwL'
        },
        {
          id: 4,
          label: twitter,
          img: twitter,
          url: 'https://twitter.com/ProsperEdafe?t=mvwCBmrOm4ibBdmx67QpBA&s=09'
        },
      ],
    };
  },
};

</script>
