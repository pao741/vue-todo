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
                :label="`With date: ${dating.toString()}`"
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
              @click="printDate"
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
        <template v-for="item in todos">
          <v-list-item :key="item.title">
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.description"
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
    title: "",
    description: "",
    dating: false,
    date: null,
    adding: false,
    todos: [
      {
        title: "Learn JavaScript",
        description: "some description",
        isDone: true,
        dueDate: null
      },
      {
        title: "Learn Vue",
        description: "more description",
        isDone: false,
        dueDate: null
      },
      {
        title: "Build something awesome",
        description: "also description",
        isDone: false,
        dueDate: "10-12-2021"
      }
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
          // console.log("sign out successful");
          this.$router.push("/login");
        })
        .catch(error => {
          // An error happened.
          alert(error);
        });
    },
    add() {
      this.todos.push({
        title: this.title,
        description: this.description,
        isDone: false
      });
    },
    delete(item) {
      this.todos = this.todos.filter(function(obj) {
        return obj !== item;
      });
    },
    printDate() {
      console.log(this.date);
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
