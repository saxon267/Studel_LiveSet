// ============================================================
// Dark Song — strudel.cc 入口（把本文件整段粘进 REPL 再 Ctrl+Enter）
// ------------------------------------------------------------
// 它自己不写任何音乐，只做三件事：
//   1. 指向仓库的 RAW 基址
//   2. 动态 import 主工程（连带 drum/bass/pad/subbass/lead）
//   3. 用 $: 把整曲交给 REPL 播放
//
// 改完乐谱重新 push 后，把 v= 的数字加一（或删掉重跑），
// 浏览器就不会拿缓存里的旧模块。
// ============================================================

const BASE =
  'https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.0/songs/dark-song/';

const { song } = await import(BASE + 'index.js?v=1');

// 整曲
$: song

// 想看看整体走向，取消下面一行的注释（只画图，不会重复发声）
// song.pianoroll({ fold: 1 })
