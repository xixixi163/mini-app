import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [vue()],
    build: {
        // 打包后的文件目录
        outDir: 'es',
        // 压缩
        minify: false,
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                },
                dir: 'dist'
            }
        },
        lib: {
            entry: "./index.ts",
            name: 'lotus-leaf',
            fileName: 'lotus-leaf',
            formats: ['es', 'umd', 'cjs']
        }
    }
})