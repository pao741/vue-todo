import Vue from 'vue';
import VueRouter from 'vue-router';
// import firebase from '../plugins/firebase';

const Login = () => import('../components/Login');
const Main = () => import('../components/Main');
const Register = () => import('../components/Register');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      requiredAuthentication: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiredAuthentication: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiredAuthentication: false,
    },
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
      next({ name: 'Login' });
    }
  } else {
    next();
  }
};

router.beforeEach(beforeRouteEnter);

Vue.$router = router;

export default router;
