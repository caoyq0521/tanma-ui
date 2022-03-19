import { mount } from '@vue/test-utils';
import TmUpload from '../upload.vue';

describe('tmUpload', () => {
  it('render upload', () => {
    const wrapper = mount(TmUpload);
    expect(wrapper).toMatchSnapshot();
  });
  it('model', () => {
    const wrapper = mount(TmUpload, {
      propsData: {
        model: 'file'
      }
    });
    expect(wrapper.find('.local-upload-drag-component').exists()).toBe(true);
  });
  it('imgTitle', () => {
    const wrapper = mount(TmUpload, {
      propsData: {
        imgTitle: '测试内容'
      }
    });
    expect(wrapper.find('.image-single-uplaod_title').text()).toBe('测试内容')
  });
})
  