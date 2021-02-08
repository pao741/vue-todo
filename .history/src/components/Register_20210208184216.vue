<template>
  <v-app id="Register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    v-model="confirm"
                    name="confirm"
                    label="Confirm"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register">Register</v-btn>
                <v-btn color="primary" to="/login">Back</v-btn>
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
  name: "Register",
  props: {
    source: String
  },
  data() {
    return {
      email: "",
      password: "",
      confirm: ""
    };
  },
  methods: {
    checkPassword() {
      return this.password === this.confirm;
    },
    register() {
      if (this.checkPassword) {
        console.log(this.email);
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(userCredential => {
            // Signed in
            console.log(userCredential.user);
            this.router.push("login");
            // ...
          })
          .catch(error => {
            alert(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ..
          });
      }
    }
  }
};
</script>

<style></style>
