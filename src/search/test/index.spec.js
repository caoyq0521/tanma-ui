import { mount } from '@vue/test-utils';
import TmSearch from '../search.vue';

describe('tmSearch', () => {
  it('render tmSearch', () => {
    const wrapper = mount(TmSearch);
    expect(wrapper).toMatchSnapshot();
  });

  it('placeholder', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        placeholder: '测试占位符内容',
      },
    });
    expect(wrapper.find('.tm-search input').placeholder).toBe('测试占位符内容');
  });

  it('maxlength', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        maxlength: 10,
        value: '-'.repeat(20),
      },
    });
    expect(wrapper.find('.tm-search input').value.length).toBe(10);
  });

  // 值为空显示
  it('showIcon noValue', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        value: '',
      },
    });
    expect(wrapper.find('.tm-search el-icon-search').exists()).toBe(true);
  });

  // 有值则显示
  it('showIcon hasValue', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        value: '',
      },
    });
    expect(wrapper.find('.tm-search el-icon-search').exists()).toBe(false);
  });

  // 不允许输入特殊字符
  it('allowSpecialChar notAllow', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        allowSpecialChar: false,
        value: '@',
      },
    });
    expect(wrapper.find('.tm-search input').value).toBe('');
  });

  // 允许输入特殊字符
  it('test allowSpecialChar notAllow', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        allowSpecialChar: true,
        value: '@',
      },
    });
    expect(wrapper.find('.tm-search input').value).toBe('@');
  });
})
