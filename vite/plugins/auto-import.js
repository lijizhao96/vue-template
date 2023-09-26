import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      'vue-i18n',
      {
        'vue': [
          'defineProps',
          'defineEmits',
          'defineExpose',
          'withDefaults',
        ],
        '@/api': [
          ['default', 'http'],
        ],
        'js-storage': [
          ['default', 'storage'],
        ],
      },
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [],
  })
}
