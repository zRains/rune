<template>
  <nav class="RNavSection">
    <ul>
      <li
        :class="{ active: navIndex === nav.id }"
        @click="navIndex = nav.id"
        v-for="nav in barNavigationConfig"
        :key="nav.text"
        ref="navEls"
      >
        {{ nav.text }}
      </li>
    </ul>
    <div
      class="activeMask"
      v-if="navLocations.length === 3"
      :style="{ width: navLocations[navIndex].offsetWidth + 'px', left: navLocations[navIndex].offsetLeft + 'px' }"
    ></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const barNavigationConfig = [
  {
    text: 'Style',
    id: 0
  },
  {
    text: 'Text',
    id: 1
  },
  {
    text: 'Arrange',
    id: 2
  }
]
const navEls = ref<HTMLElement[]>()
const navLocations = ref<{ offsetWidth: number; offsetLeft: number }[]>([])
const navIndex = ref(0)

nextTick(() => {
  navLocations.value = Array.from(navEls.value!).map((nav) => ({
    offsetWidth: nav.clientWidth,
    offsetLeft: nav.offsetLeft
  }))
})
</script>

<style lang="scss">
.RNavSection {
  position: relative;
  height: 30px;
  margin: 16px 8px;
  background-color: var(--c-bg);
  border-radius: 3px;
  user-select: none;

  ul {
    display: flex;
    position: relative;
    padding: 0;
    z-index: 2;

    li {
      flex-grow: 1;
      display: inline-block;
      list-style: none;
      line-height: 30px;
      transition: color 0.2s;
      border-radius: 3px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;

      &.active {
        color: var(--c-bg);
      }
    }
  }

  .activeMask {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: var(--c-black-mute);
    border-radius: 3px;
    transition: left 0.2s, width 0.2s;
    z-index: 1;
  }
}
</style>
