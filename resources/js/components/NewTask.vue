<template>
  <v-text-field label="Task" v-model="newTask.title" outlined dense @keyup.enter="addTask"></v-text-field>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTask);
      this.$store.dispatch("getTasks");

      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["newTask"])
  }
};
</script>

<style>
</style>