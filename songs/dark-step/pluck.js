// ============================================================
// Dark Step — PLUCK  (pluck1)
// ============================================================

export const pluck1 = note(m('a5 e5 f5 g5 <g5 f5 e5 a5>*2'))
  .s('psaltery_pluck:5')
  .fast(1)
  .delay(.6)
  .room(.8)
  .trans(-12)
  .gain(2)
  .release(.9);
