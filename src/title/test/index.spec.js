import { mount } from '@vue/test-utils';
import TmTitle from '../title.vue';

const TIPS = '描述';

describe('tmTitle', () => {
  it('title', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        title: '测试标题'
      }
    });
    expect(wrapper.find('.tm-title__content').text()).toBe('测试标题');
  });

  it('titleSize', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        titleSize: 20
      }
    });
    expect(wrapper.find('.tm-title__content').attributes('style')).toContain('font-size: 20px');
  });

  it('required', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        required: true
      }
    });
    expect(wrapper.find('.is-required').exists()).toBe(true);
  });

  it('showOptional', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        showOptional: true
      }
    });
    expect(wrapper.find('.tm-title__optional').exists()).toBe(true);
  });

  it('tips', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        tips: TIPS
      }
    });
    expect(wrapper.html()).toContain(`${TIPS}`);
  });

  it('tipsSize', async () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        tips: TIPS,
        tipsSize: 16
      }
    });
    expect(wrapper.find('.tm-title__tips').attributes('style')).toContain('font-size: 16px');
  });

  it('tipsInBrackets', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        tips: TIPS,
        tipsInBrackets: true
      }
    });
    expect(wrapper.html()).toContain(`(${TIPS})`);
  });

  it('tipsTheme', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        tips: TIPS,
        tipsTheme: 'danger'
      }
    });
    expect(wrapper.find('.tm-title__tips--danger').exists()).toBe(true);
  });

  it('withBackgroundColor', () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        withBackgroundColor: true
      }
    });
    expect(wrapper.attributes('style')).toBeDefined();
  });

  it('backgroundColor', async () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        withBackgroundColor: true
      }
    });
    expect(wrapper.attributes('style')).toBeDefined();

    await wrapper.setProps({
      backgroundColor: 'red'
    });
    expect(wrapper.attributes('style')).toContain('background-color: red');
  });

  it('radius', async () => {
    const wrapper = mount(TmTitle, {
      propsData: {
        withBackgroundColor: true
      }
    });
    expect(wrapper.attributes('style')).toBeDefined();

    await wrapper.setProps({
      radius: 10
    });
    expect(wrapper.attributes('style')).toContain('border-radius: 10px');
  });

});