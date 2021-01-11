<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <template v-for="(item, index) of userRouters" :key="index">
        <menu-item :item="item" />
      </template>
    </ul>
  </aside>
</template>

<script lang='ts'>
import { computed, defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";
import { useStore } from "vuex";
import { IRouterItem, IState } from "../typings";

export default defineComponent({
  name: "SideBar",
  components: {
    MenuItem,
  },
  setup() {
    const store = useStore<IState>();
    return {
      userRouters: computed(() => store.state.userRouters),
    };
  },
});
</script>
<style>
</style>