import { createLocalVue,shallowMount } from '@vue/test-utils';
import TmOptionalPicker from '../optional-picker.vue';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('TmOptionalPicker', () => {
  it('create', () => {
    const wrapper = shallowMount(TmOptionalPicker, {
      localVue
    });
    expect(wrapper.find('.tm-optional-picker').exists()).toBe(true);
  })
})
  