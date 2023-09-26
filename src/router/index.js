import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/modules'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (_, __, next) => {
  next()
})

router.afterEach((_, __) => {

})

export default router
