import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from '../plugins/firebase';

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
    meta: {
      authenticated: true,
    },
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

const router = new VueRouter({
  mode: 'hash',
  routes,
});

const beforeRouteEnter = async (to, from, next) => {
  if (to.meta.requiredAuthentication) {
    if (Vue.$store.state.auth.authenticated) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
};

router.beforeEach(beforeRouteEnter);

Vue.$router = router;

export default router;
