import components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

export default function createComponents() {
  return components({
    dirs: ['src/components'],
    resolvers: [VantResolver()],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
