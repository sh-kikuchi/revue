---
title: 【解体新書】日付のフォーマットを変更する
description: Nuxt.js × moment.js
category: Nuxt.js
createdAt: 2022-01-13
updatedAt: 2022-01-13
sortNumber: 109
---

# 1.はじめに
-  Node.js：v14.17.5
-  npm：6.14.14
-  Nuxt.js：2.15.7
-  Nuxt Content：1.14.0
-  nuxtjs/moment: 1.6.1

<br>

ブログ記事を読み込むとき、Yaml形式のメタ情報(本サイトでは言語ごとの記事一覧で更新日―
`updatedAt`を表示)から日付を引っ張ろうとしました。そうしたら下記のような表記でした。
```
 2021-12-28-T00:00:00.000Z
```

`T00:00:00.000Z`は「ISO-8601 日付表現の一部」ということであるが、とにかく要らないのでフォーマットを変えてみましょう。ここで扱うJavaScriptのライブラリはmoment.jsといいます。公式サイトは下記のものになります。
> https://momentjs.com/


<br>

# 2.パッケージをインストール
```
npm install --save-dev @nuxtjs/momen
```

<br>

# 3. nuxt.config.jsを編集
- まずは`modules`の中にパッケージ追加
  ```js
  modules: [
    ['@nuxtjs/moment']
  ],
  ```
- `moment`を追加し、ロケールを日本時間に設定する。
  ```js
  moment: {
    locales: ['ja']
  }
  ```
<br>

# 4. `<template>`タグの中で読み込む
下記のようなコードを埋め込む。
> $momentの括弧中にフォーマットを変更したいものを埋め込む。
```js
{{ $moment(c.updatedAt).format("YYYY-MM-DD") }}
```

<br>

# 5. おわりに
ネイティブなJavaScriptでさえ、日付変換は面倒なもの。そこでお役立ちのライブラリが`moment.js`だとのこと。なんと、Nuxt.jsでも使えるということで今回使ってみました。自由自在に形式を変えられそうです。

<br>
