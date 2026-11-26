// ============================================================
// Dark Step — PAD  (pad1 / pad2)
// ============================================================

export const pad1 = note(m('<a4@2 g4@2 f4@2 e4@2>'))
  .s('gm_pad_warm')
  .attack(.2)
  .release(.5)
  .lpf(sine.range(500, 4000).slow(4))
  .orbit(2);

export const pad2 = note(m('<g4@2 f4@2 a4@2 e4@2>'))
  .s('gm_pad_sweep:2')
  .attack(.2)
  .release(.5)
  .lpf(sine.range(500, 4000).slow(4))
  .orbit(2);
