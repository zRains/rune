<template>
  <div class="MainLayout">
    <!-- nav -->
    <slot name="nav"></slot>
    <!-- mask -->
    <slot name="mask"></slot>
    <!-- main -->
    <slot name="main"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MainLayout {
  min-height: 100vh;
}
</style>
