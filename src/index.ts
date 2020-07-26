import makeTransition from './makeTransition';

export const Fade = makeTransition({
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});
