<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | quantity:{{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="text" class="form-control" v-model.number="quantity" placeholder="Quantity" />
        </div>
        <div class="pull-right">
          <button
            :disabled="insuficientQuantity || quantity <= 0 && !Number.isInteger(quantity)"
            class="btn btn-success"
            @click="sellStock"
          >sell</button>
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
    insuficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      sellingStock: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.sellingStock(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped></style>
