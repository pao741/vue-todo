<template>
  <div>
    <router-view to="Login">Log in</router-view>
    <router-view to="Register">Register</router-view>
    <!-- <router-view to="HelloWorld">HelloWorld</router-view> -->
    <!-- <router-view to="login"></router-view> -->
    <Login />
  </div>
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
