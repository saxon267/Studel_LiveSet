# Strudel Sheet Lib

用 Strudel 写的曲子，按「乐器轨 → 主工程 → 现场入口」三层拆分，**不打包、不构建**，直接以 RAW 文件的方式被 [strudel.cc](https://strudel.cc) `import()` 进 REPL 播放。

```
strudel-sheet-lib/
├── songs/
│   └── dark-step/          # 一首曲子一个目录
│       ├── drum.js         # 鼓组 drum1
│       ├── bass.js         # bass1 bass2
│       ├── pad.js          # pad1
│       ├── subbass.js      # subbass1
│       ├── lead.js         # lead1 lead2
│       ├── pluck.js        # pluck1
│       ├── index.js        # 主工程：setcpm + arrange 整首
│       └── full.js         # 单文件完整版（直接粘进 REPL）
├── live/
│   └── dark-step.js        # 粘进 strudel.cc 的入口
└── lib/
    ├── play.js             # 曲目加载器：一行播放
    └── health.js           # RAW 通道自检
```

## 调用指令（粘到 strudel.cc）

**① 开新会话先贴这一行**（每个会话只贴一次）

```js
const { play } = await import('https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.2/lib/play.js')
```

**② 想听哪首贴哪行**

```js
$: await play('dark-step')
```

就这两步。`play(slug, v)` 的第二个参数是缓存钥匙，改完乐谱加一即可：`play('dark-step', 2)`。

### 曲目

| 曲目 | 分轨版 | 单文件版 |
| --- | --- | --- |
| Dark Step（140 BPM，68 循环） | `$: await play('dark-step')` | [songs/dark-step/full.js](songs/dark-step/full.js) 整段复制 |

加新曲目时，在 `songs/<slug>/` 建目录、`index.js` 导出 `song`，然后往这张表加一行。

### 单文件版

[songs/dark-step/full.js](songs/dark-step/full.js) 是整首曲子的单文件版本：不分轨、没有 import、不用先贴 `play()`，整段粘进 strudel.cc 就能放，适合快速试听或发给别人。它和分轨版内容等价，但改曲子还是建议改分轨版。

想加整曲波形：

```js
$: (await play('dark-step')).scope()
```

### 停止

```js
hush()
```

（或按 `Ctrl+.`）

### 通道自检

```js
await import('https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.2/lib/health.js')
// { ready: true, repo: 'saxon267/Studel_LiveSet' }
```

`play()` 实现见 [`lib/play.js`](lib/play.js)：它从自己的 URL 里推出基址，再按 slug 去 import 对应的 `index.js`，所以整棵依赖树（`./drum.js`、`./bass.js` …）都是相对同一个基址拉下来的。

## 为什么走 jsDelivr

浏览器 `import()` 一个模块，要求响应带 JS 的 MIME 和 CORS 头。GitHub 自己的 raw 地址过不了第一关：

| 地址 | `Content-Type` | `ACAO` | `import()` |
| --- | --- | --- | --- |
| `raw.githubusercontent.com/...` | `text/plain` | `*` | ❌ MIME 不对 |
| `github.com/.../raw/main/...` | `text/plain` | `*` | ❌ 同上 |
| `cdn.jsdelivr.net/gh/...@main/...` | `application/javascript` | `*` | ✅ |

所以统一走 **jsDelivr**：`https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.2/songs/dark-step/drum.js`

## 缓存

四层，按顺序排查：

1. **浏览器模块缓存** —— 入口里的 `?v=1` 就是钥匙，改完乐谱把它加一；也可以直接写 `?v=${Date.now()}`。
2. **jsDelivr CDN** —— `@main` 是「滑动引用」，jsDelivr 会缓存 12 小时，实测 purge 接口压不住它。所以对外发布固定用**标签**：本仓库钉在 `@v1.0.2`，不可变、立即生效、永久缓存。
3. **发新版** —— 改完乐谱打个新标签，再把入口里的版本号换掉：

   ```bash
   git tag v1.0.3 && git push github main --tags
   ```

   然后 `@v1.0.2` → `@v1.0.3`，`?v=` 归 1 重新数。

4. **刚加的新文件 404** —— jsDelivr 连 404 也会缓存。新文件第一次没取到，purge 一次即可：
   `https://purge.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.2/lib/新文件.js`

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
