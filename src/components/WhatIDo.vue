<template>
  <section class="what__i__do">
    <h2>Skills</h2>
    <div class="my__skills">
      <div v-for="skill in skills" :key="skill.id">
        <img :src="skill.icon" :alt="skill.title" />
      </div>
    </div>
  </section>
</template>

<style>
@import "../assets/style/home.css";
</style>

<script>
import css from '../assets/images/icons8-csss.svg'
import javascript from '../assets/images/icons8-javascript.svg'
import typescript from '../assets/images/icons8-typescript.svg'
import react from '../assets/images/icons8-react.svg'
import vue from '../assets/images/vue.png'
import sass from '../assets/images/icons8-sass.svg'
import tailwind from '../assets/images/icons8-tailwind-css.svg'
import chakra from '../assets/images/icons8-chakra-ui.svg'
import git from '../assets/images/icons8-git.svg'

export default {
  data() {
    return {
      skills: [
        {
          id: 2,
          icon: css
        },
        {
          id: 3,
          icon: javascript
        },
        {
          id: 4,
          icon: typescript
        },
        {
          id: 5,
          icon: react
        },
        {
          id: 6,
          icon: vue
        },
        {
          id: 7,
          icon: sass
        },
        {
          id: 8,
          icon: tailwind
        },
        {
          id: 9,
          icon: chakra
        },
        {
          id: 10,
          icon: git
        },
      ],
    };
  },
};
</script>