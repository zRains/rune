import type { Ref } from 'vue'
import type { RuneCompConfig } from '../types/rune'
import { setTransferData, setStyle } from './helpers'

export function createDraggableComp<T extends RuneCompConfig>(
  originalComp: Ref<HTMLElement | undefined>,
  runeCompConfig: T,
  dragStartStyle = {},
  dragEndStyle = {}
) {
  function onDragStart(event: DragEvent) {
    const target = event.target as HTMLElement
    const transfer = event.dataTransfer!
    transfer.effectAllowed = 'copy'
    setTransferData(transfer, runeCompConfig)
    setStyle(target, dragStartStyle)
  }

  function onDragEnd(event: DragEvent) {
    const target = event.target as HTMLElement
    setStyle(target, dragEndStyle)
  }

  function destroyDraggableComp() {
    originalComp.value!.removeEventListener('dragstart', onDragStart)
    originalComp.value!.removeEventListener('dragend', onDragEnd)
  }

  originalComp.value!.addEventListener('dragstart', onDragStart)
  originalComp.value!.addEventListener('dragend', onDragEnd)

  return {
    destroyDraggableComp
  }
}
