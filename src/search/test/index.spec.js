import { mount } from '@vue/test-utils';
import TmSearch from '../search.vue';

const TIPS = '描述'

describe('tmSearch', () => {
  it('placeholder', () => {
    const wrapper = mount(TmSearch, {
      propsData: {
        placeholder: '测试占位符内容',
      }
    });
    expect(wrapper.find('.tm-title__content').attributes('style')).toContain('font-size: 20px');
  });
  
  it('', ()=> {
    const wrapper = mount(TmSearch, {
      propsData: {

      }
    });
    expect(wrapper.find('.tm-title__content').attributes('style')).toContain('font-size: 20px');
  })
})
