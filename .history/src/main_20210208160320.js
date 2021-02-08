import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

import 'vuetify/dist/vuetify.min.css';

import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';

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

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/main',
      component: Main,
    },
    {
      path: '/register',
      component: Register,
    },
  ],
});

Vue.config.productionTip = false;
// Vue.use(Vuex);

Vue.use(VueRouter);

new Vue({
  vuetify,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
