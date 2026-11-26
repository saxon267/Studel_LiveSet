// ============================================================
// Dark Step — SUBBASS  (subbass1)
// ============================================================

export const subbass1 = note(m('a a g d'))
  .s('sine')
  .trans(-24)
  .fast(.5)
  .room(.8)
  .distort(.1)
  .release(1)
  .orbit(2);
