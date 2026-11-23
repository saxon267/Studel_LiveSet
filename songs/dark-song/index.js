// ============================================================
// Dark Song — 主工程  (index.js)
// ------------------------------------------------------------
// 这里只负责「零件 → 编曲」，本身不发声。
// 在 strudel.cc 里通过 live/ 下的入口文件 RAW 引入：
//
//   const BASE = '.../songs/dark-song/';
//   const { song } = await import(BASE + 'index.js');
//   $: song
// ============================================================

import { drum1 } from './drum.js';
import { bass1, bass2 } from './bass.js';
import { pad1 } from './pad.js';
import { subbass1 } from './subbass.js';
import { lead1, lead2 } from './lead.js';

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
  [4, stack(pad1, bass1)],
  [8, stack(pad1, bass1, subbass1, drum1)],
  [2, stack(pad1, drum1)],
);

export default song;
