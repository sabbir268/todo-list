<template>
  <v-list>
    <v-list-item-group tasks>
      <ViewTask v-for="(task,i) in tasks" :key="i" :task="task"></ViewTask>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
import ViewTask from "./ViewTask";

export default {
  props: ["tasks"],
  components: {
    ViewTask
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>