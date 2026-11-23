// ============================================================
// Dark Step — BASS  (bass1 / bass2)
// ============================================================

// BASS1
export const bass1 = note(m('[a g4] [- f4] [- e4] [a#4 e4]'))
  .s('supersaw')
  .gain(1)
  .trans(-24)
  .lpf(800)
  .attack(0)
  .decay(.6)
  .sustain(0.5)
  .orbit(2);

// BASS2
export const bass2 = note(m('[a4 -] [f4 -] [g4 e4] [a#4 e4]'))
  .s('supersaw')
  .gain(1)
  .trans(-24)
  .lpf(800)
  .attack(0)
  .decay(.6)
  .sustain(0.5)
  .orbit(2);
