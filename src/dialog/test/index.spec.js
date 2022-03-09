import { mount } from '@vue/test-utils';
import TmDialog from '../dialog.vue';

describe('tmDialog', () => {
  it('render dialog', () => {
    const wrapper = mount(TmDialog);
    expect(wrapper).toMatchSnapshot();
  });
})
  