import { mount } from '@vue/test-utils';
import TmTagCombo from '../tagCombo.vue';

describe('tmTagCombo', () => {
  it('render tag-combo', () => {
    const wrapper = mount(TmTagCombo);
    expect(wrapper).toMatchSnapshot();
  });
})
  