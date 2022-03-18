import { mount } from '@vue/test-utils';
import TmTagGroup from '../tagGroup.vue';

describe('tmTagGroup', () => {
  it('render tag-more', () => {
    const wrapper = mount(TmTagGroup);
    expect(wrapper).toMatchSnapshot();
  });
})
  