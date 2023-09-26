const useSettingsStore = defineStore(
  // 唯一ID
  'settings',
  () => {
    // 默认语言
    const defaultLang = ref(storage.localStorage.get('lang'))

    return {
      defaultLang,
    }
  },
)

export default useSettingsStore
