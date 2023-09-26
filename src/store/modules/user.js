import storage from '@/utils/storage'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const account = ref(storage.local.get('account') ?? '')
    const token = ref(storage.local.get('token') ?? '')

    const isLogin = computed(() => {
      let retn = false
      if (token.value) {
        retn = true
      }
      return retn
    })

    // 登录
    async function login() {
      // storage.local.set('account', res.data.account)
      // storage.local.set('token', res.data.token)
      // account.value = res.data.account
      // token.value = res.data.token
    }
    // 登出
    async function logout() {
      storage.local.remove('account')
      storage.local.remove('token')

      account.value = ''
      token.value = ''

      router.push({
        name: 'home',
        query: {},
      })
    }

    return {
      account,
      token,
      isLogin,
      login,
      logout,
    }
  },
)

export default useUserStore
