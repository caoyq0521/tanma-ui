import { mount } from '@vue/test-utils';
import TmAvatar from '../avatar.vue';

describe('tmAvatar', () => {
  it('imageSource', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        imageSource: 'https://caoyq0521.github.io/documentation/logo.png'
      }
    })
    // find 查找一个元素 exists 存在
    expect(wrapper.find('.el-image').exists()).toBe(true);
    // toBeDefined 不存在
    expect(wrapper.find('.tm-flex__center').exists()).toBeDefined();
  });

  it('mode', async () => {
    const wrapper = mount(TmAvatar);
    expect(wrapper.find('.tm-avatar__square').exists()).toBe(true);
    await wrapper.setProps({mode: 'circle' });
    expect(wrapper.find('.tm-avatar__circle').exists()).toBe(true);
  });

  it('iconType', async () => {
    const wrapper = mount(TmAvatar);
    // classes 类名 返回 class 名称的数组。或在提供 class 名的时候返回一个布尔值。
    // toContain 包含
    expect(wrapper.find('.tm-icon-zhaopian').exists()).toBe(true);
    await wrapper.setProps({iconType: 'person'});
    expect(wrapper.find('.tm-icon-touxiang').exists()).toBe(true);
    await wrapper.setProps({iconType: 'company'});
    expect(wrapper.find('.tm-icon-qiye').exists()).toBe(true);
    await wrapper.setProps({iconType: 'group'});
    expect(wrapper.find('.tm-icon-qunyunying1').exists()).toBe(true);
  });

  it('theme', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        theme: 'light'
      }
    });
    expect(wrapper.find('.tm-avatar__light').exists()).toBe(true);
  });

  it('width and height', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        width: 100,
        height: 200
      }
    });
    // attributes 属性
    expect(wrapper.find('.tm-avatar').attributes('style')).toContain('width: 100px');
    expect(wrapper.find('.tm-avatar').attributes('style')).toContain('height: 200px');
  });

  it('iconSize', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        iconSize: 18
      }
    });
    // attributes 属性
    expect(wrapper.find('.tm-avatar__icon').attributes('style')).toContain('font-size: 18px');
  });

  it('crop', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        imageSource: 'https://caoyq0521.github.io/documentation/logo.png',
        isCrop: true,
        crop: 'm50x50'
      }
    });
    expect(wrapper.vm.imageUrl).toBe('https://caoyq0521.github.io/documentation/logo.png!m50x50.png')
  });

  it('textImage', () => {
    const wrapper = mount(TmAvatar, {
      propsData: {
        textImage: '越来越好'
      }
    });
    expect(wrapper.find('.tm-avatar__text-image').text()).toContain('越')
  });
})
