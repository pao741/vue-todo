<template>
  <v-app>
    <v-main>
      <div>
        <router-link to="Login">Log in</router-link>
        <router-link to="Register">Register</router-link>
        <router-link to="HelloWorld">HelloWorld</router-link>
        <router-link to="login"></router-link>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./components/Login";

export default {
  name: "App",

  components: {
    // Login
  },

  data: () => ({
    //
  })
};
</script>
