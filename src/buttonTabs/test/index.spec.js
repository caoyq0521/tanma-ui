import { mount } from '@vue/test-utils';
import TmButtonTabs from '../button-tabs.vue';

describe('tm-button-tabs', () => {
  it('render buttonTabs', () => {
    const wrapper = mount(TmButtonTabs);
    expect(wrapper).toMatchSnapshot();
  });

  it('create button-tabs', () => {
    const wrapper = mount(TmButtonTabs);

    expect(wrapper.find('.tm-button-tabs').exists()).toBe(true);
  });

  it('whether type of button', async () => {
    const wrapper = mount(TmButtonTabs);

    await wrapper.setProps({ type: 'step' });
    expect(wrapper.find('.tm-button-tabs__step').exists()).toBe(true);

    await wrapper.setProps({ type: 'certainty' });
    expect(wrapper.find('.tm-button-tabs__certainty').exists()).toBe(true);

  });

})

  