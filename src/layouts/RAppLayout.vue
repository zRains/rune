<template>
  <div class="MainLayout">
    <!-- nav -->
    <slot name="nav" />
    <!-- mask -->
    <slot name="mask" />
    <!-- main -->
    <slot name="main" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MainLayout {
  min-height: 100vh;
}
</style>
