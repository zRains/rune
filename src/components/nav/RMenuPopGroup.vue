<template>
  <div class="RMenuPopGroup">
    <div v-if="text" class="title">{{ text }} <Icon icon="ion:chevron-forward" /></div>
    <div class="OutsidePop">
      <template v-for="item in items" :key="item.text">
        <RMenuButton :class="{ OutsidePopItem: true }" :item="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItemWithLink } from '../../types/nav'
import RMenuButton from './RMenuButton.vue'

defineProps<{
  text?: string
  items: NavItemWithLink[]
}>()
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.RMenuPopGroup {
  position: relative;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .OutsidePop {
    position: absolute;
    min-width: 130px;
    padding: 6px;
    top: -6px;
    left: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: var(--c-bg-mute);
    border: 1px solid rgb(0 0 0 / 10%);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
    line-height: 100%;
    border-radius: 3px;
    color: var(--c-black);

    .OutsidePopItem {
      padding: 4px 8px;
      border-radius: 3px;

      &:hover {
        background-color: var(--c-black-mute);
        color: var(--c-white-mute);
      }
    }
  }

  &:hover .OutsidePop {
    visibility: visible;
    opacity: 1;
  }
}
</style>
