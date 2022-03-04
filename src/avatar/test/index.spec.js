import { mount } from '@vue/test-utils';
import TmAvatar from '../avatar.vue';

describe('tmAvatar', () => {
  it('avatar component is exist', () => {
    const wrapper = mount(TmAvatar);
    expect(wrapper.find('.tm-avatar').exists()).toBe(true);
  });
})
  