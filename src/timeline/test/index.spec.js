import { mount } from '@vue/test-utils';
import TmTimeline from '../timeline.vue';

describe('tmTimeline', () => {
  it('render timeline', () => {
    const wrapper = mount(TmTimeline);
    expect(wrapper).toMatchSnapshot();
  });
})
  