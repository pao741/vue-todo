<template>
  <v-app id="Log in">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
                <v-btn color="primary" @click="$router.push('register')"
                  >Register</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  props: {
    source: String
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password
      });
      if (this.$store.state.auth.authenticated) {
        console.log("authenticated and attempting to redirect to todo page");
        // await this.$router.push();
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // console.log(user);
            this.$router.push({ name: "Main" });
          })
          .catch(error => {
            alert(error);
          });
      }
      // console.log(this.email);
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(this.email, this.password)
      //   .then(() => {
      //     // console.log(user);
      //     this.$router.push("/");
      //   })
      //   .catch(error => {
      //     alert(error);
      //   });
    }
  }
};
</script>

<style></style>
