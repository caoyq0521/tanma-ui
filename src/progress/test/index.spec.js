import { mount } from '@vue/test-utils';
import { sleep } from '../../util/util';
import TmProgress from '../progress.vue';

describe('tmProgress', () => {
  
  // it('end after 5s', async () => {
  //   const wrapper = mount(TmProgress, {
  //     propsData: {
  //       start: false,
  //       end: false
  //     }
  //   });
  //   wrapper.setProps({
  //     start: true
  //   })
  //   await sleep(3000)
  //   wrapper.setProps({
  //     end: true
  //   })
  //   await wrapper.vm.$nextTick()
  //   console.log(wrapper.find('.el-progress-bar__inner').element.style)
  //   expect(wrapper.find('.el-progress-bar__inner').element.style.backgroundColor).toBe('rgb(103, 194, 58)');
  // });
  
  // it('error after 5s', async () => {
  //   const wrapper = mount(TmProgress, {
  //     propsData: {
  //       start: false,
  //       end: false
  //     }
  //   });
  //   wrapper.setProps({
  //     start: true
  //   })
  //   await sleep(1000);
  //   wrapper.setProps({
  //     end: true
  //   })
  //   await sleep(0)
  //   expect(wrapper.find('.el-progress-bar__inner').element.style.backgroundColor).toBe('rgb(245, 108, 108)');
  // });

})
  