const state = {
  stocks: [],
  funds: 10000
};
const mutations = {
  buyStock(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  sellStock(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};
const actions = {
  buyStock({ commit }, order) {
    commit("sellStock", order);
  }
};
const getters = {
  funds(state) {
    return state.funds;
  },
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        name: record.name,
        quantity: stock.quantity,
        price: record.price
      };
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
