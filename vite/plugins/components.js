import components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
    return components({
        dirs: ['src/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
        resolvers: [VantResolver()],
        dts: false
    })
}
