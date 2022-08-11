<template>
  <div class="RMainContainer">
    <!-- TODO test draggable area -->
    <!-- <div id="RDraggableArea" ref="originalArea">
      <template v-for="(runeComp, index) in originalCompArr" :key="runeComp.name + index">
        <component :is="runeComp.comp" :index="index" />
      </template>
    </div> -->
    <draggable item-key="id" :component-data="{ id: 'RDraggableArea' }" v-model="originalCompArr" v-bind="dragOptions">
      <template #item="{ element }">
        <component :is="element.comp" :id="element.id" />
      </template>
    </draggable>
    {{ originalCompArr.map((c) => c.id) }}
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
// TODO test code
import { ref, Ref, nextTick } from 'vue'
import { creteDraggableArea } from '../../../utils/draggableArea'

// const onTextUpdate = function (val: string) {
//   console.log(val)
// }

const originalCompArr: Ref<{ id: string; name: string; comp: any }[]> = ref([])

function dragOptions() {
  return {
    disabled: false,
    ghostClass: 'ghost'
  }
}

nextTick(() => {
  creteDraggableArea(document.getElementById('RDraggableArea')!, originalCompArr)
})
</script>

<style lang="scss">
.RMainContainer {
  flex-grow: 1;

  #RDraggableArea {
    margin: 16px;
    padding: 8px;
    min-height: 200px;
    border: 2.5px dashed var(--c-black-soft);

    .RRender:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
