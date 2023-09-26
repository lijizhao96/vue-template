import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'

import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import zhTW from 'vant/es/locale/lang/zh-TW'

import messages from '@/locales/lang'

import useSettingsStore from '@/store/modules/settings'

export function setupI18n() {
  const settingsStore = useSettingsStore()
  // 如果没设置语言，则根据当前浏览器语言设置默认语言
  if (!settingsStore.defaultLang) {
    const lang = navigator.language.toLowerCase()
    storage.localStorage.set('lang', lang)
    settingsStore.defaultLang = lang
  }
  setupVantLoca(settingsStore.defaultLang)
  const i18n = createI18n({
    legacy: false,
    locale: settingsStore.defaultLang,
    flatJson: true,
    fallbackLocale: 'en-us',
    messages,
  })
  return i18n
}

function setupVantLoca(lang) {
  switch (lang) {
    case 'zh-cn':
      Locale.use(lang, zhCN)
      break

    case 'zh-tw':
      Locale.use(lang, zhTW)
      break

    default:
      Locale.use(lang, enUS)
      break
  }
}

export function useI18n(app) {
  app.use(setupI18n())
}
