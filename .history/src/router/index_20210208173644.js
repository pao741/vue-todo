import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../components/Login';
import Main from '../components/Main';
import Register from '../components/Register';
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter);

const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      authenticated: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];
