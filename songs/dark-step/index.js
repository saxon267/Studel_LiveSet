// ============================================================
// Dark Step — 主工程  (index.js)
// ------------------------------------------------------------
// 这里只负责「零件 → 编曲」，本身不发声。
// 在 strudel.cc 里通过 play() 引入：
//
//   $: await play('dark-step')
//
// 想要整曲波形：$: (await play('dark-step')).scope()
// ============================================================

import { drum1 } from './drum.js';
import { bass1, bass2 } from './bass.js';
import { pad1 } from './pad.js';
import { subbass1 } from './subbass.js';
import { lead1, lead2 } from './lead.js';
import { pluck1 } from './pluck.js';

// 140 BPM in 4/4
setcpm(140 / 4);

// ===== LIVE-SESSION / ARRANGE =====
export const song = arrange(
  [2, stack(pad1, subbass1)],
  [2, stack(pad1, bass1)],
  [2, stack(pad1, bass1, subbass1)],
  [16, stack(pad1, bass1, subbass1, drum1)],
  [16, stack(pad1, bass2, subbass1, drum1)],
  [8, stack(pad1, bass1, subbass1, drum1, lead1)],
  [8, stack(pad1, bass2, subbass1, drum1, lead2)],
  [4, stack(pad1, pluck1)],
  [8, stack(pad1, bass2, subbass1, drum1, lead2)],
  [2, stack(pad1, drum1)],
);

export default song;
