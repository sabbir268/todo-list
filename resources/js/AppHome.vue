<template>
  <div class="ma-5 pa-5">
    <v-container>
      <v-row>
        <v-col md="6" class="mx-md-auto gray">
          <v-card class="pa-3" outlined tile>
            <NewTask></NewTask>
            <ListTask></ListTask>
            <v-checkbox v-model="test" :label="`Checkbox 1: ${test.toString()}`"></v-checkbox>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewTask from "./components/NewTask";
import ListTask from "./components/ListTask";

export default {
  components: {
    NewTask,
    ListTask
  },
  data() {
    return {
      test: true
    };
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
