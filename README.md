# Strudel Sheet Lib

用 Strudel 写的曲子，按「乐器轨 → 主工程 → 现场入口」三层拆分，**不打包、不构建**，直接以 RAW 文件的方式被 [strudel.cc](https://strudel.cc) `import()` 进 REPL 播放。

```
strudel-sheet-lib/
├── songs/
│   └── dark-song/          # 一首曲子一个目录
│       ├── drum.js         # 鼓组 drum1
│       ├── bass.js         # bass1 bass2
│       ├── pad.js          # pad1
│       ├── subbass.js      # subbass1
│       ├── lead.js         # lead1 lead2
│       └── index.js        # 主工程：setcpm + arrange 整首
├── live/
│   └── dark-song.js        # 粘进 strudel.cc 的入口
└── lib/
    └── health.js           # RAW 通道自检
```

## 调用指令（粘到 strudel.cc）

打开 <https://strudel.cc>，把下面这段整段贴进编辑器，按 `Ctrl+Enter`：

```js
const BASE = 'https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@main/songs/dark-song/';
const { song } = await import(BASE + 'index.js?v=1');
$: song
```

`index.js` 内部再用相对路径 import 各条轨（`./drum.js`、`./bass.js` …），浏览器顺着同一基址把整棵依赖树拉下来。

### 停止

```js
hush()
```

（或按 `Ctrl+.`）

### 通道自检

```js
await import('https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@main/lib/health.js')
// { ready: true, repo: 'saxon267/Studel_LiveSet' }
```

## 为什么走 jsDelivr

浏览器 `import()` 一个模块，要求响应带 JS 的 MIME 和 CORS 头。GitHub 自己的 raw 地址过不了第一关：

| 地址 | `Content-Type` | `ACAO` | `import()` |
| --- | --- | --- | --- |
| `raw.githubusercontent.com/...` | `text/plain` | `*` | ❌ MIME 不对 |
| `github.com/.../raw/main/...` | `text/plain` | `*` | ❌ 同上 |
| `cdn.jsdelivr.net/gh/...@main/...` | `application/javascript` | `*` | ✅ |

所以统一走 **jsDelivr**：`https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@main/songs/dark-song/drum.js`

## 缓存

三个层次，按顺序排查：

1. **浏览器模块缓存** —— 入口里的 `?v=1` 就是钥匙，改完乐谱把它加一；也可以直接写 `?v=${Date.now()}`。
2. **jsDelivr CDN 缓存** —— 对 `@main` 是 `s-maxage=43200`（12 小时）。立刻生效的办法是刷一次：
   `https://purge.jsdelivr.net/gh/saxon267/Studel_LiveSet@main/*`
3. **要绝对确定** —— 把 `@main` 换成 commit sha：`https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@<sha>/...`（不可变、永久缓存）

## 写新歌的规矩

RAW 文件是**普通 ES 模块**，不经过 REPL 的转译器，所以：

- **mini-notation 必须显式写 `m("...")`**。REPL 里「双引号自动变 mini」的语法糖只作用于编辑器里的代码，模块里 `s("bd*4")` 会被当成普通字符串。
- **普通字符串用单引号**。这样文件既能在模块里跑，也能整段粘回 REPL 跑，两种环境行为一致。
- **模块里不能用 `$:`**（那是 REPL 的标签语法）。`$:` 只放在 `live/` 入口里。
- **可视化不要放进模块**。`.pianoroll()` / `.scope()` 注册的是 REPL 的部件，统一在入口文件里对整曲调用。

一首曲子的文件长这样：

```js
// drum.js
export const drum1 = stack(
  s(m('bd*4')).bank('tr707').gain(.5).duckorbit(2).duckattack(.2).duckdepth(.8),
  s(m('sd*2')).bank('tr707').gain(.8).delay(.1).room(.6),
  s(m('hh!7 [hh?3]')).bank('tr808').velocity(m('.8 .6 .9 .5 .7 .5 .8 .4')),
);
```

```js
// index.js
import { drum1 } from './drum.js';
import { bass1, bass2 } from './bass.js';
// ...
setcpm(140 / 4);
export const song = arrange(
  [2, stack(pad1, subbass1)],
  [16, stack(pad1, bass1, subbass1, drum1)],
  // ...
);
```

## 加一首新歌

1. 建 `songs/<曲名>/`，照上面拆轨，`index.js` 导出 `song`
2. 建 `live/<曲名>.js`，改 `BASE` 指向新目录
3. push 后在 REPL 里粘新入口，`?v=` 从 1 开始

## 关于 `duck*`

`.duckorbit() .duckattack() .duckdepth()` 由 `@strudel/webaudio` 注入，只在真正有音频引擎的 REPL 里存在。在 Node 里离线校验乐谱时，把它们和 `duck()` 一起打桩即可。

## License

乐谱代码可随意取用；Strudel 本身是 AGPL-3.0。
