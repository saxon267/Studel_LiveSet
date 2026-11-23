// ============================================================
// Dark Step — LEAD  (lead1 / lead2)
// ============================================================

// Lead1
export const lead1 = note(m('a4 e4 e5 [f5 a4]'))
  .s('sawtooth')
  .fast(2)
  .gain(.4)
  .lpf(800)
  .lpenv(3)
  .lpdecay(.12)
  .distort(.7)
  .crush(5)
  .room(.25)
  .delay(.15)
  .orbit(2)
  .trans(-12);

// Lead2
export const lead2 = note(m('[a4 e4] [a4 e5] [g4 a5] [f5 a4]'))
  .s('sawtooth')
  .fast(2)
  .gain(.4)
  .lpf(800)
  .lpenv(3)
  .lpdecay(.12)
  .distort(.7)
  .crush(5)
  .room(.25)
  .delay(.15)
  .orbit(2)
  .trans(-12);
