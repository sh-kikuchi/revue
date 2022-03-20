---
title: 【解体新書】Nuxt.jsでテックブログを作ろう1
description: ブログ記事を書こう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2022-01-08
sortNumber: 101
---

# 1.はじめに
今回からこのサイトのメインでもあるテックブログ記事のつくり方をまとめておきたいと思います。
参考にしたサイトは下記のものです。
- [Suzunatsu web](https://www.suzunatsu.com/post/nuxtjs-nuxtcontent/) (最終閲覧日:2021/11/27)
- [Jun's web app](https://jun-app.com/series/nuxt-content-blog/1) (最終閲覧日:2021/11/27) 

<br>

上記の参考サイトをもとに言語ごとに記事をまとめたブログページを作ってみたいと思います。
実装にあたっての環境ですが、開発開始時は下記のバージョンで取り組みました。
- Node.js：v14.17.5<br>
- npm：6.14.14<br>
- Nuxt.js：2.15.7<br>
- Nuxt Content：1.14.0

<br>

# 2.  インストール
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
<br>

# 3. ブログ記事を書く
>/content/blog/{slug}というルーティングで下記のようなディレクトリに格納されているマークダウンを表示させたいと思います。{slug}にはマークダウンファイルの名前が入ります。

```
プロジェクトディレクトリ
│
│── content ←新規作成して下さい。
│   │── blog
│       │── html_css
│       │     │── abc.md
│       │     │── def.md
│       │     │── ghi.md
│       │
│       │── JavaScript
│       │── laravel
│       │── nuxt_vue
│       │── php
│   
│  
```
※カテゴリー毎にフォルダを用意して、マークダウンファイルを管理したいと思って、上記のディレクトリにしました。

<br>

##  各マークダウンファイルの一番上には必ずメタデータを用意する。
> 記事のメタデータをyaml形式で記述（下記のように---で囲む）

```yaml
---
title: 【解体新書】Nuxt.jsでブログを作ろう
description: テックブログ記事を書こう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-11-25
sortNumber: 101
---
```
<br>

# 4. おわりに
今回はNuxt.jsの環境を整え、ブログ作りのためにNuxt-contentというパッケージをインストールしました。そして、プロジェクトディレクトリにcontentフォルダを作成し、私の場合はその中にblogフォルダを作ってから各言語のフォルダを用意しました。次から数回にわたってマークダウンで書いたブログ記事を表示させていきたいと思います。
