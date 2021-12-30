---
title: 【解体新書】Nuxt.jsでフォント指定
description: Googleフォントの使い方
category: Nuxt.js
createdAt: 2021-10-30
updatedAt: 2021-11-25
sortNumber: 105
---

※バージョン
> Node.js：v14.17.5<br>
> npm：6.14.14<br>
> Nuxt.js：2.15.7<br>
> Nuxt Content：1.14.0

## Nuxt.js でGoogle Fontを使う
> Googleフォントを使えるようになると、フォントのバリエーションも豊かになります。 nuxt-webfontloaderというパッケージを使うことで気軽にNuxt.jsでもフォントの指定が可能になります。

<br>

### 1. nuxt-webfontloaderをインストール
- [nuxt-webfontloaderのレファレンス](https://www.npmjs.com/package/nuxt-webfontloader)
```js
npm install nuxt-webfontloader
```
<br>

### 2. next.config.jsの中を編集する。
```js
  modules: [
    'nuxt-webfontloader',
  ],
```

### 3. 指定したい vueファイルでフォント指定
※参考にしたGoogleフォント(最終閲覧日:2021/10/30)
https://fonts.google.com/specimen/Teko?preview.text=Freedom%20only&preview.text_type=custom

```js
<template>
  <div class="font">Freedom only</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Teko:wght@500&display=swap");

.font {
  font-size: 30px;
  font-family: "Anton", sans-serif;
  font-family: "Teko", sans-serif;
}
</style>

```
