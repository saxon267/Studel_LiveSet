// ============================================================
// Rainbow Arrow — DRUM  (drum1)
// ============================================================

export const drum1 = stack(
  s(m('bd*4')).bank('tr707').decay(.2).gain(.75).orbit(1),
  s(m('~ sd ~ sd')).bank('tr707').room(.4).gain(.55),
  s(m('hh*8')).bank('tr808').velocity(m('.6 .4 .5 .3 .6 .7 .8 .9')).room(.6).gain(.45),
);
