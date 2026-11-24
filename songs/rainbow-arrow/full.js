// ============================================================
// Rainbow Arrow — 单文件完整版
// 整段粘进 https://strudel.cc ，Ctrl+Enter 即可播放。
// 分轨版在 songs/rainbow-arrow/ 下（index.js + subbass/bass/arp/pad/drum），
// 与这份内容等价，改曲子时建议改分轨版。
// ============================================================

initAudio({ disableWorklets: true })
//====Rainbow Arrow====
setcpm(120/4)

// =====SUBBASS=====
const subbass1 = n("1 6 3 7").s("sine")
  .fast(1/4)
  .scale("a1:minor") 
  .gain(.35)
  .duckorbit(1).duckdepth(0.35) 

// =====BASS=====
const bass1 = n("1 2 6 1 1 2 7 2").s("sawtooth")
  .scale("a2:minor") 
  .add("0 0 12 0 0 12 0 12") 
  .slide(0.05)
  .lpf(1000).lpq(5)
  .distort(0.6) 
  .duckorbit(1).duckdepth(0.75)
  .gain(.35)

// =====ARP=====
const arp1 = chord("<Am F C G>").s("sawtooth")
  .arp("0 1 2 3 2 1 0 1")
  .lpf(1800).lpq(3)
  .delay(.4).room(.5)
  .trans(24) 
  .duckorbit(1).duckdepth(0.3) 
  .gain(0.3)

// =====PAD=====
const pad1 = chord("<Am F C G>")
  .s("supersaw")
  .voicing()
  .attack(.1) 
  .delay(0).room(.4)
  .lpf(1200)
  .duckorbit(1).duckdepth(0.1)
  .gain(.4)

// =====DRUM=====
const drum1 = stack(
  s("bd*4").bank("tr707").decay(.2).gain(.75).orbit(1), 
  s("~ sd ~ sd").bank("tr707").room(.4).gain(.55), 
  s("hh*8").bank("tr808").velocity(".6 .4 .5 .3 .6 .7 .8 .9").room(.6).gain(.45)
)

// =====LIVE=====
$: subbass1
$: bass1
$: arp1
$: pad1
$: drum1
