<template>
  <div>
    <Navigation />
    <Aboutus/>
  </div>
</template>

<script>
import Navigation from "./components/navigation.vue";
import Aboutus from "./views/aboutus.vue";

export default {
  components: {
    Navigation,
    Aboutus,
  },
  data() {
    return {
      icon: require("./assets/instagram.png"),
    };
  },
};
</script>

<style>
/* .sticky {
  position: fixed;
  top: 0;
  width: 100%;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */




</style>
