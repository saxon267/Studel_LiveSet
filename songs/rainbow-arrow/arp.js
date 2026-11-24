// ============================================================
// Rainbow Arrow — ARP  (arp1)
// ============================================================

export const arp1 = chord(m('<Am F C G>'))
  .s('sawtooth')
  .arp(m('0 1 2 3 2 1 0 1'))
  .lpf(1800)
  .lpq(3)
  .delay(.4)
  .room(.5)
  .trans(24)
  .duckorbit(1)
  .duckdepth(0.3)
  .gain(0.3);
