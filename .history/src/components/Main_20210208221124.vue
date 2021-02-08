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
    <div class="text-center">
      <v-dialog :value="adding" persistent width="500">
        <v-card v-click-outside="">
          <v-card-title class="headline grey lighten-2">
            Fill in the form
          </v-card-title>
          <v-row justify="center" class="ma-5">
            <v-col>
              <v-text-field class="header" placeholder="Title"></v-text-field
              ><v-text-field class="header" placeholder="Title"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="ma-1">
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
    </div>
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

const LOCAL_STORAGE_KEY = "todo-app-vue";
export default {
  //   name: "Log In"
  data: () => ({
    adding: false,
    title: "Todos",
    todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
      { text: "Learn JavaScript ES6+ goodies", isDone: true },
      { text: "Learn Vue", isDone: false },
      { text: "Build something awesome", isDone: false }
    ],
    editing: null
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
    },
    watch: {
      todos: {
        deep: true,
        handler(newValue) {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
        }
      }
    }
  }
};
</script>
