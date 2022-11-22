import { mount } from '@vue/test-utils';
import TmTagPro from '../tagPro.vue';

describe('tmTagPro', () => {
  it('render tagPro', () => {
    const wrapper = mount(TmTagPro);
    expect(wrapper).toMatchSnapshot();
  });

  it('create', () => {
    const wrapper = mount(TmTagPro);

    expect(wrapper.find('.tm-tag-pro').exists()).toBe(true);
  });

  it('type', async () => {
    const wrapper = mount(TmTagPro);

    expect(wrapper.find('.tm-tag-pro--employee').exists()).toBe(true);

    await wrapper.setProps({
      type: 'individual'
    });
    expect(wrapper.find('.tm-tag-pro--individual').exists()).toBe(true);

    await wrapper.setProps({
      type: 'company'
    });
    expect(wrapper.find('.tm-tag-pro--company').exists()).toBe(true);

    await wrapper.setProps({
      type: 'department'
    });
    expect(wrapper.find('.tm-tag-pro--department').exists()).toBe(true);

    await wrapper.setProps({
      type: 'content'
    });
    expect(wrapper.find('.tm-tag-pro--content').exists()).toBe(true);

    await wrapper.setProps({
      type: 'group'
    });
    expect(wrapper.find('.tm-tag-pro--group').exists()).toBe(true);
  });

  it('closable', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        closable: true
      }
    });

    expect(wrapper.find('.tm-tag__closable').exists()).toBe(true);
  });

  it('icon', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        icon: 'icon-zu'
      }
    });

    expect(wrapper.find('.icon-zu').exists()).toBe(true);
  });

  it('name', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        name: '挂断电话'
      }
    });

    expect(wrapper.html()).toContain('挂断电话');
  });

  it('color', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        color: 'rgb(249, 216, 216)'
      }
    });

    expect(wrapper.find('.tm-tag-pro').attributes('style')).toContain('background-color: rgb(249, 216, 216)');
  });

  it('font color', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        fontColor: 'rgb(246, 113, 114)'
      }
    });

    expect(wrapper.find('.tm-tag-pro').attributes('style')).toContain('color: rgb(246, 113, 114)');
  });

  it('icon color', () => {
    const wrapper = mount(TmTagPro, {
      propsData: {
        iconColor: 'rgb(247, 151, 152)'
      }
    });

    expect(wrapper.find('.tm-tag-pro__icon i').attributes('style')).toContain('color: rgb(247, 151, 152)');
  });
})
  