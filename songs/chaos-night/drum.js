// ============================================================
// Chaos-Night — DRUM  (drum / sn / hit / clap)
// ------------------------------------------------------------
// RAW 文件是普通 ES 模块：mini-notation 必须显式包 m("...")，
// 普通字符串一律用单引号，模块里不能写 $:。
// ============================================================

// 底鼓：四拍
export const drum = s(m('bd bd bd bd'))
  .bank('tr707')
  .fast(1)
  .o(1);

// 军鼓：二四拍
export const sn = s(m('- sd - sd'))
  .bank('tr707')
  .attack(0.01)
  .orbit(2);

// 踩镲：七连 + 双连
export const hit = s(m('hh!7 [hh!2]'))
  .bank('tr808')
  .velocity(m(' .7 .4 .8 .3 .6 .4 .6 .5'));

// 拍手：末拍单手
export const clap = s(m('- - - cp'))
  .bank('tr707')
  .attack('0.01')
  .distort(0.8)
  .release(0.5)
  .room(0.6)
  .lpf(1800)
  .gain(0.5);
