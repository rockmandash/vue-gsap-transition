import makeTransition from './makeTransition';

export const Fade = makeTransition({
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});

export const FadeDown = makeTransition({
  enter: { opacity: 1, y: '100%' },
  leave: { opacity: 0, y: '-100%' }
});

export const FadeDownBig = makeTransition({
  enter: { opacity: 1, y: 2000 },
  leave: { opacity: 0, y: -2000 }
});

export const FadeUp = makeTransition({
  enter: { opacity: 1, y: '-100%' },
  leave: { opacity: 0, y: '100%' }
});

export const FadeUpBig = makeTransition({
  enter: { opacity: 1, y: -2000 },
  leave: { opacity: 0, y: 2000 }
});

export const FadeLeft = makeTransition({
  enter: { opacity: 1, x: '-100%' },
  leave: { opacity: 0, x: '100%' }
});

export const FadeLeftBig = makeTransition({
  enter: { opacity: 1, x: -2000 },
  leave: { opacity: 0, x: 2000 }
});

export const FadeRight = makeTransition({
  enter: { opacity: 1, x: '100%' },
  leave: { opacity: 0, x: '-100%' }
});

export const FadeRightBig = makeTransition({
  enter: { opacity: 1, x: 2000 },
  leave: { opacity: 0, x: -2000 }
});

// export const FadeTopLeft = makeTransition({
//   enter: { opacity: 1, x: '-100%', y: '-100%' },
//   leave: { opacity: 0, x: '-100%', y: '-100%' }
// });
