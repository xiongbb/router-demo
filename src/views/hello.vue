<template>
<div class="columns">
    <div class="column is-full has-background-primary">full</div>     
  </div>
  <div class="columns">
    <div class="column is-one-fifth has-background-link">is-one-fifth</div>
    <div class="column has-background-warning">Auto</div>    
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hello",
  props: {},
  setup(props) {},
});
</script>
<style>
</style>