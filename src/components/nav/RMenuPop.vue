<template>
  <ul class="RMenuPop">
    <li v-for="item in items" :key="item.text">
      <div :class="{ RMenuPopItemIcon: true, hasPadding }"><component v-if="'icon' in item" :is="item.icon" /></div>
      <RMenuGroup :class="{ RMenuPopItem: true }" v-if="'items' in item" :text="item.text" :items="item.items" />
      <RMenuButton :class="{ RMenuPopItem: true }" v-else :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavItemChildren, NavItemWithButton } from '../../types/nav'
import RMenuButton from './RMenuButton.vue'
import RMenuGroup from './RMenuPopGroup.vue'

const props = defineProps<{
  items: (NavItemChildren | NavItemWithButton)[]
}>()

const hasPadding = computed(() => props.items.some((item) => 'toggle' in item))
</script>

<style lang="scss">
@use 'sass:math';
@import '../../styles/vars.scss';

.RMenuPop {
  display: block;
  position: absolute;
  min-width: 120px;
  margin: 0;
  padding: 6px;
  top: math.div($nav-height-desktop, 2) + 20px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background-color: var(--c-bg-mute);
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
  line-height: 100%;
  border-radius: 3px;

  li {
    display: flex;
    align-items: center;
    padding: 4px 0;
    border-radius: 3px;
    list-style: none;

    &:hover {
      background-color: var(--c-black-mute);
      color: var(--c-white-mute);
    }
  }

  .RMenuPopItemIcon.hasPadding {
    width: 14px;
  }

  .RMenuPopItem {
    flex-grow: 1;
    padding: 0 8px;
    list-style: none;
    white-space: nowrap;
  }
}
</style>
