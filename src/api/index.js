import axios from 'axios'

import useUserStore from '@/store/modules/user'

const api = axios.create({
  baseURL: (import.meta.env.DEV && import.meta.env.VITE_OPEN_PROXY === 'true') ? '/proxy/' : import.meta.env.VITE_APP_API_BASEURL,
  timeout: 1000 * 60,
  responseType: 'json',
})

api.interceptors.request.use(
  (request) => {
    const userStore = useUserStore()
    // 设置请求头
    if (request.headers) {
      if (userStore.isLogin) {
        request.headers.Token = userStore.token
      }
    }
    return request
  },
)

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
