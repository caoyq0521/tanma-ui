import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
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
    expect(wrapper.find('.tm-pagination__pager').exists()).toBe(true);
    expect(wrapper.find('.button-next').exists()).toBe(true);
    expect(wrapper.find('.tm-pagination__sizes').exists()).toBe(true);
  });

  it('mode easy', () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        mode: 'easy' 
      },
      localVue
    });

    expect(wrapper.find('.interval').exists()).toBe(true);
  });

  it('pageSize', () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        pageSize: 20,
        total: 100
      },
      localVue
    });

    expect(wrapper.findAll('span.number')).toHaveLength(5);
  });

  it('pagerCount', () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        pageSize: 20,
        total: 1000,
        pagerCount: 21
      },
      localVue
    });

    expect(wrapper.findAll('span.number')).toHaveLength(21);
  });

  it('currentPage', async () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        pageSize: 20,
        total: 200,
        currentPage: 3
      },
      localVue
    });

    expect(wrapper.find('span.number.active').text()).toBe('3');
  });

  it('currentPage: NaN', () => {
    const wrapper = shallowMount(TmPagination, {
     propsData: {
      pageSize: 20,
      total: 200,
      currentPage: NaN
     },
     localVue
    });

    expect(wrapper.find('span.number.active').text()).toBe('1');
    expect(wrapper.findAll('span.number')).toHaveLength(7);
  });

  it('buttonPrev and buttonNext: click', async () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        total: 200
      },
      localVue
    });

    expect(wrapper.vm.internalCurrentPage).toBe(1);

    await wrapper.find('.button-next').trigger('click');
    expect(wrapper.vm.internalCurrentPage).toBe(2);

    await wrapper.find('.button-prev').trigger('click');
    expect(wrapper.vm.internalCurrentPage).toBe(1);
  });
})
  