<template>
  <div id="app">
    <Navigation/>
    <Header/>
  </div>
</template>

<script>
import Navigation from "./components/core/Navigation.vue";
import Header from "./components/core/Header.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Header
  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  margin-top: 60px;
}
</style>
