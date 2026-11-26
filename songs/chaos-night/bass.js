// ============================================================
// Chaos-Night — BASS  (bass)
// ============================================================

export const bass = n(m('[1 5][- 4][- 7][5 1]'))
  .s('supersaw')
  .scale('A1:minor')
  .fast(1)
  .lpf(800)
  .duck(1).duckattack(.1).duckdepth(0.1);
