---
title: 【解体新書】Nuxt.jsでテックブログを作ろう3
description: 記事一覧作る
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2022-01-08
sortNumber: 103
---
# 1. はじめに
ブログの記事を読み込んで、「記事一覧」を作ります。<br>
`content`フォルダ＞`blog`フォルダの中に言語ごとのフォルダを用意し、各々記事を格納していることが前提となっております。

<br>

# 2. `index.vue`を作成
---
```
プロジェクトディレクトリ
│
│── pages
│   │── blog
│       │── _articles
│       │     │── _slug.vue
│       │     │── index.vue　←ここ
```
<br>

## template部分 
---
```html
<template>
  <div>
    <v-list shaped>
      <v-subheader>記事一覧</v-subheader>
      <v-list-item-group>
        <v-list-item v-for="(c, index) in contents" :key="index">
          <v-list-item-content>
            <nuxt-link :to="c.path" tag="div" class="tag-div-nuxt-link">{{
              c.title
            }}</nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
```
■ `v-for="(c, index) in contents" :key="index"`
> 変数`c`に格納された情報をループで表示される。例えば、`c.title`ようにメタ情報を表示することが出来る。※`<script>`タグで設定した変数`contents`でデータを抽出し、v-forでぶん回すことで記事のリストを表示することが出来る。
<br>

## script部分 
---
```js
<script>
export default {
  data() {
    return {
      lists: [],
      contents: [],
    };
  },
  async asyncData({ $content, route }) {
    var dir = route.path.split("/");
    var dirParam = dir[dir.length - 1];

    const contents = await $content("blog/" + dirParam)
      .only(["title", "createdAt", "path"])
      .sortBy("sortNumber", "asc")
      .fetch();
    return {
      lists: contents,
    };
  },
};
</script>
```
■ 【Pick Up】 asyncDataを利用して【各言語ごとの】記事一覧
- `index.vue`のURLを取得し、URLの一部を変数として取得。
	```
    var dir = route.path.split("/");
    var dirParam = dir[dir.length - 1];
	```
　
- 上記の変数を使って、contentフォルダ内の各言語のフォルダよりマークダウンの記事一覧を抽出
	```
	$content('blog/dirParam')
	```

- マークダウンで書いた記事のyamlの項目から必要なものを抽出
	```
    .only(["title", "createdAt", "path"])
	```
- ソート番号を昇順で並べる。
	```
    .sortBy("sortNumber", "asc")
	```
- 最終的にデータを収集
	```
    .sortBy("sortNumber", "asc")
	```
<br>

# 3.おわりに
元々、言語ごとに`_slug.vue`とか`index.vue`を用意していたのですが（例えばPHPの記事をまとめる時にはPHPのフォルダをつくり、その中に`_slug.vue`とか`index.vue`を格納）、今回は一元化するために`_articles`の中に`_slug.vue`とか`index.vue`を用意しました。言語の識別はURLの一部分を抜き取って引数とすることで実現しました。次回はこの記事一覧で読みたい記事をクリックした時に記事を表示させたいと思います。

<br>
