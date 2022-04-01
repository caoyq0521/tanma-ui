import { mount } from '@vue/test-utils';
import TmButton from '../button.vue';

describe('tmButton', () => {
  it('render tmButton', () => {
    const wrapper = mount(TmButton);
    expect(wrapper).toMatchSnapshot();
 
  });

  it('create button', () => {
    const wrapper = mount(TmButton);

    expect(wrapper.find('.tm-button').exists()).toBe(true);
  });

  it('whether type of button', async () => {
    const wrapper = mount(TmButton);

    await wrapper.setProps({ type: 'default' });
    expect(wrapper.find('.tm-button--default').exists()).toBe(true);

    await wrapper.setProps({ type: 'primary' });
    expect(wrapper.find('.tm-button--primary').exists()).toBe(true);

    await wrapper.setProps({ type: 'danger' });
    expect(wrapper.find('.tm-button--danger').exists()).toBe(true);

    await wrapper.setProps({ type: 'addition' });
    expect(wrapper.find('.tm-button--addition').exists()).toBe(true);

    await wrapper.setProps({ type: 'forbidden' });
    expect(wrapper.find('.tm-button--forbidden').exists()).toBe(true);

    await wrapper.setProps({ type: 'wicked' });
    expect(wrapper.find('.tm-button--wicked').exists()).toBe(true);

    await wrapper.setProps({ type: 'text' });
    expect(wrapper.find('.tm-button--text').exists()).toBe(true);
  });

  it('whether size of button', async () => {
    const wrapper = mount(TmButton);

    await wrapper.setProps({ type: 'medium' });
    expect(wrapper.find('.tm-button--medium').exists()).toBe(true);

    await wrapper.setProps({ type: 'small' });
    expect(wrapper.find('.tm-button--small').exists()).toBe(true);

  });
  it('whether disabled of button', () => {
    const wrapper = mount(TmButton, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.find('.disabled').exists()).toBe(true);
  });

  it('whether loading of button', () => {
    const wrapper = mount(TmButton, {
      propsData: {
        loading: true
      }
    });

    expect(wrapper.find('.tm-icon-load').exists()).toBe(true);
  });

  it('whether round of button', () => {
    const wrapper = mount(TmButton, {
      propsData: {
        round: true
      }
    });

    expect(wrapper.find('.is-round').exists()).toBe(true);
  });
})

