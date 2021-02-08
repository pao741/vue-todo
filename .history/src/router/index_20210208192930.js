import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from '../plugins/firebase';

import Login from '../components/Login';
import Main from '../components/Main';
import Register from '../components/Register';
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter);

var authenticated = false;

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
  modes: 'hash',
  routes,
});

firebase.auth().onAuthStateChanged((firebaseUser) => {
  console.log('state is changing');
  if (firebaseUser) {
    console.log('log in');
    console.log(firebaseUser);
    authenticated = true;
    this.$store.dispatch(login);
  } else {
    console.log('not logged in');
    authenticated = false;
    // authenticated = false;
  }
});

const beforeRouteEnter = (to, from, next) => {
  if (to.meta.authenticated) {
    if (authenticated) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
};

router.beforeEach(beforeRouteEnter);

// beforeRouteEnter (to, from, next) {
//     getPost(to.params.id, (err, post) => {
//       next(vm => vm.setData(err, post))
//     })
//   },

Vue.$router = router;

export default router;
