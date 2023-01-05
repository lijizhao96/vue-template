import legacy from '@vitejs/plugin-legacy';

export default function createLegacy() {
    return legacy({
        targets: ['defaults', 'not IE 11'],
    })
}