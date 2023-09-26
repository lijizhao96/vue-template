import { createApp } from 'vue'

import App from '@/App.vue'
import pinia from '@/store'
import router from '@/router'
import { useI18n } from '@/locales'

import 'virtual:svg-icons-register'
import '@/assets/styles/globals.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

useI18n(app)

app.mount('#app')
