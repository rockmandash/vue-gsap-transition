var Vue = require('vue').default;
var gsap = require('gsap').default;

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

var makeTransition = function (_enter, _leave) {
  return Vue.extend({
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
      beforeEnter: function beforeEnter(el) {
        gsap.set(el, _leave);
      },
      enter: function enter(el, done) {
        gsap.to(
          el,
          _extends(
            {},
            { duration: this.duration, delay: this.delay, ease: this.ease },
            _enter,
            {
              onComplete: done
            }
          )
        );
      },
      leave: function leave(el, done) {
        gsap.to(
          el,
          _extends(
            {},
            { duration: this.duration, delay: this.delay, ease: this.ease },
            _leave,
            {
              onComplete: done
            }
          )
        );
      }
    },
    render: function render(h) {
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
};

module.exports = makeTransition;
