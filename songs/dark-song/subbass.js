// ============================================================
// Dark Song — SUBBASS  (subbass1)
// ============================================================

export const subbass1 = note(m('a a g d'))
  .s('sine')
  .trans(-24)
  .fast(.5)
  .room(1)
  .distort(.2)
  .duck(m('2 4'))
  .release(.8)
  .orbit(2);
