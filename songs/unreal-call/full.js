// ============================================================
// Unreal Call — 单文件完整版
// 整段粘进 https://strudel.cc ，Ctrl+Enter 即可播放。
// 分轨版在 songs/unreal-call/ 下，与这份内容等价。
// 注意最后一行 `_$: arp`：下划线前缀 = 注册但静音，去掉下划线即可听见。
// ============================================================

setcpm(120/4)
//===<Unreal Call>===
const drum=stack(
    s("bd").bank("tr707").o(1)
    .struct("x - x -")
    .delay(.3),
    s("sd").bank("tr707").o(0)
    .struct("- x - x")
    .room(.8),
    s("hh").bank("tr808").o(0)
    .struct("x!7 [x!2]")
    .velocity("[.8 .4 .7 .5]*2")
)

const rollBass= n("0").scale("a1:minor")
  .struct("[- x - x]*8")
  .s("supersaw")
  .lpf(1000).lpq(.3)
  .duck(1).duckatt(.05).duckdepth(.5)
  .slow(4)
  .distort(.5)
  .gain(.6)
const vocal= s("numbers:1 numbers:2 numbers:3 numbers:4")
  .chop(8).rev()
  .velocity(".7 .6 .7 .6")
  .delay(.6).room(.8)
  .slow(2)
const arp=n("7 - 7 - 7 - - 8 9 - 7 4 7 8").s("xylophone_soft_ff").scale("a2:minor")
  .delay(.4).room(.5)
  .fast(1)
  .lpf(1500)
  

$: drum
$: rollBass
$: vocal
_$: arp
