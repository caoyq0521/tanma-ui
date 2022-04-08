import { mount } from '@vue/test-utils';
import TmCascaderPanel from '../cascader-panel.vue';

describe('tmCascader-panel', () => {
  it('render cascader-panel', () => {
    const wrapper = mount(TmCascaderPanel);
    expect(wrapper).toMatchSnapshot();
  });
})
  