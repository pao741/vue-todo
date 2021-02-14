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
    },
    logout(context) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          context.commit('setAuthenticated', false);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  getters: {
    authenticated(state) {
      return state.authenticated;
    },
  },
};
