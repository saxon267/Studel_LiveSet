// 曲目加载器：把 RAW 的 import 细节收进仓库，REPL 里只剩一行。
//
// 用法：
//   const { play } = await import('https://cdn.jsdelivr.net/gh/saxon267/Studel_LiveSet@v1.0.1/lib/play.js')
//   $: await play('dark-song')
//
// 版本号是从本文件自己的 URL 里推出来的（@v1.0.1、@<sha>、
// 甚至自建 git 服务的 raw 路径都行），所以发新版不用改这里。

const ROOT = new URL('../', import.meta.url).href; // .../Studel_LiveSet@v1.0.1/

export const play = async (slug, v = 1) => {
  const mod = await import(`${ROOT}songs/${slug}/index.js?v=${v}`);
  return mod.song ?? mod.default;
};

export const list = ['dark-song'];
