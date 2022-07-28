<template>
  <RAppLayout>
    <template #nav><RNav /></template>
    <template #main>
      <RMainLayout>
        <template #left-bar><RLeftBar /></template>
        <template #main-container><RMainContainer /></template>
      </RMainLayout>
    </template>
  </RAppLayout>
</template>

<script setup lang="ts">
import RAppLayout from './layouts/RAppLayout.vue'
import RMainLayout from './layouts/RMainLayout.vue'
import RMainContainer from './components/rune-core/main/RMainContainer.vue'
import RLeftBar from './components/rune-core/leftbar/RLeftBar.vue'
import RNav from './components/nav/RNav.vue'
</script>

<style lang="scss"></style>
