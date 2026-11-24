// ============================================================
// Rainbow Arrow — PAD  (pad1)
// ============================================================

export const pad1 = chord(m('<Am F C G>'))
  .s('supersaw')
  .voicing()
  .attack(.1)
  .delay(0)
  .room(.4)
  .lpf(1200)
  .duckorbit(1)
  .duckdepth(0.1)
  .gain(.4);
