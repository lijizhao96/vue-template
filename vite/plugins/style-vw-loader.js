function toFixed(number, precision) {
  const multiplier = 10 ** (precision + 1)
  const wholeNumber = Math.floor(number * multiplier)
  return (Math.round(wholeNumber / 10) * 10) / multiplier
}

function createPxReplace(
  viewportSize,
  minPixelValue,
  unitPrecision,
  viewportUnit,
) {
  return function ($0, $1) {
    if (!$1) {
      return
    }
    const pixels = Number.parseFloat($1)
    if (pixels <= minPixelValue) {
      return
    }
    return toFixed((pixels / viewportSize) * 100, unitPrecision) + viewportUnit
  }
}
const templateReg = /<template>([\s\S]+)<\/template>/gi
const pxGlobalReg = /(\d+)px/gi

function vitePluginStyleVWLoader(customOptions) {
  return {
    // 插件名称
    name: 'vite-plugin-style-vw-loader',
    // 构建阶段的通用钩子：在每个传入模块请求时被调用：在每个传入模块请求时被调用，主要是用来转换单个模块
    transform(code, id) {
      if (/.vue$/.test(id)) {
        let _source = ''
        if (templateReg.test(code)) {
          _source = code.match(templateReg)[0]
        }
        if (pxGlobalReg.test(_source)) {
          const $_source = _source.replace(
            pxGlobalReg,
            createPxReplace(
              customOptions.viewportWidth,
              customOptions.minPixelValue,
              customOptions.unitPrecision,
              customOptions.viewportUnit,
            ),
          )

          code = code.replace(_source, $_source)
        }
      }
      return { code }
    },
  }
}

export default function createStyleVwLoader(config) {
  return vitePluginStyleVWLoader(config)
}
