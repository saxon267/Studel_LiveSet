// ============================================================
// Chaos-Night — 主工程  (index.js)
// ------------------------------------------------------------
// 这里只负责「零件 → 叠轨」，本身不发声。
// 在 strudel.cc 里通过 play() 引入：
//
//   $: await play('chaos-night')
//
// 想要整曲波形：$: (await play('chaos-night')).scope()
// ============================================================

import { drum, sn, hit, clap } from './drum.js';
import { subbase } from './subbass.js';
import { bass } from './bass.js';
import { pad } from './pad.js';
import { pluck } from './pluck.js';

// 120 BPM in 4/4 → 30 cpm
setcpm(120 / 4);

// 八轨并行（原谱就是 8 条 $: 同时发）
export const song = stack(drum, sn, hit, clap, subbase, bass, pad, pluck);

export default song;
