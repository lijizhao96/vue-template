// 默认路由
const constantRoutes = [
  {
    path: '/join',
    name: 'join',
    component: () => import('@/views/join/index.vue'),
    meta: {
      title: 'route.join',
    },
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
    meta: {
      title: 'route.not-page',
    },
  },
]

// 系统路由
const systemRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/main.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'route.index',
        },
      },
      {
        path: '/game',
        name: 'game',
        component: () => import('@/views/game/index.vue'),
        meta: {
          title: 'route.game',
        },
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: 'route.user',
        },
      },
    ],
  },
]

export default [
  ...constantRoutes,
  ...systemRoutes,
]
