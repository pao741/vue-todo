<template>
  <v-app>
    <v-main>
      <div>
        <router-link to="Login">Log in</router-view>
        <router-link to="Register">Register</router-view>
        <router-link to="HelloWorld">HelloWorld</router-view>
        <router-link to="login"></router-view>
        <Login />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Login
  },

  data: () => ({
    //
  })
};
</script>
