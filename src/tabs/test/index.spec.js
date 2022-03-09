import { mount } from '@vue/test-utils';
import TmTabs from '../tabs.vue';

describe('tmTabs', () => {
  it('render tabs', () => {
    const wrapper = mount(TmTabs);
    expect(wrapper).toMatchSnapshot();
  });
})
  