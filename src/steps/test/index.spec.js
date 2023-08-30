import { mount } from '@vue/test-utils';
import TmSteps from '../steps.vue';

describe('tmSteps', () => {
  it('render steps', () => {
    const wrapper = mount(TmSteps);
    expect(wrapper).toMatchSnapshot();
  });

  it('create', () => {
    const wrapper = mount({
      template: `<tm-steps :active="currentStep">
        <tm-step 
          v-for="(item, index) in steps" 
          :title="item.label"
          :key="item.key"
        >
        </tm-step>
      </tm-steps>`,
      data() {
        return {
          currentStep: 0,
          steps: [
            { key: 'base', label: '基础信息' },
            { key: 'award', label: '奖励设置' },
            { key: 'template', label: '模版设置' }
          ]
        }
      },
    });
    const { $el: el, steps } = wrapper.vm;
    const contentElms = el.querySelectorAll('.tm-step__title');
    const contentElmsArr = [...contentElms];
    contentElmsArr.forEach((elm, index) => {
      expect(elm.textContent).toContain(steps[index].label);
    });
  });

  it('active', async () => {
    const wrapper = mount({
      template: `<tm-steps :active="currentStep">
        <tm-step 
          v-for="(item, index) in steps" 
          :title="item.label"
          :key="item.key"
        >
        </tm-step>
      </tm-steps>`,
      data() {
        return {
          currentStep: 0,
          steps: [
            { key: 'base', label: '基础信息' },
            { key: 'award', label: '奖励设置' },
            { key: 'template', label: '模版设置' }
          ]
        }
      },
    });
    expect(wrapper.findAll('.tm-step').at(0).classes()).toContain('tm-step--current')

    await wrapper.setData({ currentStep: 1 });

    expect(wrapper.findAll('.tm-step').at(1).classes()).toContain('tm-step--current')
  });

  it('direction', async () => {
    const wrapper = mount({
      template: `<tm-steps :active="currentStep" :direction="direction">
        <tm-step 
          v-for="(item, index) in steps" 
          :title="item.label"
          :key="item.key"
        >
        </tm-step>
      </tm-steps>`,
      data() {
        return {
          currentStep: 0,
          direction: 'vertical',
          steps: [
            { key: 'base', label: '基础信息' },
            { key: 'award', label: '奖励设置' },
            { key: 'template', label: '模版设置' }
          ]
        }
      },
    });

    expect(wrapper.find('.tm-steps--vertical').exists()).toBe(true);

    await wrapper.setData({ direction: 'horizontal' });

    expect(wrapper.find('.tm-steps--horizontal').exists()).toBe(true);
  });

  it('disabled', () => {
    const wrapper = mount({
      template: `<tm-steps :active="currentStep">
        <tm-step 
          v-for="(item, index) in steps" 
          :title="item.label"
          :key="item.key"
          :disabled="item.disabled"
        >
        </tm-step>
      </tm-steps>`,
      data() {
        return {
          currentStep: 0,
          steps: [
            { key: 'base', label: '基础信息' },
            { key: 'award', label: '奖励设置' },
            { key: 'template', label: '模版设置', disabled: true }
          ]
        }
      },
    });

    expect(wrapper.findAll('.tm-step').at(2).attributes('disabled')).toContain('disabled');
  });
})
  