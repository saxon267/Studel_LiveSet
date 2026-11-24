// ============================================================
// Rainbow Arrow — 主工程  (index.js)
// ------------------------------------------------------------
// 这首没有 arrange，五条轨从头到尾一起走，所以直接 stack。
// 在 strudel.cc 里通过 play() 引入：
//
//   $: await play('rainbow-arrow')
// ============================================================

import { subbass1 } from './subbass.js';
import { bass1 } from './bass.js';
import { arp1 } from './arp.js';
import { pad1 } from './pad.js';
import { drum1 } from './drum.js';

// 120 BPM in 4/4
setcpm(120 / 4);

export const song = stack(subbass1, bass1, arp1, pad1, drum1);

export default song;
