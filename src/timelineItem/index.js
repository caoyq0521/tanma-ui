import TimelineItem from '../timeline/timelineItem.vue';

TimelineItem.install = function (Vue) {
  Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
export { TimelineItem };