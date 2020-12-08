import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: false,
    token: null,
  },
  mutations: {
    changeLoginStatus(state, payload) {
      state.loggedIn = payload;
    },
    setToken(state, payload) {
      localStorage.setItem('token', payload);
      state.token = payload;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
    getToken(state) {
      return state.token;
    },
  },
});

export default store;
