import compression from 'vite-plugin-compression'

export default function createCompression() {
  return [
    compression({
      ext: '.gz',
      deleteOriginFile: false,
    }),
    compression({
      ext: '.br',
      algorithm: 'brotliCompress',
      deleteOriginFile: false,
    }),
  ]
}
