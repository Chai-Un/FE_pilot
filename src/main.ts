import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { svgSpritePlugin } from 'vue-svg-sprite'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)

app.use(svgSpritePlugin, {
  url: '/static/icons/icons.svg',
  class: 'icon',
})
app.use(createPinia())
app.use(router)

app.mount('#app')
