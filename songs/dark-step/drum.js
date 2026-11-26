// ============================================================
// Dark Step — DRUM  (drum1 / drum2)
// ------------------------------------------------------------
// RAW 文件是普通 ES 模块：REPL 里「双引号 = mini-notation」的语法糖
// 不会作用于模块代码，所以 mini 串必须显式包一层 m("...")。
// 普通字符串一律用单引号，这样整个文件也能直接粘进 strudel.cc 运行。
// ============================================================

// 主鼓：四拍地鼓 + 二四拍军鼓 + 十六分踩镲
export const drum1 = stack(
  s(m('bd*4'))
    .bank('tr707')
    .gain(.5)
    .duckorbit(2)
    .duckattack(.2)
    .duckdepth(.8),

  s(m('sd*2'))
    .bank('tr707')
    .gain(.8)
    .delay(.1)
    .room(.6),

  s(m('hh!7 [hh?3]'))
    .bank('tr808')
    .velocity(m('.8 .6 .9 .5 .7 .5 .8 .4')),
);

// 变体：切分地鼓 / 反拍军鼓 / 稀疏踩镲
export const drum2 = stack(
  s(m('bd - - [bd -]'))
    .bank('tr707')
    .gain(.5)
    .duckorbit(2)
    .duckattack(.2)
    .duckdepth(.8),

  s(m('- sd - [- sd]'))
    .bank('tr707')
    .gain(.8)
    .delay(.1)
    .room(.6),

  s(m('hh!7 [- - hh - -]'))
    .bank('tr808')
    .velocity(m('.8 .6 .9 .5 .7 .5 .8 .4')),
);
