<template>
  <div class="columns">
    <div class="column is-full has-background-primary">full</div>
  </div>
  <div class="columns">
    <div class="column is-one-fifth has-background-link">
      <button class="button" @click="handletest">取数</button>
    </div>
    <div class="column has-background-warning">Auto</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { loginByUserId } from "../api";
export default defineComponent({
  name: "Hello",
  props: {},
  setup(props) {
    const handletest = async () => {
      try {
        let { data, status } = await loginByUserId(1);
        if ((status = 200)) {          
          console.log(data[0].name);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return {
      handletest,
    };
  },
});
</script>
<style>
</style>