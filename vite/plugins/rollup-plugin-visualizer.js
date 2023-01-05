import { visualizer } from 'rollup-plugin-visualizer';

export default function createRollupPluginVisualizer() {
    return visualizer({
        emitFile: false,
        open: false //如果存在本地服务端口，将在打包后自动展示
    })
}