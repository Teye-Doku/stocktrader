<template>
  <div>
    <h1>Do your trading here</h1>
    <p>buying and selling in the market is the thing of the past</p>
    <h3>{{ funds | currency }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>

<style>
</style>