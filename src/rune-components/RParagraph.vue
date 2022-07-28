<template>
  <div class="RParagraph">
    <div class="RParagraphIcon">
      <Icon icon="fa6-solid:paragraph" height="24" />
    </div>
    <div class="RParagraphSkeleton">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.RParagraph {
  display: flex;
  padding: 8px 8px 8px 0;
  margin: 0 8px;
  border: 1px solid var(--c-divider);
  border-radius: 3px;
  user-select: none;
  cursor: pointer;

  .RParagraphIcon {
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;

    .iconify {
      vertical-align: middle;
      color: var(--c-text-2);
    }
  }

  .RParagraphSkeleton {
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
