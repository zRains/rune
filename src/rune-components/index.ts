import { defineAsyncComponent } from 'vue'

export const RParagraph = defineAsyncComponent({
  loader: () => import('./RParagraph.vue')
})
