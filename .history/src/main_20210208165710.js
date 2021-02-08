import Vue from 'vue';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import router from './router';

import 'vuetify/dist/vuetify.min.css';

const firebaseConfig = {
  apiKey: 'AIzaSyDDoWONGwbdeV8-j0yTCmUjzBNPDUFN7Q8',
  authDomain: 'vue-todo-ae3e5.firebaseapp.com',
  projectId: 'vue-todo-ae3e5',
  storageBucket: 'vue-todo-ae3e5.appspot.com',
  messagingSenderId: '816401963007',
  appId: '1:816401963007:web:1f3f49cc385198e51af9ca',
  measurementId: 'G-G9PREJ9C9D',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;
// Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
