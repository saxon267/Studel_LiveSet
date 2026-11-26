// ============================================================
// Dark Step — LEAD  (lead1 / lead2 / lead3)
// ============================================================

// Lead1：锯齿主旋律
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

// Lead2：八度跳进变体
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

// Lead3：supersaw 长音，attack/release 包在 stack 外层
export const lead3 = stack(
  note(m('a4 - e4 - e5 - f5'))
    .s('supersaw')
    .fast(1)
    .gain(.4)
    .lpf(1200)
    .lpenv(3)
    .lpdecay(.12)
    .distort(.5)
    .crush(5)
    .room(.25)
    .delay(.15)
    .orbit(2)
    .trans(-12),
)
  .attack(.1)
  .release(.3);
