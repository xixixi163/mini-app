import type { Plugin } from 'vue';
import { withInstall } from '@/shared/common';
import VirtualList from './VirtualList.vue';

type SFCWithInstall<T> = T & Plugin;
export const LlVirtualList: SFCWithInstall<typeof VirtualList> =
  withInstall(VirtualList);
export default LlVirtualList;
