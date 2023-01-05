import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia',
            {
                'vue': [
                    'defineProps',
                    'defineEmits',
                    'defineExpose',
                    'withDefaults'
                ],
                '@/api': [
                    ['default', 'http']
                ]
            }
        ],
        dirs: [],
        eslintrc: {},
        resolvers: [],
        dts: false
    })
}
