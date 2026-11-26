// ============================================================
// Chaos-Night — SUBBASS  (subbase)
// ============================================================

export const subbase = n(m('1 1 3 1'))
  .s(sine)
  .scale('A0:minor')
  .release(0.4)
  .duck(2)
  .duckattack(.1)
  .duckdepth(0.6);
