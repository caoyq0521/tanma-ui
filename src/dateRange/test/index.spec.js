import { mount } from '@vue/test-utils';
import TmDateRange from '../date-range.vue';

describe('tmDateRange', () => {
  it('render date-range', () => {
    const wrapper = mount(TmDateRange);
    expect(wrapper).toMatchSnapshot();
  });
})
  