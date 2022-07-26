<template>
  <RButton :class="{ RMenuButton: true }" :on-click="item.onClick">{{ item.text }}</RButton>
</template>

<script setup lang="ts">
import type { NavItemWithLink } from '../../types/nav'
import RButton from '../internal/RButton.vue'

defineProps<{
  item: NavItemWithLink
}>()
</script>

<style lang="scss">
// .RMenuButton {
// }
</style>
