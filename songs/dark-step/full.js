// ============================================================
// Dark Step — 单文件完整版
// 整段粘进 https://strudel.cc ，Ctrl+Enter 即可播放。
// 分轨版在 songs/dark-step/ 下（index.js + drum/bass/pad/subbass/lead/pluck），
// 与这份内容等价，改曲子时建议改分轨版。
// ============================================================

setcpm(140/4)
//=====================DRUM======================
const drum1=stack( s("bd*4").bank("tr707")
.gain(.5)
.duckorbit(2)
.duckattack(.2)
.duckdepth(.8),
s("sd*2").bank("tr707")
.gain(.8)
.delay(.1)
.room(.6),
s("hh!7 [hh?3]").bank("tr808")
.velocity(".8 .6 .9 .5 .7 .5 .8 .4")
)
//===================Bass=========================
//BASS1
const bass1=stack(note("[a g4] [- f4] [- e4] [a#4 e4]").s("supersaw")
.gain(1)
.trans(-24)
.lpf(800)
.attack(0)
.decay(.6)
.sustain(0.5)
.orbit(2)
)
//BASS2
const bass2=stack(note("[a4 -] [f4 -] [g4 e4] [a#4 e4]").s("supersaw")
.gain(1)
.trans(-24)
.lpf(800)
.attack(0)
.decay(.6)
.sustain(0.5)
.orbit(2)
)
//==================PAD==========================
const pad1=stack(note("<a4@2 g4@2 f4@2 e4@2>").s("gm_pad_warm")
.attack(.2)
.release(.5)
.lpf(1200)
.orbit(2)
)
//=================SUBBASS=======================
const subbass1=stack(note("a a g d").s("sine")
.trans(-24)
.fast(.5)
.room(1)
.distort(.2)
.duck("2 4")
.release(.8)
.orbit(2)
)
//===================LEAD========================
//Lead1
const lead1=stack(note("a4 e4 e5  [f5 a4]")
  .s("sawtooth")
  .fast(2)
  .gain(.4)
  .lpf(800)
  .lpenv(3)
  .lpdecay(.12)
  .distort(.7)
  .crush(5)
  .room(.25)
  .delay(.15)
  .orbit(2)
  .trans(-12))
//Lead2
const lead2=stack(note("[a4 e4] [a4 e5] [g4 a5] [f5 a4]")
  .s("sawtooth")
  .fast(2)
  .gain(.4)
  .lpf(800)
  .lpenv(3)
  .lpdecay(.12)
  .distort(.7)
  .crush(5)
  .room(.25)
  .delay(.15)
  .orbit(2)
  .trans(-12))
//===================PLUCK=======================
const pluck1=stack(note(" a5 e5 f5 g5 < g5 f5 e5 a5>*2").s("psaltery_pluck:5")
  .fast(1)
  .delay(.6)
  .room(.8)
  .trans(-12)
  .gain(2)
  .release(.9)
)
//////LIVE-SESSION/////
const arg1=arrange(
  [2,stack(pad1,subbass1)],
  [2,stack(pad1,bass1)],
  [2,stack(pad1,bass1,subbass1)],
  [16,stack(pad1,bass1,subbass1,drum1)],
  [16,stack(pad1,bass2,subbass1,drum1)],
  [8,stack(pad1,bass1,subbass1,drum1,lead1)],
  [8,stack(pad1,bass2,subbass1,drum1,lead2)],
  [4,stack(pad1,pluck1)],
  [8,stack(pad1,bass2,subbass1,drum1,lead2)],
  [2,stack(pad1,drum1)]
)
$: arg1.scope()
