import { mount } from '@vue/test-utils';
import TmTagPro from '../tagPro.vue';

describe('tmTagPro', () => {
  it('render tagPro', () => {
    const wrapper = mount(TmTagPro);
    expect(wrapper).toMatchSnapshot();
  });
})
  