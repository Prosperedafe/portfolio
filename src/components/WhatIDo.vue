<template>
  <section class="what__i__do">
    <h2>What I do</h2>
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
          title: "UI/UX",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 2,
          title: "Web",
          details:
            "User interface design, user experience design, user research.",
        },
        {
          id: 3,
          title: "Mobile",
          details:
            "User interface design, user experience design, user research.",
        },
      ],
    };
  },
};
</script>