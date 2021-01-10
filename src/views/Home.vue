<template>
  <div class="columns mheader">
    <div class="column is-full has-background-black has-text-justified">
      <h1 class="title ml-3 mt-3 has-text-white-bis">Router Demo</h1>
    </div>
  </div>
  <div class="columns mcontainer">
    <div class="column is-one-fifth has-background-grey-lighter">      
      <button class="button" @click="handletest">取数</button>
    </div>
    <div class="column has-background-white-bis">     
      <router-view/>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
// import { loginByUserId } from "../api";
export default defineComponent({
  name: "Home",
  props: {},
  setup(props) {
    const handletest = async () => {
      // try {
      //   let { data, status } = await loginByUserId(1);

      //   if ((status = 200)) {
      //     console.log(data);
      //   }
      // } catch (err) {
      //   console.log(err);
      // }
    };

    return {
      handletest,
    };
  },
});
</script>
<style>
.mheader {
  height: 80px;
}
.mcontainer {
  height: 100%;
}
</style>