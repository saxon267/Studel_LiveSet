// ============================================================
// Unreal Call — VOCAL  (vocal)
// ============================================================

export const vocal = s(m('numbers:1 numbers:2 numbers:3 numbers:4'))
  .chop(8)
  .rev()
  .velocity(m('.7 .6 .7 .6'))
  .delay(.6)
  .room(.8)
  .slow(2);
