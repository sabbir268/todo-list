<template>
  <v-list-item class="task-view" @dblclick="edit(task)">
    <v-list-item-action @click="completeTask(task)">
      <v-icon>{{task.status ? 'radio_button_checked' : 'radio_button_unchecked' }}</v-icon>
      <!-- <v-icon>radio_button_checked</v-icon> -->
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title :class="task.status ? 'strikethrough' : ''">
        <span v-if="!doEdit">{{task.title}}</span>
        <v-text-field v-else label="Edit" v-model="task.title" v-on-clickaway="update"></v-text-field>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click="deleteTask(task)" small fab class="close-btn" color="red">
        <v-icon>close</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  props: ["task"],
  mixins: [clickaway],
  data() {
    return {
      showRemove: false,
      doEdit: false,
      updateTask: ""
    };
  },
  methods: {
    update: function() {
      this.doEdit = false;
      //this.task.title = this.updateTask;
    },
    edit: function(status) {
      if (status.status == 0) {
        this.doEdit = true;
      }
    },
    deleteTask(task) {
      this.$store.dispatch("removeTask", task);
      this.$store.dispatch("deleteTask", task);

      this.$store.dispatch("getTasks");
    },
    completeTask(task) {
      this.$store.dispatch("completeTask", task);

      this.task.status = 1;
    }
  }
};
</script>

<style>
.close-btn {
  visibility: hidden !important;
}
.strikethrough {
  text-decoration: line-through;
}

.task-view:hover .close-btn {
  visibility: visible !important;
}
</style>