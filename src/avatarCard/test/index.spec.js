import { mount } from '@vue/test-utils';
import TmAvatarCard from '../avatar-card.vue';

describe('tmAvatarCard', () => {
  it('render AvatarCard', () => {
    const wrapper = mount(TmAvatarCard);
    expect(wrapper).toMatchSnapshot();
  });

  it('title', () => {
    const wrapper = mount(TmAvatarCard);
    const title = '标题信息';
    wrapper.setProps({title});
    expect(wrapper.find('.tm-avatar-card__info .info-title__name').text()).toBe(title);
  })

  it('tip', () => {
    const wrapper = mount(TmAvatarCard);
    wrapper.setProps({tip: "提示信息"});
    expect(wrapper.find('.tm-avatar-card__info .info-title__tip').exists()).toBe(true);
  });

  it('hideDescription', () => {
    const wrapper = mount(TmAvatarCard);
    wrapper.setProps({ hideDescription: false });
    expect(wrapper.find('.tm-avatar-card__info .tm-ellipsis.info-description').exists()).toBe(true);
  });
    
  it('description', () => {
    const wrapper = mount(TmAvatarCard);
    const description = '描述信息';
    wrapper.setProps({ description });
    expect(wrapper.find('.tm-avatar-card__info .info-description span.tm-ellipsis').text()).toBe(description);
  });
  
  it('hideWechatIcon', () => {
    const wrapper = mount(TmAvatarCard);
    wrapper.setProps({ hideWechatIcon: false});
    expect(wrapper.find('.tm-avatar-card__info .wechat-icon').exists()).toBe(false);
  });

})
  