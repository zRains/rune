<template>
  <RButton :class="{ RMenuButton: true }" :on-click="item.onClick">{{ item.text }}</RButton>
</template>

<script setup lang="ts">
import type { NavItemWithButton } from '../../../types/nav'
import RButton from '../../internal/RButton.vue'

defineProps<{
  item: NavItemWithButton
}>()
</script>

<style lang="scss"></style>
