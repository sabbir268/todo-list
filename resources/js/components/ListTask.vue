<template>
  <v-list>
    <v-list-item-group>
      <ViewTask v-for="(task,i) in tasks" :key="i" :task="task"></ViewTask>
    </v-list-item-group>
  </v-list>
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
    ...mapGetters(["tasks"])
  }
};
</script>

<style>
</style>