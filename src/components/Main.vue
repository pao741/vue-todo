<template>
  <v-app>
    <v-container>
      <div class="text-center">
        <v-dialog v-model="adding" @click:outside="clear" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Fill in the form
            </v-card-title>
            <v-row justify="center" class="ma-5">
              <v-col>
                <v-text-field
                  class="header"
                  v-model="title"
                  placeholder="Title"
                ></v-text-field>
                <v-text-field
                  class="header"
                  v-model="description"
                  placeholder="Description"
                ></v-text-field>
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
                @click="
                  adding = false;
                  createTodo();
                "
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
          <v-card-subtitle>Total: 0</v-card-subtitle>
          <v-card-subtitle>Done: 0</v-card-subtitle>
        </v-toolbar>
        <v-progress-linear
          value="50"
          background-color="green lighten-3"
          color="green lighten-1"
          striped
        ></v-progress-linear>
        <v-list three-line>
          <v-list-item v-for="item in todos" v-bind:key="item.date">
            <v-row>
              <v-col>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.description"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Due date: {{ item.date }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col md="2">
                <v-checkbox v-model="item.isDone"></v-checkbox>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase";
import "firebase/database";

const database = firebase.database();

export default {
  //   name: "Log In"
  data: () => ({
    title: "",
    description: "",
    dating: false,
    date: null,
    adding: false,
    todos: null,
    todosRef: null,
  }),
  created() {
    this.todosRef = database.ref(`/users/${this.$store.state.auth.user.uid}`);
  },
  mounted() {
    this.todosRef.on("value", (snapshot) => {
      this.todos = snapshot.val();
    });
  },
  computed: {
    // orderedTodos() {
    // return _.orderBy(this.todos, 'name')
    // }
  },
  methods: {
    createTodo() {
      this.todosRef.push({
        title: this.title.trim(),
        description: this.description.trim(),
        date: this.date,
        isDone: false,
      });
      this.title = "";
      this.description = "";
      // this.isDone = null;
    },
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$router.push("/login");
      } catch (e) {
        alert(e);
        // this.errorMessage = e.message;
      }
    },
    add() {
      this.todos.push({
        title: this.title,
        description: this.description,
        isDone: this.isDone,
      });
      this.title = "";
      this.description = "";
      this.isDone = null;
    },
    delete() {
      database.ref(`/users/${this.$store.state.auth.data.id}`).set({});
    },
    clear() {
      this.title = "";
      this.description = "";
      this.date = null;
    },
    progress() {
      let count = 0;
      this.todos.forEach((item) => {
        if (item.isDone) {
          count += 1;
        }
      });
      return count / this.todos.length;
    },
  },
};
</script>
