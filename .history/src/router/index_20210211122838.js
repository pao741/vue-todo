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
  modes: 'history',
  routes,
});

firebase.auth().onAuthStateChanged((firebaseUser) => {
  //   console.log('state is changing');
  if (firebaseUser) {
    authenticated = true;
    // console.log('log in');
    console.log(firebaseUser);

    // this.$store.dispatch(state);
  } else {
    authenticated = false;
    // console.log('not logged in');

    // authenticated = false;
  }
});

const beforeRouteEnter = async (to, from, next) => {
  if (to.meta.authenticated) {
    const authenticated = false;
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
