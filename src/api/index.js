import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASEURL
axios.defaults.timeout = 20 * 1000

axios.defaults.headers['Version'] = '1.0.0'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截
axios.interceptors.request.use(
  config => {
    const t = new Date().valueOf()
    config.headers['t'] = t
    return config
  },
  error => {
    return error
  }
)

// 响应拦截
axios.interceptors.response.use(
  ({ data }) => {
    return Promise.resolve(data)
  },
  err => {
    return Promise.reject(err)
  }
)

export default {
  get: (url, params) => {
    return axios.get(url, { params })
  },

  post: (url, params) => {
    return axios.post(url, params)
  },

  axios
}
