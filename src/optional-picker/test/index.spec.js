import { mount } from '@vue/test-utils';
import TmOptionalPicker from '../optional-picker.vue';

describe('TmOptionalPicker', () => {
  it('render optional-picker', () => {
    const wrapper = mount(TmOptionalPicker);
    expect(wrapper).toMatchSnapshot();
  });
})
  