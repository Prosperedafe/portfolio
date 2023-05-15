<template>
  <section class="what__i__do">
    <h2>Skills</h2>
    <div class="my__skills">
      <div v-for="skill in skills" :key="skill.id">
        <h3>
          {{ skill.title }}
        </h3>
        <img :src="skill.icon" />
      </div>
    </div>
  </section>
</template>

<style>
@import "../assets/style/home.css";
</style>

<script>
import html from '../assets/images/icons8-html.svg'
import css from '../assets/images/icons8-css.svg'
import javascript from '../assets/images/icons8-javascript.svg'
import typescript from '../assets/images/icons8-typescript.svg'
import react from '../assets/images/icons8-react.svg'
import vue from '../assets/images/icons8-vue-js.svg'
import sass from '../assets/images/icons8-sass.svg'
import tailwind from '../assets/images/icons8-tailwind-css.svg'
import chakra from '../assets/images/icons8-chakra-ui.svg'
import git from '../assets/images/icons8-git.svg'
import github from '../assets/images/icons8-github (1).svg'

export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          title: "HTML",
          icon: html
        },
        {
          id: 2,
          title: "CSS",
          icon: css
        },
        {
          id: 3,
          title: "JAVASCRIPT",
          icon: javascript
        },
        {
          id: 4,
          title: "TYPESCRIPT",
          icon: typescript
        },
        {
          id: 5,
          title: "REACT.JS",
          icon: react
        },
        {
          id: 6,
          title: "VUE.JS",
          icon: vue
        },
        {
          id: 7,
          title: "SCSS",
          icon: sass
        },
        {
          id: 8,
          title: "TAILWIND CSS",
          icon: tailwind
        },
        {
          id: 9,
          title: "CHAKRA UI",
          icon: chakra
        },
        {
          id: 10,
          title: "GIT",
          icon: git
        },
        {
          id: 11,
          title: "GITHUB",
          icon: github
        },
      ],
    };
  },
};
</script>