<template>
  <v-app>
    <v-row justify="center" class="ma-5">
      <v-col sm="1">
        <!-- <div>Hello World!</div> -->
        <v-btn justify="center" color="error" @click="logOut">Log out</v-btn>
      </v-col>
      <v-col sm="1">
        <v-btn justify="center" color="success" @click="adding = true"
          >Add</v-btn
        >
      </v-col>
    </v-row>
    <v-container>
      <v-dialog :value="adding">
        <v-card justify="center" max-width="340">
          <v-card-title>Fill in the form</v-card-title>
          <v-row justify="center" class="ma-5">
            <v-col sm="1"> </v-col>
          </v-row>
          <v-row justify="center" class="ma-5">
            <v-col>
              <v-text-field class="header" placeholder="Title"></v-text-field
              ><v-text-field class="header" placeholder="Title"></v-text-field>
            </v-col>
            <v-col>
              <v-btn justify="center" color="success" @click="adding = false">
                Submit
              </v-btn>
              <v-btn justify="center" color="error" @click="adding = false">
                Close
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-container>
    <v-card class="mx-auto">
      <v-toolbar color="primary" dark>
        <v-card-title>Todo List</v-card-title>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  //   name: "Log In"
  data: () => ({
    adding: false,
    items: [
      { header: "Today" },
      {
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      { divider: true, inset: true },
      {
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      { divider: true, inset: true },
      {
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
      },
      { divider: true, inset: true },
      {
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
      },
      { divider: true, inset: true },
      {
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  }),
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
