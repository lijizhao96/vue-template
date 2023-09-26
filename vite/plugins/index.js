import vue from '@vitejs/plugin-vue'

import createComponents from './components'
import createAutoImport from './auto-import'
import createCompression from './compression'
import createStyleVwLoader from './style-vw-loader'
import createSvgIcon from './svg-icon'

import createPxtovw from './postcss-px-to-viewport'

const postcssViewportConfig = {
  unitToConvert: 'px', // 需要转换的单位，默认为"px"
  viewportWidth: 375, // 设计稿的视口宽度
  unitPrecision: 6, // 单位转换后保留的精度
  viewportUnit: 'vw', // 希望使用的视口单位
  fontViewportUnit: 'vw', // 字体使用的视口单位
  minPixelValue: 1, // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
}

export function createVitePlugins(viteEnv, isBuild = false) {
  const plugins = [
    createStyleVwLoader(postcssViewportConfig),
    vue(),
  ]

  plugins.push(createComponents())
  plugins.push(createAutoImport())
  plugins.push(createSvgIcon(isBuild))
  isBuild && plugins.push(...createCompression(viteEnv))

  return plugins
}

export function createPostcssPlugins() {
  const plugins = [
    createPxtovw(postcssViewportConfig),
  ]

  return plugins
}
