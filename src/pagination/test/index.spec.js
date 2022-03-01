import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import TmPagination from '../pagination.vue';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('tmPagination', () => {
  it('create', () => {
    const wrapper = shallowMount(TmPagination, {
      localVue
    });

    expect(wrapper.find('.tm-pagination__total').exists()).toBe(true);
    expect(wrapper.find('.button-prev').exists()).toBe(true);
    expect(wrapper.find('.button-next').exists()).toBe(true);
    expect(wrapper.find('.tm-pagination__sizes').exists()).toBe(true);
  });

  it('easy', () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        easy: true
      },
      localVue
    });

    expect(wrapper.find('.interval').exists()).toBe(true);
  });
})
  