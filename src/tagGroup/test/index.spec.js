import { mount } from '@vue/test-utils';
import TmTagGroup from '../tagGroup.vue';

describe('tmTagGroup', () => {
  it('render tag-group', () => {
    const wrapper = mount(TmTagGroup);
    expect(wrapper).toMatchSnapshot();
  });
})
  