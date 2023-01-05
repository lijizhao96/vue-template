import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'

export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: './',
    server: {
      host: '0.0.0.0',
      open: true,
      port: 9000,
      proxy: {
        "/api": {
          target: 'http://47.243.202.3:9901',
          rewrite: (path) => path.replace("/api", ""),
        }
      }
    },
    build: {
      sourcemap: env.VITE_BUILD_SOURCEMAP == 'true',
      minify: 'terser',
      cssCodeSplit: true,
      terserOptions: {
        compress: {
          drop_console: env.VITE_BUILD_DROP_CONSOLE == 'true'
        }
      },
      rollupOptions: {
        output: { //静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) { //静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    plugins: [
      ...createVitePlugins(env, command === 'build')
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
        }
      },
      postcss: {
        plugins: []
      }
    }
  })
}
