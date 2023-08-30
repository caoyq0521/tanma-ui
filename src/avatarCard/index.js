import AvatarCard from './avatar-card.vue';

AvatarCard.install = function (Vue) {
  Vue.component(AvatarCard.name, AvatarCard);
};

export default AvatarCard;
export { AvatarCard };