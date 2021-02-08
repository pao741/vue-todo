import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDDoWONGwbdeV8-j0yTCmUjzBNPDUFN7Q8',
  authDomain: 'vue-todo-ae3e5.firebaseapp.com',
  projectId: 'vue-todo-ae3e5',
  storageBucket: 'vue-todo-ae3e5.appspot.com',
  messagingSenderId: '816401963007',
  appId: '1:816401963007:web:1f3f49cc385198e51af9ca',
  measurementId: 'G-G9PREJ9C9D',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export default firebase;
