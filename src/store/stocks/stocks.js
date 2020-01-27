import stocks from "../../data/stocks";
const state = {
  stocks: []
};
const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  randomizedStocks(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};
const getters = {
  stocks(state) {
    return state.stocks;
  }
};
const actions = {
  initStocks({ commit }) {
    commit("setStocks", stocks);
  },
  buyStock({ commit }, order) {
    commit("buyStock", order);
  },
  randomizedStocks({ commit }) {
    commit("randomizedStocks");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
