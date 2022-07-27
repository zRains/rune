<template>
  <nav class="RToolBar">
    <ul>
      <!-- <li class="RToolBarItem">
        <RButton :class="{ RToolBarBtn: true, importBtn: true }"><Icon icon="mdi:import" />Import</RButton>
      </li> -->
      <li class="RToolBarItem">
        <RButton :class="{ RToolBarBtn: true, exportBtn: true }"><Icon icon="ph:export-bold" />Export</RButton>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import RButton from '../internal/RButton.vue'
</script>

<style lang="scss">
.RToolBar {
  margin-left: auto;

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    .RToolBarItem {
      list-style: none;
      line-height: 100%;

      .RToolBarBtn {
        display: flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 3px;
        background-color: var(--c-text-1);
        color: var(--c-bg-mute);
        font-size: 15px;
        cursor: pointer;

        .iconify {
          margin-right: 4px;
        }

        &.exportBtn {
          background-color: var(--c-green);
        }
      }

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
}
</style>
