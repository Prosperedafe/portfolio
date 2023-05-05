<template>
  <section class="what__i__do">
    <h2>Skills</h2>
    <div class="my__skills">
      <div v-for="skill in skills" :key="skill.id">
        <h3>
          {{ skill.title }}
        </h3>
        <p>{{ skill.details }}</p>
      </div>
    </div>
  </section>
</template>
<style>
@import "../assets/style/home.css";
</style>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          title: "HTML",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 2,
          title: "CSS",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 4,
          title: "TYPESCRIPT",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 5,
          title: "REACT.JS",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 6,
          title: "VUE.JS",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 7,
          title: "SCSS",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 8,
          title: "TAILWIND CSS",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 9,
          title: "CHAKRA UI",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 10,
          title: "GIT",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 11,
          title: "GITHUB",
          details:
            "User interface design, user experience design, user research.",
        },
      ],
    };
  },
};
</script>