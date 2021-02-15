import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import firebase from './plugins/firebase';
import 'firebase/auth';

import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

let isInitialized = false;

new Promise((resolve) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      Vue.$store.dispatch('auth/setAuthenticatedUser', user);
    } else {
      Vue.$store.dispatch('auth/setAuthenticatedUser', null);
      Vue.$router.push({ name: 'Login' });
    }
    if (!isInitialized) {
      resolve();
    }
  });
}).then(() => {
  isInitialized = true;
  new Vue({
    vuetify,
    router,
    firebase,
    store: store,
    render: (h) => h(App),
  }).$mount('#app');
});
