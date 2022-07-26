<template>
  <nav class="RMenuBar">
    <template v-for="item in menuBarConfig" :key="item.text">
      <RMenuBarGroup :class="{ RMenuBarItem: true }" v-if="'children' in item" :item="item" />
      <RMenuButton :class="{ RMenuBarItem: true }" v-else :item="item" />
    </template>
  </nav>
</template>

<script setup lang="ts">
import type { NavItem } from '../../types/nav'
import RMenuButton from './RMenuButton.vue'
import RMenuBarGroup from './RMenuBarGroup.vue'

defineProps<{
  menuBarConfig: NavItem[]
}>()
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.RMenuBar {
  display: flex;
  margin: 0 8px;

  .RMenuBarItem {
    padding: 0 8px;
    line-height: $nav-height-desktop;
  }
}
</style>
