import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name, 'Main',
      component: Main,
    },
    {
      path: '/login',
      name, 'Login',
      component: Login,
    },
    {
      path: '/register',
      name, 'Register',
      component: Register,
    },
  ],
});

new Vue({
  router,
}).$mount('#app');
