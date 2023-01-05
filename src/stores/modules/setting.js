import { getUrlParams } from '@/utils'
const urlParams = getUrlParams() || {}

const useSettingStore = defineStore(
  // 唯一ID
  'setting',
  {
    state: () => ({
    }),
    getters: {
    },
    actions: {
    },
  },
)

export default useSettingStore