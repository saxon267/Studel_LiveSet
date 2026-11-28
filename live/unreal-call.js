// ============================================================
// Unreal Call — strudel.cc 入口（把本文件整段粘进 REPL 再 Ctrl+Enter）
// ------------------------------------------------------------
// arp 轨按原曲保持静音；想听就改成 withArp 那一行。
// ============================================================

const { play } = await import(
  'https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.4/lib/play.js'
);

$: await play('unreal-call');

// 想加上 arp：
// $: (await import('https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.4/songs/unreal-call/index.js')).withArp
