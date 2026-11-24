// ============================================================
// Rainbow Arrow — strudel.cc 入口（把本文件整段粘进 REPL 再 Ctrl+Enter）
// ------------------------------------------------------------
// 这首默认关掉 AudioWorklet（按你原代码的 initAudio 设置）。
// ============================================================

initAudio({ disableWorklets: true });

const { play } = await import(
  'https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.3/lib/play.js'
);

$: await play('rainbow-arrow');
