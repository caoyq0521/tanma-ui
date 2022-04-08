import { mount } from '@vue/test-utils';
import TmCascader from '../cascader.vue';

describe('tmCascader', () => {
  it('render cascader', () => {
    const wrapper = mount(TmCascader);
    expect(wrapper).toMatchSnapshot();
  });
})
  