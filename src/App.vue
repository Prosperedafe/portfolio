<template>
  <Heading />
  <router-view />
</template>

<script>
import Heading from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Heading,
  },
};
</script>

<style>
</style>
