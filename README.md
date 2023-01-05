# 一个开箱即用的Vue3.0 + Vite + Pnpm的脚手架

1. Vue3.0 + Pinia + Vite + Pnpm
2. 环境变量处理 本地/测试/生产
3. 常用Vite插件处理
    1. unplugin-auto-import：自动导入Vue常用的方法
    2. unplugin-vue-components：自动导入components文件夹内封装的组件页面直接使用
    3. vite-plugin-compression：打包文件压缩，集成gzip/br压缩
    4. vite-plugin-html：html文件上ejs支持
    5. @vitejs/plugin-legacy：兼容低版本浏览器
    6. rollup-plugin-visualizer：打包文件可视化分析，默认在主目录生成可视化stats.html文件
4. 打包文件分包处理

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Testing

```sh
pnpm build-dev
```

### Compile and Minify for Production

```sh
pnpm build
```

