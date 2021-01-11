<template>
  <div>
    <ul v-if="item.children && item.children.length > 0">
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
        <template v-for="(c, i) of item.children" :key="i">
          <menu-item :item="c" />
        </template>
      </li>
    </ul>
    <ul v-else>
      <router-link :to="item.link || item.path">{{ item.title }}</router-link>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { IRouterItem } from "../typings";
export default defineComponent({
  name: "MenuItem",
  props: {
    item: {
      type: Object as PropType<IRouterItem>,
      required: true,
    },
  },
  setup() {},
});
</script>
<style>
</style>