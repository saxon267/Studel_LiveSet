// ============================================================
// Unreal Call — 主工程  (index.js)
// ------------------------------------------------------------
// 三轨同播；arp 对应原曲里被 `_$:` 静音的那条，单独导出成 withArp。
//
//   $: await play('unreal-call')            // 三轨
//   $: (await import('.../index.js')).withArp  // 加上 arp
// ============================================================

import { drum } from './drum.js';
import { rollBass } from './rollbass.js';
import { vocal } from './vocal.js';
import { arp1 } from './arp.js';

// 120 BPM in 4/4
setcpm(120 / 4);

export const song = stack(drum, rollBass, vocal);
export const withArp = stack(song, arp1);

export default song;
