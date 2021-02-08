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
    authenticated: false,
  },
  actions: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
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
