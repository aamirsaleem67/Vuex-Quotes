<template>
  <div>
    <h1 class="text-primary mb-4 title">Quotes</h1>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{ width: quotesStatus + '%' }"></div>
      <div
        :class="{ 'text-primary': quotesStatus < 50, 'text-white': quotesStatus >=50 }"
        class="progress-bar-title mt-1"
      >{{ quotes.length }} / {{ maxQuotes }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    quotesStatus: function () {
      return (this.quotes.length / this.maxQuotes) * 100;
    },
    ...mapState(["quotes", "maxQuotes"]),
  },
};
</script>

<style scoped>
.progress-bar-title {
  position: absolute;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  right: 0;
  left: 0;
}
.progress {
  height: 1.5rem;
  font-size: 1rem;
}

.title {
  font-style: italic;
  font-family: "Comic Sans MS";
}
</style>