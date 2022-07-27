<template>
  <div class="RMenuPopGroup">
    <div v-if="text" class="title">{{ text }}<Icon icon="ion:chevron-forward" /></div>
    <ul class="OutsidePop">
      <li v-for="item in items" :key="item.text">
        <div :class="{ RMenuPopItemIcon: true, hasPadding }"><component v-if="'icon' in item" :is="item.icon" /></div>
        <RMenuButton :class="{ OutsidePopItem: true }" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavItemWithButton } from '../../types/nav'
import RMenuButton from './RMenuButton.vue'

const props = defineProps<{
  text?: string
  items: NavItemWithButton[]
}>()

const hasPadding = computed(() => props.items.some((item) => 'toggle' in item))
</script>

<style lang="scss">
@import '../../styles/vars.scss';

.RMenuPopGroup {
  position: relative;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconify {
      margin-left: 8px;
    }
  }

  .OutsidePop {
    position: absolute;
    min-width: 130px;
    margin: 0;
    padding: 6px;
    top: -10px;
    left: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: var(--c-bg-mute);
    border: 1px solid rgb(0 0 0 / 10%);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.07);
    line-height: 100%;
    border-radius: 3px;
    color: var(--c-black);

    li {
      display: flex;
      align-items: center;
      padding: 4px 0;
      border-radius: 3px;
      list-style: none;

      .RMenuPopItemIcon.hasPadding {
        width: 14px;
      }

      .OutsidePopItem {
        flex-grow: 1;
        padding: 0 8px;
      }

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
