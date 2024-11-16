export * from '@/components/index';
// 注册全局组件/插件
import * as components from '@/components/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
