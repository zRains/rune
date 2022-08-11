import { ref, defineAsyncComponent, markRaw, Ref } from 'vue'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdef', 10)

let draggableArea: Ref<HTMLElement | undefined>
let compArr: Ref<{ id: string; name: string; comp: any }[] | undefined>

function onDragover(event: DragEvent) {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'copy'
  draggableArea.value!.style.border = '2.5px dashed var(--c-green)'
}

function onDragLeave(event: DragEvent) {
  event.preventDefault()
  draggableArea.value!.style.border = '2.5px dashed var(--c-black-soft)'
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  const runeCompPath = event.dataTransfer!.getData('path')
  compArr.value!.push({
    id: nanoid(),
    name: 'RParagraph',
    comp: markRaw(defineAsyncComponent({ loader: () => import(/* @vite-ignore */ runeCompPath) }))
  })
  draggableArea.value!.style.border = '2.5px dashed var(--c-black-soft)'
}

export function creteDraggableArea(originalArea: HTMLElement, originalCompArr: Ref<{ id: string; name: string; comp: any }[]>) {
  draggableArea = ref(originalArea)
  compArr = originalCompArr
  draggableArea.value!.addEventListener('dragover', onDragover)
  draggableArea.value!.addEventListener('drop', onDrop)
  draggableArea.value!.addEventListener('dragleave', onDragLeave)
}

export function destroyDraggableArea() {
  draggableArea.value = undefined
  compArr.value = undefined
  draggableArea.value!.removeEventListener('dragover', onDragover)
  draggableArea.value!.removeEventListener('drop', onDrop)
  draggableArea.value!.removeEventListener('dragleave', onDragLeave)
}
