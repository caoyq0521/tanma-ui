import { mount } from '@vue/test-utils';
import TmEmpty from '../empty.vue';

const AXIOM = 'tanma-fe';
describe('tmEmpty', () => {
  it('render empty', () => {
    const wrapper = mount(TmEmpty);
    expect(wrapper).toMatchSnapshot();
  });

  it('type', async () => {
    const wrapper = mount(TmEmpty);

    expect(wrapper.find('.tm-empty--empty').exists()).toBe(true);

    await wrapper.setProps({ type: 'error' });
    expect(wrapper.find('.tm-empty--error').exists()).toBe(true);

    await wrapper.setProps({ type: 'build' });
    expect(wrapper.find('.tm-empty--build').exists()).toBe(true);
  });

  it('image', () => {
    const wrapper = mount(TmEmpty, {
      propsData: {
        image: AXIOM
      }
    });

    expect(wrapper.find('.tm-empty__image img').exists()).toBe(true);
  });

  it('image slot', () => {
    const wrapper = mount({
      template: `<tm-empty>
        <template #image>
          {{ AXIOM }}
        </template>
      </tm-empty>`,
      data() {
        return {
          AXIOM
        };
      }
    });

    expect(wrapper.find('.tm-empty__image').html()).toContain(AXIOM);
  });

  it('imageSize', async () => {
    const wrapper = mount(TmEmpty, {
      propsData: {
        imageSize: 300
      }
    });

    expect(wrapper.find('.tm-empty__image').attributes('style')).toContain('width: 300px');

    await wrapper.setProps({ imageSize: 400 });
    expect(wrapper.find('.tm-empty__image').attributes('style')).toContain('width: 400px');

  });

  it('description', () => {
    const wrapper = mount(TmEmpty, {
      propsData: {
        description: AXIOM
      }
    });

    expect(wrapper.find('.tm-empty__description').html()).toContain(AXIOM);
  });

  it('description slot', () => {
    const wrapper = mount({
      template: `<tm-empty>
        <template #description>
          {{ AXIOM }}
        </template>
      </tm-empty>`,
      data() {
        return {
          AXIOM
        };
      }
    });

    expect(wrapper.find('.tm-empty__description').html()).toContain(AXIOM);
  });
})
  