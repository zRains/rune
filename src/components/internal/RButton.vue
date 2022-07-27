<template>
  <div class="RButton" @click="onClick">
    <component v-if="prefixIcon" :is="prefixIcon" />
    <slot name="prefix-icon"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { VNode } from 'vue'

defineProps<{
  prefixIcon?: VNode
  onClick?: () => void
}>()
</script>

<style lang="scss"></style>
