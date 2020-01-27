<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="text"
            :class="{danger:insuficientFunds}"
            class="form-control"
            v-model.number="quantity"
            placeholder="Quantity"
          />
        </div>
        <div class="pull-right">
          <button
            :disabled=" insuficientFunds ||quantity <= 0 && !Number.isInteger(quantity)"
            class="btn btn-success"
            @click="buyStock"
          >buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insuficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    ...mapActions({
      buyingStock: "buyStock"
    }),
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.buyingStock(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 2px solid red;
}
</style>
