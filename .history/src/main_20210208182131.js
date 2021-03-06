import Vue from 'vue';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
// import firebase from 'firebase';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
// Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
