<template>
  <v-content>
    <v-container>
      <div>Hello World!</div>
      <v-btn color="warning" @click="$router.push('login')"> Log out</v-btn>
    </v-container>
  </v-content>
</template>

<script>
export default {
  //   name: "Log In"
};
</script>
