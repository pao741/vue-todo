<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center" class="ma-5">
          <v-col xs="12" sm="8">
            <v-card>
              <!-- <div>Hello World!</div> -->
              <v-btn color="error" @click="logOut"> Log out</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
        .then(() => {
          // Sign-out successful.
          console.log("sign out successful");
          this.$router.push("/login");
        })
        .catch(error => {
          // An error happened.
          alert(error);
        });
    }
  }
};
</script>
