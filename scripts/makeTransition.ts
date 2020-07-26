import Vue from 'vue';
declare const _default: (
  enter: object,
  leave: object
) => import('vue/types/vue').ExtendedVue<
  Vue,
  unknown,
  {
    beforeEnter(el: HTMLElement): void;
    enter(el: HTMLElement, done: () => void): void;
    leave(el: HTMLElement, done: () => void): void;
  },
  unknown,
  {
    duration: number;
    delay: number;
    ease: string;
  }
>;
export default _default;
