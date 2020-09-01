<template>
  <form class="form-inline mt-5">
    <div class="form-group mb-3">
      <input type="text" class="form-control" v-model="newQuote" />
      <button @click.prevent="addNewQuote" class="btn btn-primary ml-3">Add</button>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data: function () {
    return {
      newQuote: "",
    };
  },
  methods: {
    ...mapMutations(["addQuote"]),
    addNewQuote: function () {
      if (!this.newQuote) return;
      if (!this.shouldAddNewQuote()) {
        alert("Limit exceed!");
        this.newQuote = "";
        return;
      }
      this.addQuote(this.newQuote);
      this.newQuote = "";
    },
    shouldAddNewQuote() {
      return !(this.quotes.length >= this.maxQuotes);
    },
  },
  computed: {
    ...mapState(["quotes", "maxQuotes"]),
  },
};
</script>

<style scoped>
</style>