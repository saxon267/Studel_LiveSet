// ============================================================
// Chaos-Night — 单文件完整版
// 整段粘进 https://strudel.cc ，Ctrl+Enter 即可播放。
// 分轨版在 songs/chaos-night/ 下（index.js + drum/subbass/bass/pad/pluck），
// 与这份内容等价，改曲子时建议改分轨版。
// ============================================================

setcpm(120/4)

//===DRUM===
const drum=s("bd bd bd bd").bank("tr707")
  .fast(1)
  .o(1)
const sn=s("- sd - sd").bank("tr707")
  .attack(0.01)
  .orbit(2)
const hit=s("hh!7 [hh!2]").bank("tr808")
  .velocity(" .7 .4 .8 .3 .6 .4 .6 .5")
const clap=s("- - - cp").bank("tr707")
  .attack("0.01")
  .distort(0.8)
  .release(0.5)
  .room(0.6)
  .lpf(1800)
  .gain(0.5)
//===SUB===
const subbase=n("1 1 3 1").s(sine).scale("A0:minor")
  .release(0.4)
  .duck(2)
  .duckattack(.1)
  .duckdepth(0.6)
//===BASS===
const bass=n("[1 5][- 4][- 7][5 1]").s("supersaw").scale("A1:minor")
  .fast(1)
  .lpf(800)
  .duck(1).duckattack(.1).duckdepth(0.1)
//===PAD===
const pad=n("1!4 6!2 4!2").s("gm_synth_strings_1:1").scale("A2:minor")
  .lpf(800)
  .duck(1).duckattack(0.1).duckdepth(0.1)
//===PLUCK===
const pluck=n(wchooseCycles([1,8],[2,7],[3,3]).segment(8)).s("supersaw").scale("a5:minor")
  .struct("x - x - x - x x")
  .lpf(sine.range(1200,3000).slow(1))
  .attack(0.1)
  .decay(0.1)
  .sustain(0)
  .release(0)
  .fast(1)
  .duck(2).duckattack(.1).duckdepth(.4)
  .room(0.5)
  .gain(0.7)
//===PLAY===
$: drum.scope()
$: sn
$: hit
$: clap
$: subbase
$: bass
$: pad
$: pluck
