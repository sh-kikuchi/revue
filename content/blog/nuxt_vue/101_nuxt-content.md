---
title: 【解体新書】Nuxt.jsでブログを作ろう1
description: ブログ記事を書こう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-11-25
sortNumber: 101
---

※参考
- [Suzunatsu web](https://www.suzunatsu.com/post/nuxtjs-nuxtcontent/) (最終閲覧日:2021/11/27)
- [Jun's web app](https://jun-app.com/series/nuxt-content-blog/1) (最終閲覧日:2021/11/27)


※バージョン
> Node.js：v14.17.5<br>
> npm：6.14.14<br>
> Nuxt.js：2.15.7<br>
> Nuxt Content：1.14.0

---

### ※インストール
- Nuxt.jsのプロジェクトを立ち上げるのじゃ。
  ```
  npx create-nuxt-app <プロジェクト名>
  ```

- nuxt/contentというパッケージをインストール
  ```
  npm install @nuxt/content
  ```

- nuxt.config.js
  ```
    modules: [
      '@nuxt/content',
    ],
  ```

## ブログ記事を書く
>/content/blog/{slug}というルーティングで下記のようなディレクトリに格納されているマークダウンを表示させたいと思います。{slug}にはマークダウンファイルの名前が入ります。

```
プロジェクトディレクトリ
|
|── content ←新規作成して下さい。
│   |── blog
│       |── html_css
│       |     |── abc.md
│       |     |── def.md
│       |     |── ghi.md
│       |
│       |── JavaScript
│       |── laravel
│       |── nuxt_vue
│       |── php
│   
│  
```
※カテゴリー毎にフォルダを用意して、マークダウンファイルを管理したいと思って、上記のディレクトリにしました。

<br>

■ 各マークダウンファイルの一番上にメタデータを用意する。
> 記事のメタデータをyaml形式で記述（下記のように---で囲む）

```yaml
---
title: 【解体新書】Nuxt.jsでブログを作ろう
description: ブログ記事を書こう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-11-25
sortNumber: 101
---
```
