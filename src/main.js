import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    quotes: ['Something to see!'],
    maxQuotes: 10

  },
  mutations: {
    addQuote: function (state, quote) {
      state.quotes = [...state.quotes, quote];
    },
    removeQuote: function (state, quote) {
      state.quotes = state.quotes.filter(_quote => _quote != quote);
    }
  },
});
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
