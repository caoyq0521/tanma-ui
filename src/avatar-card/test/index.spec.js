import { mount } from '@vue/test-utils';
import TmAvatarCard from '../avatar-card.vue';

describe('tmAvatarCard', () => {
  it('render avatar-card', () => {
    const wrapper = mount('TmAvatarCard');
    expect(wrapper).toMatchSnapshot();
  });
})
  