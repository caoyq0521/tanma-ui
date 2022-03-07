import { mount } from '@vue/test-utils';
import TmUpload from '../upload.vue';

describe('tmUpload', () => {
  it('render upload', () => {
    const wrapper = mount(TmUpload);
    expect(wrapper).toMatchSnapshot();
  });
})
  