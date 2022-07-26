<template>
  <RPopWrapper :class="{ RNavBarMenuGroup: true }" :text="item.text" :items="item.children" :click-to-close="true" />
</template>

<script setup lang="ts">
import type { NavItemWithChildren } from '../../types/nav'
import RPopWrapper from './RPopWrapper.vue'

defineProps<{
  item: NavItemWithChildren
}>()
</script>

<style lang="scss">
.VRNavBarMenuGroup {
  padding: 0 12px;
}
</style>
