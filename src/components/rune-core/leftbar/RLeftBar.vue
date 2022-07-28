<template>
  <div class="RLeftBar">
    <div class="RLeftBarContainer">
      <RUtilSection />
      <RComponentSection />
    </div>
    <RHSplit />
  </div>
</template>

<script setup lang="ts">
import RUtilSection from './RUtilSection.vue'
import RComponentSection from './RComponentSection.vue'
import RHSplit from '../../internal/RHSplit.vue'
</script>

<style lang="scss">
@import '../../../styles/vars.scss';

.RLeftBar {
  position: relative;
  height: calc(100vh - #{$nav-height-desktop});
  width: 200px;

  .RLeftBarContainer {
    min-height: 100%;
    margin-right: 8px;
  }
}
</style>
