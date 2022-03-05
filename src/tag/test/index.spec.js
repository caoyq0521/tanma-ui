import { mount } from '@vue/test-utils';
import TmTag from '../tag.vue';

describe('tmTag', () => {
  it('render tag', () => {
    const wrapper = mount('TmTag');
    expect(wrapper).toMatchSnapshot();
  });
})
  