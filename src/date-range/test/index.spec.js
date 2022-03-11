import { mount } from '@vue/test-utils';
import TmDateRange from '../date-range.vue';

describe('tmDateRange', () => {
  it('render tmDateRange', () => {
    const wrapper = mount(TmDateRange);
    expect(wrapper).toMatchSnapshot();
  });

  it('', () => {
    
  })
})
  