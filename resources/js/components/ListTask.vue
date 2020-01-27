<template>
  <v-list>
    <v-list-item-group >
      <ViewTask v-for="(task,i) in tasks" :key="i" :task="task"></ViewTask>
    </v-list-item-group>
  </v-list>
</template>

<script>
import ViewTask from "./ViewTask"
export default {
  components:{
    ViewTask
  },
  data() {
    return {
      tasks: [
        { title: "Do it now", status: 0 },
        { title: "Do it now 2", status: 0 },
        { title: "Do it now 3", status: 1 }
      ]
    };
  },
  method() {
    function toggle() {
      alert("hello");
    }
  }
};
</script>

<style>
</style>