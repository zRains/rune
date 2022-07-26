<template>
  <div class="RPopWrapper" ref="el" @mouseenter="isActivated = true" @mouseleave="isActivated = false">
    <div class="trigger" aria-haspopup="true" :aria-expanded="isActivated" :aria-label="label" @click="isActivated = !isActivated">
      <template v-if="text">
        {{ text }}
      </template>
      <Icon icon="fluent:more-horizontal-32-filled" height="20" v-else />
    </div>

    <RMenuPop :items="items" @click="() => clickToClose && (isActivated = !isActivated)">
      <slot />
    </RMenuPop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavItemChildren, NavItemWithLink } from '../../types/nav'
import RMenuPop from './RMenuPop.vue'

defineProps<{
  text?: string
  label?: string
  items: (NavItemChildren | NavItemWithLink)[]
  clickToClose?: boolean
}>()

const isActivated = ref(false)
</script>

<style lang="scss">
@use 'sass:math';
@import '../../styles/vars.scss';

.RPopWrapper {
  position: relative;

  .trigger {
    height: $nav-height-desktop;

    &[aria-expanded='true'] {
      & + .RMenuPop {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}
</style>
