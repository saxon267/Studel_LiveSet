// ============================================================
// Dark Step — PLUCK  (pluck1 / pluck2 / pluck3)
// ============================================================

export const pluck1 = note(m('a5 e5 f5 g5 <g5 f5 e5 a5>*2'))
  .s('psaltery_pluck:5')
  .fast(1)
  .delay(.6)
  .room(.8)
  .trans(-12)
  .gain(2)
  .release(.9);

// pluck2：电钢琴与高音琶音叠置
export const pluck2 = note(m('[a#3 a5][f3 f5][a3 g5][a3 e5]'))
  .s('gm_epiano1:6')
  .fast(1)
  .delay(0)
  .room(.2)
  .trans(-12)
  .gain(2)
  .attack(0.1);

// pluck3：锯齿短音，音量与滤波都在扫
export const pluck3 = note(m('a4 - a4 a4 [a#4 -] -'))
  .s('sawtooth')
  .fast(1)
  .delay(0.4)
  .room(.8)
  .trans(0)
  .gain(sine.range(0.3, 1.5).fast(2))
  .attack(0.1)
  .lpf(saw.range(600, 1200).fast(2));
