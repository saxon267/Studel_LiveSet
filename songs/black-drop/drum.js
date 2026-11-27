// ============================================================
// Black Drop — DRUM  (drumset)
// ------------------------------------------------------------
// 工厂函数写法：每个声部是 (gain) => pattern，调用时才决定音量：
//   drumset.kick1(.1)
// RAW 模块里 mini-notation 要显式包 m('...')。
// ============================================================

export const drumset = {
  kick1: (g) => s('bd').bank('tr707').gain(g)
    .struct(m('x - x -')),
  snear1: (g) => s('sd').bank('tr707').gain(g)
    .struct(m('- x - x')),
  hat1: (g) => s('hh').bank('tr808').gain(g)
    .struct(m('x!8')),
  clap1: (g) => s('cp').bank('tr808').gain(g)
    .struct(m('- - - x')),
};
