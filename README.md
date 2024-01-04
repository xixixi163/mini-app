# mini-app
# 安装
## 包安装
使用ts，vue3，less 管理。`-w` 表示安装在项目根目录，`@next `表示安装在vue的下一个版本，也就是预览版本或者开发版本。
`pnpm add vue@next typescript less -D -w`

## 初始化ts
`npx tsc --init`: npx 是 npm 的一个子命令，允许在没有安装包的情况下允许包的命令。
会生成一个 `tsconfig.json` 文件，https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## 初始化vue3项目用于测试组件
`pnpm init`
`pnpm add vite @vitejs/plugin-vue -D`
配置 `vite.config.ts` 文件
创建 `index.html` ,引入入口文件。`@vitejs/plugin-vue`插件会默认加载index入口
新建 `app.vue`
新建 `main.ts` 挂载节点
`package.json` 配置脚本启动
配置vue ts 声明文件：`vue-shim.d.ts`，让 ts 认识 `*.vue` 文件

添加该组件库 `pnpm add @lotus-leaf/mini-app`
使用组件，可以看到热更新

## 组件开发
组件放在 src 目录下
`tree -N -d -I "node_modules" `
```
──mini-app
    ├──src 组件根目录 
    │   |--button 示例组件
    │   |   └──index.ts 导出该组件
    │   └──index.ts 导出所有组件
    └──index.ts 导出所有组件
```
