<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Navbar from '../src/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  // mounted() {
  //   window.onbeforeunload = function() {
  //     localStorage.clear();
  //   };
  // },
};
</script>

<style></style>
