<template>
  <div class="RIndex RParagraphIndex" draggable="true" ref="draggableEl">
    <div class="icon">
      <Icon icon="fa6-solid:paragraph" height="24" />
    </div>
    <div class="skeleton">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { runeCompConfig } from '../../../types/rune'
import { setTransferData } from '../../../utils/helpers'

const RParagraphConfig: runeCompConfig = {
  name: 'RParagraph',
  path: '../rune-components/basic/RParagraph/RRender.vue'
}

const draggableEl = ref<HTMLElement>()

function onDragStart(event: DragEvent) {
  const target = event.target as HTMLElement
  const transfer = event.dataTransfer!
  target.style.opacity = '0.5'
  transfer.effectAllowed = 'copy'
  setTransferData(transfer, RParagraphConfig)
}

function onDragEnd(event: DragEvent) {
  const target = event.target as HTMLElement
  target.style.opacity = ''
}

onMounted(() => {
  draggableEl.value!.addEventListener('dragstart', onDragStart)
  draggableEl.value!.addEventListener('dragend', onDragEnd)
})
</script>

<style lang="scss">
.RParagraphIndex {
  display: flex;
  padding: 8px 8px 8px 0;
  margin: 0 8px;
  border: 1px solid var(--c-divider);
  border-radius: 3px;
  user-select: none;
  cursor: pointer;

  .icon {
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;

    .iconify {
      vertical-align: middle;
      color: var(--c-text-2);
    }
  }

  .skeleton {
    flex-grow: 1;

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        height: 8px;
        background-color: var(--c-text-3);
        border-radius: 5px;

        &:first-child {
          margin-left: 24px;
          width: calc(100% - 24px);
        }

        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
