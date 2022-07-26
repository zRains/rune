<template>
  <component
    :is="href ? 'a' : 'span'"
    class="RLink"
    :href="href"
    :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { isExternal } from '../../utils/helpers'

const props = defineProps<{
  href?: string
}>()

const isExternalLink = computed(() => props.href && isExternal(props.href))
</script>

<style lang="scss">
.VRLink {
  display: block;
  color: var(--c-text-1);
  text-decoration: none;
}
</style>
