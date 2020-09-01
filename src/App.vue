<template>
  <div id="app" class="container">
    <app-header></app-header>
    <new-quote></new-quote>
    <quotes></quotes>
    <div class="alert alert-primary" role="alert">Click on quote to delete quote!</div>
  </div>
</template>

<script>
import Quotes from "./components/Quotes.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    quotes: Quotes,
    newQuote: NewQuote,
    appHeader: Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
