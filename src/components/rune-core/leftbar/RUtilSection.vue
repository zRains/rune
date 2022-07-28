<template>
  <section class="RUtilSection">
    <div class="searchBox">
      <input type="text" id="searchComp" placeholder="Components..." v-model="searchCompText" />
      <label for="searchComp"><Icon :icon="searchCompText.length === 0 ? 'fe:search' : 'fe-close'" @click="searchCompText = ''" /></label>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchCompText = ref('')
</script>

<style lang="scss">
@import '../../../styles/vars.scss';

.RUtilSection {
  padding: 16px 8px;

  .searchBox {
    position: relative;
    input#searchComp {
      box-sizing: border-box;
      width: 100%;
      outline: none;
      margin: 0;
      padding: 4px 24px 4px 8px;
      font-family: $font-family-base;
      font-size: 16px;
      line-height: 20px;
      border: 1px solid var(--c-divider);
      border-radius: 3px;

      &:focus,
      &:active {
        border: 1px solid var(--c-text-2);
      }
    }

    label[for='searchComp'] {
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 0;
      right: 4px;
      color: var(--c-text-2);
    }
  }
}
</style>
