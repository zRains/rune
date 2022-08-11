import type { Ref } from 'vue'
import type { RuneCompConfig } from '../types/rune'
import { setTransferData, setStyle } from './helpers'

export function createDraggableComp<T extends RuneCompConfig>(
  originalComp: Ref<HTMLElement | undefined>,
  runeCompConfig: T,
  dragStartStyle = {},
  dragEndStyle = {}
) {
  function onMouseDown() {
    originalComp.value!.setAttribute('draggable', 'true')
  }

  function onMouseUp() {
    originalComp.value!.setAttribute('draggable', 'false')
  }

  function onDragStart(event: DragEvent) {
    const transfer = event.dataTransfer!
    transfer.effectAllowed = 'copy'
    setTransferData(transfer, runeCompConfig)
    setStyle(originalComp.value!, dragStartStyle)
  }

  function onDragEnd() {
    originalComp.value!.setAttribute('draggable', 'false')
    setStyle(originalComp.value!, dragEndStyle)
  }

  function destroyDraggableComp() {
    originalComp.value!.removeEventListener('dragstart', onDragStart)
    originalComp.value!.removeEventListener('dragend', onDragEnd)
    originalComp.value!.removeEventListener('mousedown', onMouseDown)
    originalComp.value!.removeEventListener('mouseup', onMouseUp)
  }

  originalComp.value!.addEventListener('dragstart', onDragStart)
  originalComp.value!.addEventListener('dragend', onDragEnd)
  originalComp.value!.addEventListener('mousedown', onMouseDown)
  originalComp.value!.addEventListener('mouseup', onMouseUp)

  return {
    destroyDraggableComp
  }
}
