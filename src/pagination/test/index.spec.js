import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import TmPagination from '../pagination.vue';
import ElementUI, { Select } from 'element-ui';

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

  it('easy', () => {
    const wrapper = shallowMount(TmPagination, {
      propsData: {
        easy: true
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
    const spy = jest.spyOn(TmPagination.methods, "handlePrev");
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
    // console.log(spy);
    // expect(spy).toHaveBeenCalledWith(1);

  });

  it('pageSizes', async () => {
    const wrapper = mount(TmPagination, {
      propsData: {
        pageSizes: [10, 30, 35, 40],
        pageSize: 10
      }
    });

    // console.log(wrapper.vm.$el.querySelector('.tm-pagination__sizes'));

    // const bar = wrapper.findComponent(Select);
    // console.log("caoyq0521 ~ file: index.spec.js ~ line 113 ~ it ~ bar", bar)

    console.log(wrapper.find('.el-select'));

    await wrapper.find('.el-select').trigger('click');

    // console.log(wrapper.find('.tm-pagination__sizes-select-option'));
    // expect(wrapper.find('el-select-dropdown__item.selected>span').text()).toMatch('10');
  });
})
  