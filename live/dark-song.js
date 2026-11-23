// ============================================================
// Dark Song — strudel.cc 入口（把本文件整段粘进 REPL 再 Ctrl+Enter）
// ------------------------------------------------------------
// 两行：先取 play()，再把曲目交给 REPL 播。
// 想换曲子，改 play('...') 里的 slug；改完乐谱加版本号绕过缓存。
// ============================================================

const { play } = await import(
  'https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.1/lib/play.js'
);

$: await play('dark-song');

// 绕过缓存：play('dark-song', 2)  —— 第二个参数就是 ?v=
// 整曲钢琴卷帘：$: (await play('dark-song')).pianoroll()（会重复发声，慎用）
