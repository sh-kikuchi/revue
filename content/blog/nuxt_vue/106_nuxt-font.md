---
title: 【解体新書】Nuxt.jsでフォント指定
description: Googleフォントの使い方
category: Nuxt.js
createdAt: 2021-10-30
updatedAt: 2021-11-25
sortNumber: 105
---

# 1.はじめに
Nuxt.js でGoogle Fontを使ってみましょう。使えるようになると、フォントのバリエーションも豊かになります。 nuxt-webfontloaderというパッケージを使うことで気軽にNuxt.jsでもフォントの指定が可能になります。環境は下記の通りになります。
-  Node.js：v14.17.5<br>
-  npm：6.14.14<br>
-  Nuxt.js：2.15.7<br>
-  Nuxt Content：1.14.0

<br>

# 2. nuxt-webfontloaderをインストール
- [nuxt-webfontloaderのレファレンス](https://www.npmjs.com/package/nuxt-webfontloader)
```js
npm install nuxt-webfontloader
```
<br>

#3. next.config.jsの中を編集する。
■modulesの中に` 'nuxt-webfontloader'を追加
```js
  modules: [
    'nuxt-webfontloader',
  ],
```
■webfontloaderを用意し、使いたいgoogleフォントのフォントファミリーとフォントウェイトを設定する。（これが漏れるとnpm run devではフォントの変更が反映されていても本番環境でされていないという不具合に出くわしたりする。。というのが自分の経験。）
```
  webfontloader: {
    google: {
      families: ['Anton:400,700', 'Teko:400,700']
    }
  },
```

<br>

# 3. 指定したい vueファイルでフォント指定
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
<br>

# 4. おわりに
まあ、、めんどくさいですけどもこれでGoogleフォントが使えるようになる...はずです。一度設定してしまえば、結構色々遊べると思うので、ぜひお試しを。

<br>
