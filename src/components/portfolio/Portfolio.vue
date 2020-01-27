<template>
  <div>
    <app-stock :key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
};
</script>

<style>
</style>