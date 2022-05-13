import { mount } from '@vue/test-utils';
import TmBlock from '../block.vue';

describe('tmBlock', () => {
  it('render block', () => {
    const wrapper = mount(TmBlock);
    expect(wrapper).toMatchSnapshot();
  });

  it('title', () => {
    const wrapper = mount({
      template: `<tm-block title="测试标题">测试内容</tm-block>`
    });

    expect(wrapper.find('.tm-block__title').text()).toContain('测试标题');

    expect(wrapper.find('.tm-block__content').text()).toContain('测试内容');
  });
})
  