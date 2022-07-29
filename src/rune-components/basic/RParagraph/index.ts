import { defineAsyncComponent } from 'vue'

export const index = defineAsyncComponent({
  loader: () => import('./RIndex.vue')
})

export const render = defineAsyncComponent({
  loader: () => import('./RRender.vue')
})
