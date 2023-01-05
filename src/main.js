import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from './stores'

import './assets/style/base.scss'

const app = createApp(App)

app.use(pinia).use(router)

app.mount('#app')
