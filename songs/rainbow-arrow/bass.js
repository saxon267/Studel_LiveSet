// ============================================================
// Rainbow Arrow — BASS  (bass1)
// ============================================================

export const bass1 = n(m('1 2 6 1 1 2 7 2'))
  .s('sawtooth')
  .scale('a2:minor')
  .add(m('0 0 12 0 0 12 0 12'))
  .slide(0.05)
  .lpf(1000)
  .lpq(5)
  .distort(0.6)
  .duckorbit(1)
  .duckdepth(0.75)
  .gain(.35);
