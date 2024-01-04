export * from './src/index'
// 注册全局组件/插件
import * as components from './src/index'
import { App } from 'vue'

export default {
    install: (app: App) => {
        for (let c in components) {
            app.use(components[c])
        }
    }
}