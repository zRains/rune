<template>
  <div class="RMenuPop">
    <template v-if="items">
      <template v-for="item in items" :key="item.text">
        <RMenuGroup :class="{ RMenuPopItem: true }" v-if="'items' in item" :text="item.text" :items="item.items" />
        <RMenuButton :class="{ RMenuPopItem: true }" v-else :item="item" />
      </template>
    </template>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavItemChildren, NavItemWithLink } from '../../types/nav'
import RMenuButton from './RMenuButton.vue'
import RMenuGroup from './RMenuPopGroup.vue'

defineProps<{
  items: (NavItemChildren | NavItemWithLink)[]
}>()
</script>

<style lang="scss">
@use 'sass:math';
@import '../../styles/vars.scss';

.RMenuPop {
  position: absolute;
  min-width: 130px;
  padding: 6px;
  top: math.div($nav-height-desktop, 2) + 20px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background-color: var(--c-bg-mute);
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  line-height: 100%;
  font-size: 15px;
  border-radius: 3px;

  .RMenuPopItem {
    padding: 4px 8px;
    border-radius: 3px;

    &:hover {
      background-color: var(--c-black-mute);
      color: var(--c-white-mute);
    }
  }
}
</style>
