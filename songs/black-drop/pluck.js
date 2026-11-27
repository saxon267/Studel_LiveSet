// ============================================================
// Black Drop — PLUCK  (pluckset)
// ============================================================

export const pluckset = {
  pluck1: (g) => n(m('1 - 1 - 1 2 - [8 2]')).scale('a4:minor').s('sawtooth').gain(g)
    .lpf(1600)
    .room(.8)
    .delay(.4),
};
