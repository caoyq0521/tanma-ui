import { mount } from '@vue/test-utils';
import TmTabs from '../tabs.vue';

describe('tmTabs', () => {
  it('render tabs', () => {
    const wrapper = mount(TmTabs);
    expect(wrapper).toMatchSnapshot();
  });

  it('props:value', async () => {
    const wrapper = mount(TmTabs, {
      value: 'poster',
      options: [
        {
          key: 'article',
          title: '文章'
        },
        {
          key: 'poster',
          title: '海报'
        },
        {
          key: 'form',
          title: '表单'
        }
      ]
    });
    const panes = wrapper.findAll('.tm-tabs__pane')
    expect(panes.at(1).classes('is--active')).toBe(true);
  });

  it('props:type and size and placement', async () => {
    const wrapper = mount(TmTabs);
    expect(wrapper.contains('.tm-tabs')).toBe(true);

    await wrapper.setProps({ type: 'text' });
    expect(wrapper.contains('.tm-tabs--text')).toBe(true);

    await wrapper.setProps({ type: 'underline' });
    expect(wrapper.contains('.tm-tabs--underline')).toBe(true);

    await wrapper.setProps({ type: 'button' });
    expect(wrapper.contains('.tm-tabs--button')).toBe(true);

    await wrapper.setProps({ size: 'medium' });
    expect(wrapper.contains('.tm-tabs--medium')).toBe(true);

    await wrapper.setProps({ type: 'small' });
    expect(wrapper.contains('.tm-tabs--small')).toBe(true);

    await wrapper.setProps({ placement: 'center' });
    expect(wrapper.contains('.tm-tabs-group.is--center')).toBe(true);
  });

  it('props:options', async () => {
    const wrapper = mount(TmTabs, {
      propsData: {
        options: [
          {
            key: 'article',
            title: '文章'
          },
          {
            key: 'poster',
            title: '海报'
          },
          {
            key: 'form',
            title: '表单'
          }
        ]
      }
    });
    expect(wrapper.findAll('.tm-tabs__pane')).toHaveLength(3);
  });

  it('switch tab', async () => {
    const wrapper = mount(TmTabs, {
      propsData: {
        options: [
          {
            key: 'article',
            title: '文章'
          },
          {
            key: 'poster',
            title: '海报'
          },
          {
            key: 'form',
            title: '表单'
          }
        ]
      }
    });
    await wrapper.findAll('.tm-tabs__pane').at(1).trigger('click');
    expect(wrapper.vm.currentKey).toBe('poster');
    expect(wrapper.emitted()['tab-click']).toBeTruthy();
    expect(wrapper.emitted()['input']).toBeTruthy();
  });
})
  