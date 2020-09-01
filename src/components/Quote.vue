<template>
  <div class="col-sm-4 mb-4">
    <div class="card">
      <div class="card-body">
        <i class="card-text">{{quote}}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"],
};
</script>

<style scoped>
.card-text {
  font-size: 1.5rem;
}
</style>