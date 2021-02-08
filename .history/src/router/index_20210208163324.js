import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';

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
