import firebase from '../plugins/firebase';

export default {
  state: {
    authenticated: false,
    errorMessage: '',
  },
  mutations: {
    setAuthenticated(state, authenticated) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // console.log(user);
          state.authenticated = authenticated;
          this.$router.push();
        })
        .catch((error) => {
          alert(error);
        });
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
  },
  actions: {
    login(context, payload) {
      const authenticated =
        payload.username === 'user' && payload.password === 'pass';
      context.commit('setAuthenticated', authenticated);
      if (!authenticated) {
        context.commit('setErrorMessage', 'Invalid username or password');
      } else {
        context.commit('setErrorMessage', '');
      }
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
