<template>
  <div class="RRender RParagraphRender">
    <p
      class="mainContentArea"
      contenteditable="true"
      ref="paragraph"
      @input="$emit('onTextUpdate', ($event.target as HTMLInputElement).textContent)"
    ></p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// lock comp index
defineProps<{
  index: number
}>()
defineEmits(['onTextUpdate'])

const paragraph = ref<HTMLElement>()

onMounted(() => {
  paragraph.value!.addEventListener('paste', function (event) {
    const pasteHTML = event.clipboardData!.getData('text/html')
    const div = document.createElement('div')

    div.innerHTML = pasteHTML
    console.log(div)
  })
})
</script>

<style lang="scss">
.RParagraphRender {
  height: 100px;
  background-color: var(--c-white-mute);
  border-radius: 3px;

  .mainContentArea {
    margin: 0;
    outline: none;
  }
}
</style>
