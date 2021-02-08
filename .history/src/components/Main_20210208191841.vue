<template>
  <v-content>
    <v-container>
      <div>Hello World!</div>
      <v-btn color="error" @click="logOut"> Log out</v-btn>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  //   name: "Log In"
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() =>
          // Sign-out successful.
          console.log("sign out successful");
            this.$router.push("login");
        )
        .catch(error => {
          // An error happened.
          alert(error);
        });
    }
  }
};
</script>
