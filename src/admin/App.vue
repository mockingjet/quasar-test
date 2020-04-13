<template>
  <div id="app">
    this is admin
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="show">test transition</div>
    </transition>
    <q-btn @click="show=!show">click</q-btn>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import * as v from "vue-property-decorator";

@v.Component
export default class App extends v.Vue {
  show = false;
}
</script>