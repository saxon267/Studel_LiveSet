// ============================================================
// Black Drop — 单文件完整版（用户原谱，未改动）
// 整段粘进 https://strudel.cc ，Ctrl+Enter 即可播放。
// 分轨版在 songs/black-drop/ 下，与这份等价，仅把 .att() 改成 .attack()、
// 去掉了 kick1 后面的 .spiral()，改曲子建议改分轨版。
// ============================================================

setcpm(120/4)

//===DRUM===

const drumset={
  kick1:(g)=> s("bd").bank("tr707").gain(g)
    .struct("x - x -"),
  snear1:(g)=> s("sd").bank("tr707").gain(g)
    .struct("- x - x"),
  hat1:(g)=> s("hh").bank("tr808").gain(g)
    .struct("x!8"),
  clap1:(g)=> s("cp").bank("tr808").gain(g)
    .struct("- - - x")
}
const bassset={
  bass1:(g)=> n("1").scale("a2:minor").s("supersaw").gain(g)
    .struct("x!4")
    .att(.02)
    .lpf(saw.range(800,2000).slow(2))
}
const pluckset={
  pluck1:(g)=>n("1 - 1 - 1 2 - [8 2] ").scale("a4:minor").s("sawtooth").gain(g)
    .lpf(1600)
    .room(.8)
    .delay(0.4)
}

$: stack(
  drumset.kick1(.1).spiral(),
  drumset.snear1(0.2),
  drumset.hat1(0.2),
  drumset.clap1(0.1),
  bassset.bass1(0.1),
  pluckset.pluck1(0.15)
)
