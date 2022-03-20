---
title: 【解体新書】Nuxt.jsでテックブログを作ろう4
description: ブログ記事を表示させよう
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2022-01-08
sortNumber: 104
---

# 1. はじめに
いよいよブログ記事を読み込みましょう。前回は_articlesフォルダの中の`index.vue`にコードを書いていきましたが、今回は`_slug.vue`を編集します。このファイルでは、各言語の記事を表示させるためのコードを書いていきます。

# 2. `_slug.vue`を作成

```
プロジェクトディレクトリ
│
│── pages
│   │── blog
│       │── _articles
│       │     │── _slug.vue
│       │     │── index.vue
```
<br>

### template部分 
```html
<template>
  <div class="p-main-container">
    <div class="p-main-wrapper">
      <!-- メインのエリア -->
      <div id="l-center-area" class="ma-3">
        <div id="l-center-area" class="ma-3">
          <div chass="article-header">
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" max-width="800" class="mx-auto" dark>
                  <div chass="article-header">
                    <h1 class="c-article-title text-center">
                      {{ content.title }}
                    </h1>
                    <p class="c-article-descrition text-center">
                      {{ content.description }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- マークダウンのレンダリング箇所 -->
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
</template>
```
<br>

### script部分
> $contentフォルダの内のblogフォルダ
```js
<script>
export default {
  async asyncData({ $content, params, redirect, route }) {
    var dir = route.path.split("/");
    var dirParam = dir[dir.length - 2];
    const content = await $content("blog/" + dirParam)
      .where({ path: "/blog/" + dirParam + "/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/" + dirParam);
    }
  },
};
</script>
```
<br>

■ 【Pick Up】 asyncDataを利用して記事一覧
- `<script>`タグにある`const content = await $content("blog/" + dirParam)`のようにblog/dirParam（＝言語名）の部分でどの言語の記事を読み込むかを識別しています。URLに各言語の引数となる部分を用意していますので、それを下記の通りに抜き出します。
	```
	var dir = route.path.split("/");
	var dirParam = dir[dir.length - 2];
	```
	dirParamがcontent内のblog内の言語別フォルダの名前になっています。例えば、HTML&CSSの記事の場合		はcontent>blog>html_cssというディレクトリになっていますので、そこから記事を抽出しています。(詳しくは【解体新書】Nuxt.jsでブログを作ろう1に記載のディレクトリを参照のこと)

- 最終的にデータを収集

	```
	.fetch()
	```
- if (content.length > 0) 
  > trueなら要素を出力
  > falseなら記事一覧にリダイレクトする。

# 3. おわりに
今回でテックブログ作成は以上となります。各言語ごとの記事をまとめ、なるべく体系的に書いていくことを目的として本ブログを制作しています。なので、ブログというよりはWikiに近いかもしれないですね。ブログ以外にも活用方法は様々にありそうです。

<br>
