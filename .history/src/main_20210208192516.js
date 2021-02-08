import Vue from 'vue';
import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from './plugins/firebase';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

new Vue({
  vuetify,
  router,
  firebase,
  store: store,
  render: (h) => h(App),
}).$mount('#app');
