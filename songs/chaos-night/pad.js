// ============================================================
// Chaos-Night — PAD  (pad)
// ============================================================

export const pad = n(m('1!4 6!2 4!2'))
  .s('gm_synth_strings_1:1')
  .scale('A2:minor')
  .lpf(800)
  .duck(1).duckattack(0.1).duckdepth(0.1);
