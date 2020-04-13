<template>
  <div class="user">
    this is user layout
    <!-- if you "remove" q-btn, you can see user profile below -->
    <!-- "remove" not "comment it" -->
    <q-btn>user btn</q-btn>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component";

@Component
export default class Users extends Vue {
  show = false;
}
</script>