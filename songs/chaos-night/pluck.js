// ============================================================
// Chaos-Night — PLUCK  (pluck)
// ============================================================

export const pluck = n(wchooseCycles([1, 8], [2, 7], [3, 3]).segment(8))
  .s('supersaw')
  .scale('a5:minor')
  .struct(m('x - x - x - x x'))
  .lpf(sine.range(1200, 3000).slow(1))
  .attack(0.1)
  .decay(0.1)
  .sustain(0)
  .release(0)
  .fast(1)
  .duck(2).duckattack(.1).duckdepth(.4)
  .room(0.5)
  .gain(0.7);
