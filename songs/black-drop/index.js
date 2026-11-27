// ============================================================
// Black Drop — 主工程  (index.js)
// ------------------------------------------------------------
// 没有 arrange，六条声部从头到尾一起走。
// 原谱在 kick1 后面挂了 .spiral()，当前 Strudel 里找不到这个方法，
// 仓库版先去掉（要原样见 full.js）。
//
//   $: await play('black-drop')
// ============================================================

import { drumset } from './drum.js';
import { bassset } from './bass.js';
import { pluckset } from './pluck.js';

// 120 BPM in 4/4
setcpm(120 / 4);

export const song = stack(
  drumset.kick1(.1),
  drumset.snear1(.2),
  drumset.hat1(.2),
  drumset.clap1(.1),
  bassset.bass1(.1),
  pluckset.pluck1(.15),
);

export default song;
