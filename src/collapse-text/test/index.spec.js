import { createLocalVue,shallowMount } from '@vue/test-utils';
import TmCollapseText from '../collapse-text.vue';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('tmCollapseText', () => {

  it('create', () => {
    const wrapper = shallowMount(TmCollapseText, {
      localVue
    });
    expect(wrapper.find('.tm-collapse-text__content').exists()).toBe(true);
    expect(wrapper.find('.tm-collapse-text__action').exists()).toBe(false);
    expect(wrapper.find('.tm-collapse-text__popover').exists()).toBe(false);
  })

  it('text',()=>{
    const wrapper = shallowMount(TmCollapseText, {
      propsData: {
        text: '这是一段文本'
      },
      localVue
    });

    expect(wrapper.find('.tm-collapse-text__content').exists()).toBe(true);
    expect(wrapper.html()).toContain('这是一段文本')
  })

  it('lines', ()=>{
    const wrapper = shallowMount(TmCollapseText, {
      propsData: {
        text: '这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容',
        lines: 1
      },
      localVue
    });
    const div = wrapper.find({ ref: 'collapseText' })
    div.element.style = "width:50px;font-size:16px;line-height:18px"
    expect(wrapper.find('.tm-collapse-text__content').exists()).toBe(true);
  })

})
  