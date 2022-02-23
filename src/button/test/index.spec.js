import { mount } from '@vue/test-utils';
import DemoButton from "../button.vue";

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper).toMatchSnapshot();
});
