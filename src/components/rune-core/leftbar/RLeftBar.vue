<template>
  <div class="RLeftBar">
    <div class="RHSplit"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '../../../styles/vars.scss';

.RLeftBar {
  position: relative;
  height: calc(100vh - #{$nav-height-desktop});
  width: 200px;

  .RHSplit {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 192px;
    width: 8px;
    background-color: var(--c-bg-mute);
    box-shadow: 10px 0 10px -10px rgb(0 0 0 / 10%);
    cursor: col-resize;
  }
}
</style>
