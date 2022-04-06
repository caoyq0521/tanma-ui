import { mount } from '@vue/test-utils';
import TmSteps from '../steps.vue';

describe('tmSteps', () => {
  it('render steps', () => {
    const wrapper = mount(TmSteps);
    expect(wrapper).toMatchSnapshot();
  });
})
  