import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import Main from '../components/Main';
import Register from '../components/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
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
  ],
});
