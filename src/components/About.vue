<template>
  <section class="intro">
    <div>
      <p class="intro__hello">
        <span class="line"></span>
        <span>Hello</span>
      </p>
      <h1>I’m Prosper Edafe</h1>
      <p class="about__me">
        A Frontend Developer focused on building responsive web applications for best user experience.
      </p>
    </div>
    <figure>
      <img src="https://res.cloudinary.com/dmztxdgak/image/upload/v1683312801/tech-time/IMG-20220810-WA0017_sick8x.jpg"
        alt="profile" />
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