import Vue, { VNode } from 'vue';
import gsap from 'gsap';

export default ({ enter, leave }: { enter: object; leave: object }) =>
  Vue.extend({
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
        gsap.set(el, leave);
      },
      enter(el: HTMLElement, done: () => void) {
        gsap.to(el, {
          ...enter,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          onComplete: done
        });
      },
      leave(el: HTMLElement, done: () => void) {
        gsap.to(el, {
          ...leave,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          onComplete: done
        });
      }
    },
    render(h): VNode {
      return h(
        'transition',
        {
          props: {
            css: false
          },
          on: {
            beforeEnter: this.beforeEnter,
            enter: this.enter,
            leave: this.leave
          }
        },
        this.$slots['default']
      );
    }
  });
