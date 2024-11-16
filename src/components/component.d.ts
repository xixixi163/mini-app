import * as components from './index';
declare module '@/vue/runtime-core' {
  export interface GlobalComponents {
    LlButton: typeof components.Button;
    LlIcon: typeof components.Icon;
    LlVirtualList: typeof components.LlVirtualList;
  }
}

export {};
