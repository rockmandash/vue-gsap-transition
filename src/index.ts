import Vue from 'vue';
import gsap from 'gsap';

export default Vue.extend({
  props: {
    duration: {
      default: 0.3,
      type: Number
    },
    delay: {
      default: 0,
      type: Number
    },
    ease: {
      default: 'power2.inOut',
      type: String
    }
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      gsap.set(el, { opacity: 0 });
    },
    enter(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        ...this.$props,
        opacity: 1,
        onComplete: done
      });
    },
    leave(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        ...this.$props,
        opacity: 0,
        onComplete: done
      });
    }
  }
});
export { Test } from './transition/test';
