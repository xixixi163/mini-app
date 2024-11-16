import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

/**
 * 注册插件，包括componnet，使可以通过app.use 挂载全局
 * @param comp
 * 类型
 * ts
 * interface App {
 *   use(plugin: Plugin, ...options: any[]): this
 * }
 * 详细信息
 *
 * 第一个参数应是插件本身，可选的第二个参数是要传递给插件的选项。
 *
 * 插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数。
 * 插件选项 (app.use() 的第二个参数) 将会传递给插件的 install() 方法。
 *
 * 若 app.use() 对同一个插件多次调用，该插件只会被安装一次。
 */
export const withInstall = <T extends Record<string, unknown>>(
  comp: T
): SFCWithInstall<T> => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    typeof comp.name === 'string' && app.component(comp.name, comp);
  };
  return comp as SFCWithInstall<T>;
};
