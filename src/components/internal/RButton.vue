<template>
  <div class="RButton">
    <slot name="icon"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onClick?: () => void
}>()
</script>

<style lang="scss"></style>
