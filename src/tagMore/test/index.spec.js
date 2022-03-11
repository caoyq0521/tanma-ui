import { mount } from '@vue/test-utils';
import TmTagMore from '../tagMore.vue';

describe('tmTagMore', () => {
  it('render tag-more', () => {
    const wrapper = mount(TmTagMore);
    expect(wrapper).toMatchSnapshot();
  });
})
  