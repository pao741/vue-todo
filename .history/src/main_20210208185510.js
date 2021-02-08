import Vue from 'vue';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from './plugins/firebase';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
// Vue.use(Vuex);

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('not logge in');
  }
});

new Vue({
  vuetify,
  router,
  firebase,
  render: (h) => h(App),
}).$mount('#app');
