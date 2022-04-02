import { mount } from '@vue/test-utils';
import TmTimeline from '../timeline.vue';

describe('tmTimeline', () => {
  it('render timeline', () => {
    const wrapper = mount(TmTimeline);
    expect(wrapper).toMatchSnapshot();
  });

  it('create', () => {
    const wrapper = mount({
      template: `<tm-timeline>
        <tm-timeline-item
          v-for="(item, index) in activities" 
          :timestamp="item.timestamp"
          :key="index"
        >
        {{ item.content }}
        </tm-timeline-item>
      </tm-timeline>`,
      data() {
        return {
          activities: [
            {
              content: '活动按期开始',
              timestamp: '2018-04-15'
            }, 
            {
              content: '通过审核',
              timestamp: '2018-04-13'
            }, 
            {
              content: '创建成功',
              timestamp: '2018-04-11'
            }
          ]
        }
      }
    })

    console.log(wrapper.vm.activities);
    const contentElms = wrapper.findAll('.tm-timeline-item__content').at(0);
    console.log("caoyq0521 ~ file: index.spec.js ~ line 43 ~ it ~ contentElms", contentElms.html())
    // contentElms.forEach((elm, index) => {
    //   console.log(elm);
    //   // expect(elm.innerText).to.equal(vm.activities[index].content);
    // });

    // console.log(wrapper.findAll('.tm-timeline-item__content'));
  })
})
  