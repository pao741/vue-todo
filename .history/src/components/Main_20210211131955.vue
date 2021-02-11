<template>
  <v-app>
    <div class="text-center">
      <v-dialog v-model="adding" @click:outside="adding = false" width="500">
        <v-card v-click-outside="">
          <v-card-title class="headline grey lighten-2">
            Fill in the form
          </v-card-title>
          <v-row justify="center" class="ma-5">
            <v-col>
              <v-text-field class="header" placeholder="Title"></v-text-field>
              <v-text-field class="header" placeholder="Title"></v-text-field>
              <v-switch
                v-model="dating"
                :label="`Dating: ${dating.toString()}`"
              ></v-switch>
              <v-row justify="center">
                <v-date-picker v-model="date" v-if="dating"></v-date-picker>
              </v-row>
            </v-col>
          </v-row>
          <v-row justify="center" class="ma-1">
            <v-btn
              class="mx-auto"
              justify="center"
              color="success"
              @click="adding = false"
            >
              Submit
            </v-btn>
            <v-btn
              class="mx-auto"
              justify="center"
              color="error"
              @click="adding = false"
            >
              Close
            </v-btn>
          </v-row>
        </v-card>
      </v-dialog>
    </div>
    <v-card class="mx-auto">
      <v-row justify="center" class="ma-5">
        <v-btn
          class="mx-auto"
          justify="center"
          color="success"
          @click="adding = true"
        >
          Add
        </v-btn>
        <v-btn class="mx-auto" justify="center" color="error" @click="logOut"
          >Log out</v-btn
        >
      </v-row>
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

const LOCAL_STORAGE_KEY = "todo-app-vue";
export default {
  //   name: "Log In"
  data: () => ({
    dating: false,
    date: null,
    adding: false,
    todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
      { text: "Learn JavaScript ES6+ goodies", isDone: true },
      { text: "Learn Vue", isDone: false },
      { text: "Build something awesome", isDone: false }
    ],
    editing: null,
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
          // console.log("sign out successful");
          this.$router.push("/login");
        })
        .catch(error => {
          // An error happened.
          alert(error);
        });
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
      }
    }
  }
};
</script>
