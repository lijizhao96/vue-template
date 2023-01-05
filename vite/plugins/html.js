import { createHtmlPlugin } from 'vite-plugin-html'

const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
const copyright_main_style = `${copyright_common_style} background: #e24329;`
const copyright_sub_style = `${copyright_common_style} background: #707070;`
const copyright_sub_time = JSON.stringify(new Date().toLocaleString())

export default function createHtml(env, isBuild) {
    const { VITE_APP_TITLE, VITE_APP_DEBUG_TOOL, VITE_APP_PRIMITIVE } = env
    const html = createHtmlPlugin({
        inject: {
            data: {
                title: VITE_APP_TITLE,
                debugTool: VITE_APP_DEBUG_TOOL,
                copyrightScript: `
                <script>
                    console.info('%c由%cTiam%c提供技术支持', '${copyright_sub_style}', '${copyright_main_style}', '${copyright_sub_style}');
                    console.log(Build Time: ${copyright_sub_time})
                </script>
                `
            }
        },
        minify: true
    })
    return html
}
