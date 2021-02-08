import Vue from 'vue';
import { store } from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from './plugins/firebase';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
// Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  firebase,
  store,
  render: (h) => h(App),
}).$mount('#app');
