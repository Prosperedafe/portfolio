<template>
  <Heading />
  <Home />
</template>

<script>
import Heading from "./components/Header.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Heading,
    Home,
  },
};
</script>

<style></style>
