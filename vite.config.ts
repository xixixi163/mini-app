import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
export default defineConfig({
    plugins: [vue(), dts({
        entryRoot: './src',
        // 如果没有指定这个字段，则生成的类型会和 components下面的 vite.config.ts 同级
        outDir: ['./es/src', './lib/src'],
        tsconfigPath: './tsconfig.json'
    })],
    build: {    
        // 打包后的文件目录
        outDir: 'es',
        // 压缩
        minify: false,
        rollupOptions: {
            external: ["vue"],
            input: ['index.ts'],
            output: [
                {
                    // 打包格式
                    format: "es",
                    // 打包后文件名
                    entryFileNames: "[name].mjs",
                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    // 配置打包根目录
                    dir: '../mini-app/es'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    exports: "named",
                    dir: "../mini-app/lib"
                }
            ]
        },
        lib: {
            entry: "./index.ts"
        }
    }
})