import firebase from '../plugins/firebase';

export default {
  state: {
    authenticated: false,
    errorMessage: '',
  },
  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    login(context, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          // console.log(user);
          // this.$router.push("/");
          context.commit('setAuthenticated', true);
        })
        .catch((error) => {
          alert(error);
        });
      // const authenticated =
      //   payload.username === 'user' && payload.password === 'pass';

      // context.commit('setAuthenticated', authenticated);
      // if (!authenticated) {
      //   context.commit('setErrorMessage', 'Invalid username or password');
      // } else {
      //   context.commit('setErrorMessage', '');
      // }
    },
    logout(context) {
      context.commit('auth/setAuthenticated', false);
      context.commit('auth/setErrorMessage', '');
    },
  },
  getters: {
    authenticated(state) {
      return state.authenticated;
    },
  },
};
