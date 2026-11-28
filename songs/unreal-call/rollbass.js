// ============================================================
// Unreal Call — ROLLBASS  (rollBass)
// ============================================================

export const rollBass = n(m('0'))
  .scale('a1:minor')
  .struct(m('[- x - x]*8'))
  .s('supersaw')
  .lpf(1000)
  .lpq(.3)
  .duck(1)
  .duckatt(.05)
  .duckdepth(.5)
  .slow(4)
  .distort(.5)
  .gain(.6);
