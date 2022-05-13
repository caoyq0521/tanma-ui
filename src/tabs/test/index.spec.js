import { mount } from '@vue/test-utils';
import TmTabs from '../tabs.vue';

describe('tmTabs', () => {
  const options = [
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
  ];
  it('render tabs', () => {
    const wrapper = mount(TmTabs);
    expect(wrapper).toMatchSnapshot();
  });

  it('props:value', async () => {
    const wrapper = mount(TmTabs, {
      propsData: {
        value: 'poster',
        options
      }
    });
    const panes = wrapper.findAll('.tm-tabs__pane');
    expect(panes.at(1).classes('tm-is-active')).toBe(true);
  });

  it('props:type and size and position', async () => {
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

    await wrapper.setProps({ position: 'center' });
    expect(wrapper.contains('.tm-tabs__content.tm-is-center')).toBe(true);
  });

  it('props:options', async () => {
    const wrapper = mount(TmTabs, {
      propsData: { options }
    });
    expect(wrapper.findAll('.tm-tabs__pane')).toHaveLength(3);
  });

  it('switch tab', async () => {
    const wrapper = mount(TmTabs, {
      propsData: { options }
    });
    await wrapper.findAll('.tm-tabs__pane').at(1).trigger('click');
    expect(wrapper.vm.currentKey).toBe('poster');
    expect(wrapper.emitted()['tab-click']).toBeTruthy();
    expect(wrapper.emitted()['input']).toBeTruthy();
  });
})
  