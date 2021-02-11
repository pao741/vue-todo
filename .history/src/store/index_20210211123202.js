import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // todos: Todo
    auth: Auth,
  },
});

Vue.$store = store;
export default store;
