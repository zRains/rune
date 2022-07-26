import { createApp } from 'vue'

// components
import { Icon } from '@iconify/vue'
import App from './App.vue'

// styles
import './styles/index.scss'
import './styles/colors.scss'

createApp(App).component('Icon', Icon).mount('#app')
