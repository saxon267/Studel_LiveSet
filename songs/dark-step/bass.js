// ============================================================
// Dark Step — BASS  (bass1 / bass2 / bass3)
// ============================================================

// BASS1：根音走向
export const bass1 = note(m('[a g4] [- f4] [- e4] [a#4 e4]'))
  .s('supersaw')
  .gain(1)
  .trans(-24)
  .lpf(800)
  .attack(0)
  .decay(.6)
  .sustain(0.5)
  .orbit(2);

// BASS2：切分变体
export const bass2 = note(m('[a4 -] [f4 -] [g4 e4] [a#4 e4]'))
  .s('supersaw')
  .gain(1)
  .trans(-24)
  .lpf(800)
  .attack(0)
  .decay(.6)
  .sustain(0.5)
  .orbit(2);

// BASS3：后半拍弱起
export const bass3 = note(m('[- g4] [- f4] [- e4] [- a4]'))
  .s('supersaw')
  .gain(1)
  .trans(-24)
  .lpf(800)
  .attack(0)
  .decay(.6)
  .sustain(0.5)
  .orbit(2);
