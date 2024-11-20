/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  command: {
    name: 'my-command',
    description: 'My custom command',
    handler(args: unknown) {
      console.log(args, '=====');
      // 处理自定义命令的逻辑
    }
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      // 如果没有指定这个字段，则生成的类型会和 components下面的 vite.config.ts 同级
      outDir: ['./products/es/src', './products/lib/src'],
      tsconfigPath: './tsconfig.json'
    }),
    {
      name: 'styleImportReplace',
      generateBundle(config, bundle) {
        // 获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);
        console.log('key:', keys);
        for (const key of keys) {
          const bundler: any = bundle[key];
          // rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          this.emitFile({
            type: 'asset',
            fileName: key, // 文件名不变
            source: bundler.code.replace(/\.less/g, '.css')
          });
        }
      }
    }
  ],
  build: {
    // 压缩
    // minify: false,
    // 分割css
    // cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', /\.less/, 'lodash'],
      // external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: '../mini-app/products/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../mini-app/products/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  }
});
