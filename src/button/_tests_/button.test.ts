import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import button from '../button.vue';
describe('hello button', () => {
  it('should render slot', () => {
    /**
     * 传入 button 组件,并将其默认 slot 设置为 lotus,
     * 我们期望页面加载的时候文本会展示lotus,
     * 很显然我们的 button 组件是有这个功能的,所以我们执行pnpm run test的时候这条测试就通过了
     */
    const wrapper = mount(button, {
      slots: {
        default: 'lotus'
      }
    });

    // 确认组件所呈现的文本是否正确
    expect(wrapper.text()).toContain('lotus');
  });
  /**
   * 当我们传入的type为primary的时候,期望组件的类名为ea-button--primary
   */
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('ll-button--primary');
  });
});
