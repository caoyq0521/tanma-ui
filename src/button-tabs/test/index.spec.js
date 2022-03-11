import { mount } from '@vue/test-utils';
import TmButtonTabs from '../button-tabs.vue';

describe('tm-button-tabs', () => {
  it('render button-tabs', () => {
    const wrapper = mount(TmButtonTabs);
    expect(wrapper).toMatchSnapshot();
  });
})
  