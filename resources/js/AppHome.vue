<template>
  <div class="ma-5 pa-5">
    <v-container>
      <v-row>
        <v-col md="6" class="mx-md-auto gray">
          <v-card class="pa-3" outlined tile>
            <NewTask></NewTask>
            <ListTask :tasks="tasks"></ListTask>
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
    return {
      // tasks: [
      //   { title: "Do it now", status: 0 },
      //   { title: "Do it now 2", status: 0 },
      //   { title: "Do it now 3", status: 1 }
      // ]
    };
  },
  mounted() {
    this.$store.dispatch("getTasks");
  },
  computed: {
    ...mapGetters(["tasks"])
  }
};
</script>
