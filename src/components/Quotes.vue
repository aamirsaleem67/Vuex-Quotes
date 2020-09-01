<template>
  <div class="row">
    <quote
      @click.native="removeQuote(quote)"
      v-for="(quote, index) in quotes"
      :quote="quote"
      :key="quote + index"
    >{{ quote }}</quote>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Quote from "./Quote.vue";

export default {
  methods: {
    ...mapMutations(["removeQuote"]),
  },
  components: {
    quote: Quote,
  },
  computed: {
    ...mapState(["quotes"]),
  },
};
</script>

<style>
</style>