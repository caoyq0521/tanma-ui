import Step from '../steps/step.vue';

Step.install = function (Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
export { Step };