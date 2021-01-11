<template>
  <div class="columns mheader">
    <div class="column is-full has-background-black has-text-justified">
      <h1 class="title ml-3 mt-3 has-text-white-bis">Router Demo</h1>
    </div>
  </div>
  <div class="columns mcontainer">
    <div class="column is-one-fifth has-background-grey-lighter">
      <side-bar />
    </div>
    <div class="column has-background-white-bis">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
  },
});
</script>

<style>
#app {
  height: 100%;
}
.mheader {
  height: 80px;
}
.mcontainer {
  height: 100%;
}
</style>