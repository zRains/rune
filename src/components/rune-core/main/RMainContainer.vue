<template>
  <div class="RMainContainer">
    <!-- TODO test draggable area -->
    <div class="RDraggableArea" ref="dropZoneEl">
      <template v-for="(runeComp, index) in containerElArr" :key="runeComp.id + index">
        <component :is="runeComp.comp" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO test code
import { ref, onMounted, defineAsyncComponent, Ref, markRaw } from 'vue'

const dropZoneEl = ref<HTMLElement>()
const containerElArr: Ref<{ id: string; comp: any }[]> = ref([])

function onDragover(event: DragEvent) {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'copy'
}

function onDragEnter(event: DragEvent) {
  const target = event.target as HTMLElement
  target.style.border = '2.5px dashed var(--c-green)'
}

function onDragLeave(event: DragEvent) {
  const target = event.target as HTMLElement
  target.style.border = '2.5px dashed var(--c-black-soft)'
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  const target = event.target as HTMLElement
  const data = event.dataTransfer!.getData('runeCompId')
  containerElArr.value.push({
    id: 'RParagraph',
    comp: markRaw(defineAsyncComponent({ loader: () => import(/* @vite-ignore */ data) }))
  })
  target.style.border = '2.5px dashed var(--c-black-soft)'
}

onMounted(() => {
  dropZoneEl.value!.addEventListener('dragover', onDragover)
  dropZoneEl.value!.addEventListener('drop', onDrop)
  dropZoneEl.value!.addEventListener('dragenter', onDragEnter)
  dropZoneEl.value!.addEventListener('dragleave', onDragLeave)
})
</script>

<style lang="scss">
.RMainContainer {
  flex-grow: 1;

  .RDraggableArea {
    margin: 16px;
    min-height: 200px;
    border: 2.5px dashed var(--c-black-soft);
  }
}
</style>
