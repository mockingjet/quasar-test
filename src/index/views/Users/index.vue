<template>
  <div class="home">
    this is user layout
    <router-view />
  </div>
</template>

<script lang="ts">
import * as v from "vue-property-decorator";

@v.Component
export default class Users extends v.Vue {}
</script>