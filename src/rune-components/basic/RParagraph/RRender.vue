<template>
  <div class="RRender RParagraphRender">
    <p
      class="mainContentArea"
      contenteditable="true"
      ref="paragraph"
      @input="$emit('onTextUpdate', ($event.target as HTMLInputElement).textContent)"
      @blur="disableMask = false"
    ></p>
    <div :class="{ mask: true, disable: disableMask }">
      <div class="maskOpt edit" @click="editParagraph"><Icon icon="fluent:code-text-edit-20-regular" height="23" /></div>
      <div class="maskOpt delete"><Icon icon="fluent:delete-dismiss-28-regular" height="23" /></div>
      <div class="maskOpt move"><Icon icon="fluent:arrow-bidirectional-up-down-24-regular" height="23" /></div>
    </div>
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
const disableMask = ref(false)

function editParagraph() {
  disableMask.value = true
  paragraph.value!.focus()
}

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
  position: relative;
  background-color: var(--c-white-mute);
  border-radius: 3px;

  .mainContentArea {
    margin: 0;
    padding: 8px;
    font-size: 16px;
    outline: none;
  }

  .mask {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--c-text-dark-2);
    border-radius: 3px;
    opacity: 0;

    .maskOpt {
      padding: 4px;
      height: 23px;
      width: 23px;
      border: 1px solid rgb(0 0 0 / 10%);
      border-radius: 50%;
      cursor: pointer;

      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }

      &:not(:first-child, :last-child) {
        margin: 0 8px;
      }

      &:hover {
        background-color: rgb(0 0 0 / 10%);
      }

      &.move {
        cursor: grab;

        &:active {
          cursor: grabbing;
        }
      }
    }

    &.disable {
      display: none;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
