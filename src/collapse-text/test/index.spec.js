import { mount } from '@vue/test-utils';
import TmCollapseText from '../collapseText.vue';

describe('tmCollapseText', () => {
  const wrapper = mount(TmCollapseText)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="tm-collapse-text__content">')
  })
})
  