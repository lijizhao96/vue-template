import path from 'node:path'
import process from 'node:process'

import { defineConfig, loadEnv } from 'vite'
import { createPostcssPlugins, createVitePlugins } from './vite/plugins'

export default async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: './',
    server: {
      open: true,
      proxy: {
        '/proxy': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          rewrite: path => path.replace(/\/proxy/, ''),
        },
      },
    },
    build: {
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) { // 静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[2].split('/')[0].toString()
            }
          },
        },
      },
    },
    plugins: createVitePlugins(env, command === 'build'),
    css: {
      postcss: {
        plugins: createPostcssPlugins(),
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
