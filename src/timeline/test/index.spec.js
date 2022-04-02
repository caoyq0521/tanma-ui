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
    const { $el: el, activities } = wrapper.vm;
    const contentElms = el.querySelectorAll('.tm-timeline-item__content');
    const contentElmsArr = [...contentElms];
    contentElmsArr.forEach((elm, index) => {
      expect(elm.textContent).toContain(activities[index].content);
    });
  })

  it('hide timestamp', () => {
    const wrapper = mount({
      template: `<tm-timeline>
        <tm-timeline-item
          v-for="(item, index) in activities" 
          :timestamp="item.timestamp"
          :key="index"
          :hide-timestamp="item.hideTimestamp"
        >
        {{ item.content }}
        </tm-timeline-item>
      </tm-timeline>`,
      data() {
        return {
          activities: [
            {
              content: '活动按期开始',
              timestamp: '2018-04-15',
              hideTimestamp: true
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

    expect(wrapper.findAll('.tm-timeline-item__timestamp').length).toBe(2);
  });

  it('color', () => {
    const wrapper = mount({
      template: `<tm-timeline>
        <tm-timeline-item
          v-for="(item, index) in activities" 
          :timestamp="item.timestamp"
          :key="index"
          color="red"
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

    const { $el: el } = wrapper.vm;
    const ele = el.querySelector('.tm-timeline-item__dot');
    expect(ele.style.backgroundColor).toBe('red');
  });

  it('slot header', () => {
    const wrapper = mount({
      template: `<tm-timeline>
        <tm-timeline-item
          v-for="(item, index) in activities" 
          :timestamp="item.timestamp"
          :key="index"
        >
        <template #header>
          张三
        </template>
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

    expect(wrapper.html()).toContain('张三');
  });
})
  