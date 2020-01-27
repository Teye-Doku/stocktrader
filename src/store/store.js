import Vue from "vue";
import Vuex from "vuex";
import portfolio from "./portfolio/portfolio";
import stocks from "./stocks/stocks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});
