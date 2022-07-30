<template>
  <div class="RMainContainer">
    <!-- TODO test draggable area -->
    <div id="RDraggableArea" ref="originalArea">
      <template v-for="(runeComp, index) in originalCompArr" :key="runeComp.name + index">
        <component :is="runeComp.comp" :index="index" @onTextUpdate="onTextUpdate" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO test code
import { ref, onMounted, Ref } from 'vue'
import { creteDraggableArea } from '../../../utils/draggableArea'

const onTextUpdate = function (val: string) {
  console.log(val)
}

const originalArea = ref<HTMLElement | undefined>()
const originalCompArr: Ref<{ name: string; comp: any }[]> = ref([])

onMounted(creteDraggableArea.bind(null, originalArea, originalCompArr))
</script>

<style lang="scss">
.RMainContainer {
  flex-grow: 1;

  #RDraggableArea {
    margin: 16px;
    min-height: 200px;
    border: 2.5px dashed var(--c-black-soft);
  }
}
</style>
