<template>
  <div class="ma-5 pa-5">
    <v-container>
      <v-row>
        <v-col md="6" class="mx-md-auto gray">
          <v-card class="pa-3" outlined tile>
            <NewTask></NewTask>
            <div class="custom-body">
              <Router-view></Router-view>
            </div>
            <!-- <ListTask :tasks="tasks"></ListTask> -->
            <v-card-action>
              <v-divider></v-divider>
              <v-text>{{taskLeft}} Item Left</v-text>
              <v-chip class small to="/">All</v-chip>
              <v-chip class small to="/active">Active</v-chip>
              <v-chip class small to="/completed">Completed</v-chip>
              <v-chip class small @click="clearCompleted">Clear Completed</v-chip>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewTask from "./components/NewTask";
import ListTask from "./components/ListTask";

import { mapGetters } from "vuex";
export default {
  components: {
    NewTask,
    ListTask
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getTasks");
  },
  methods: {
    clearCompleted: function() {
      this.$store.dispatch("clearCompletedTask");
    }
  },
  computed: {
    ...mapGetters(["tasks"]),
    taskLeft: function() {
      let tasks = this.tasks;
      return this.tasks.filter(tasks => tasks.status == 0).length;
    }
  }
};
</script>

<style>
.custom-body {
  max-height: 300px;
  overflow: auto;
}
</style>