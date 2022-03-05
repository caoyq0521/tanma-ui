import { mount } from '@vue/test-utils';
import TmTip from '../tip.vue';

describe('tmTip', () => {
  it('render tip', () => {
    const wrapper = mount(TmTip);
    expect(wrapper).toMatchSnapshot();
  });
})
  