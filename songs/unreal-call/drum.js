// ============================================================
// Unreal Call — DRUM  (drum)
// ============================================================

export const drum = stack(
  s(m('bd')).bank('tr707').orbit(1)
    .struct(m('x - x -'))
    .delay(.3),

  s(m('sd')).bank('tr707').orbit(0)
    .struct(m('- x - x'))
    .room(.8),

  s(m('hh')).bank('tr808').orbit(0)
    .struct(m('x!7 [x!2]'))
    .velocity(m('[.8 .4 .7 .5]*2')),
);
