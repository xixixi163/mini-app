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

组件使用了`install`，可全局注册组件
`app.use(lotus)`

## 组件开发
组件放在 src 目录下
`tree -N -d -I "node_modules" `
```
──mini-app
    ├──src 组件根目录 
    │   |--button 示例组件
    │   |   └──index.ts 导出该组件 install 组件
    |   |   └──button.vue 给组件命名
    │   └──index.ts 导出所有组件
    └──index.ts 导出所有组件 app.use 组件
```
组件还没打包时，更改了内容，pnpm链接的项目也会更着改依赖包

## 组件属性提示，借助vscode 的 volar 给全局组件加上提示效果
`pnpm add @vue/runtime-core -D -w`
src 下新建`components.d.ts`
当使用组件库的时候，需要在`tsconfig.json`配置--暂无效果
```
"compilerOptions": {
    //...
    "types": ["lutus-leaf/lib/src/components"]
  },
```

## 打包
`pnpm add vite @vitejs/plugin-vue -D`
配置build，使打包后的结构和我们开发的结构一致，样式分开打包，使样式按需

## 声明文件
目前打包的组件库只能给js 项目使用，在ts 项目运行会出现一些错误，而且使用的时候还会失去代码提示功能，这样的话我们就失去了用 ts 开发组件库的意义了。所以我们需要在打包的库里加入声明文件（`.d.ts`）

安装 `vite-plugin-dts` 插件,注意版本最好一致

## glup 流程化控制
项目开发过程中自动执行常见任务。
比如打包一个组件库，我们可能要移除文件、copy文件，打包样式、打包组件、执行一些命令还有一键打包多个package等等都可以由gulp进行自定义流程的控制

安装脚手架：`npm install --global gulp-cli`

### demo
`npm init -y`
`pnpm install gulp -D`
create `gulpfile.js`

创建Task
串行、并行任务
文件复制

处理less 文件
`npm i -D gulp-less`

给css 文件加前缀，使用9以下版本，9版本支持了esmodule，require报错
`npm install gulp-autoprefixer -D`

### 监听文件更改 HMR
`browser-sync`是一个十分好用的浏览器同步测试工具，它可以搭建静态服务器，监听文件更改，并刷新页面（HMR）

`npm i browser-sync -D`
根目录新建`index.html`

## gulp 打包组件库并实现按需加载

### 删除打包文件
安装node 获取路径：`pnpm add @types/node -D -w`
新建 /script/utils/paths.ts 维护路径

删除打包目录函数 bulid/utils/delpath.ts
注意这里因为打包后的包是我们最终要发布的包,所以我们需要将package.json和README.md保留下来

### gulp 支持最新语法和ts
 sucras 让我们执行 gulp 可以使用最新语法并且支持 ts
`pnpm i gulp @types/gulp sucrase -D -w`

### 执行删除流程
build/index
package配置脚本



