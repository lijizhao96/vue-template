import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createComponents from './components'
import createCompression from './compression'
import createHtml from './html'
import createLegacy from './legacy'
import createRollupPluginVisualizer from './rollup-plugin-visualizer'

export default function createVitePlugins(viteEnv, isBuild = false, primitive = false) {
    const vitePlugins = [vue()]
    
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createComponents())
    vitePlugins.push(createCompression())
    vitePlugins.push(createLegacy())
    vitePlugins.push(createHtml(viteEnv, isBuild, primitive))
    vitePlugins.push(createRollupPluginVisualizer())

    return vitePlugins
}
