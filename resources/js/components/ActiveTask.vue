<template>
  <v-list-item-group>
    <ViewTask v-for="(task,i) in activeTasks" :key="i" :task="task"></ViewTask>
  </v-list-item-group>
</template>

<script>
import { mapGetters } from "vuex";
import ViewTask from "./ViewTask";

export default {
  components: {
    ViewTask
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["tasks"]),
    activeTasks: function() {
      let tasks = this.tasks;
      return this.tasks.filter(tasks => tasks.status == 0);
    }
  }
};
</script>

<style>
</style>