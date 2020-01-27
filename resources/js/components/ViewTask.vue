<template>
  <v-list-item class="task-view" @dblclick="edit(task.status)">
    <v-list-item-action @click="task.status = 1">
      <v-icon>{{task.status ? 'radio_button_checked' : 'radio_button_unchecked' }}</v-icon>
      <!-- <v-icon>radio_button_checked</v-icon> -->
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title :class="task.status ? 'strikethrough' : ''">
        <span v-on-clickaway="update" v-if="!doEdit">{{task.title}}</span>
        <v-text-field v-on-clickaway="update" v-else :label="task.title"></v-text-field>
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-icon class="close-btn">close</v-icon>
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
      doEdit: false
    };
  },
  methods: {
    update: function() {
      this.doEdit = false;
    },
    edit: function(status) {
      if (status == 0) {
        this.doEdit = true;
      }
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