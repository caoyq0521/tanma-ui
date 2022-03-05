import { mount } from '@vue/test-utils';
import TmTag from '../tag.vue';

describe('tmTag', () => {
  it('render tag', () => {
    const wrapper = mount(TmTag);
    expect(wrapper).toMatchSnapshot();
  });

  it('type', async () => {
    const wrapper = mount(TmTag);
    expect(wrapper.find('.tm-tag').exists()).toBe(true);

    await wrapper.setProps({ type: 'success' });
    expect(wrapper.find('.tm-tag--success').exists()).toBe(true);

    await wrapper.setProps({ type: 'info' });
    expect(wrapper.find('.tm-tag--info').exists()).toBe(true);

    await wrapper.setProps({ type: 'warning' });
    expect(wrapper.find('.tm-tag--warning').exists()).toBe(true);

    await wrapper.setProps({ type: 'danger' });
    expect(wrapper.find('.tm-tag--danger').exists()).toBe(true);
  });

  it('color', () => {
    const wrapper = mount(TmTag, {
      propsData: {
        color: 'red'
      }
    });

    expect(wrapper.find('.tm-tag').attributes('style')).toContain('background-color: red');
  });

  it('closable', () => {
    const wrapper = mount(TmTag, {
      propsData: {
        closable: true
      }
    });

    expect(wrapper.find('.tm-tag__closable').exists()).toBe(true);
  });

  it('effect dot', () => {
    const wrapper = mount(TmTag, {
      propsData: {
        effect: 'dot'
      }
    });

    expect(wrapper.find('.tm-tag--dot').exists()).toBe(true);

    expect(wrapper.find('.dot').exists()).toBe(true);
  });

  it('effect dot color', () => {
    const wrapper = mount(TmTag, {
      propsData: {
        effect: 'dot',
        color: 'red'
      }
    });

    expect(wrapper.find('.dot').attributes('style')).toContain('background-color: red');
  });

  it('closable is invalid when effect is dot', () => {
    const wrapper = mount(TmTag, {
      propsData: {
        effect: 'dot',
        closable: true
      }
    });

    expect(wrapper.find('.tm-tag__closable').exists()).toBe(false);
  });
})
  