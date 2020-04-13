<template>
  <div class="user">
    this is user layout
    <!-- if you "remove" quasar component(line:8), you can see user profile below -->
    <!-- else don't use vue class component -->
    <q-btn>Test</q-btn>    
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component";

@Component
export default class Users extends Vue {}
</script>