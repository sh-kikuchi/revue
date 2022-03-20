---
title: 【解体新書】Nuxt.jsでテックブログを作ろう2
description: ブログのメニューをつくる
category: Nuxt.js
createdAt: 2021-01-08
updatedAt: 2022-01-08
sortNumber: 102
---
# 1. はじめに
ブログの最初はメニュー画面にしたいと思います。各言語の記事一覧に遷移出来るように実装します。

<br>

# 2. `index.vue`を作成（blog直下）
---
ディレクトリは下記のように作ります。今回の実装はblogフォルダ直下にある`index.vue`を編集していきます。
```
プロジェクトディレクトリ
│
│── pages
│   │── blog
│       │── _articles
│       │     │── _slug.vue
│       │     │── index.vue
│       │── index.vue　←ここ
```
<br>

## template部分 
---
```html
<template>
  <div class="container">
    <h1 class="page-title text-center">Tech Blog</h1>
    <!-- langs配列からリストを表示 -->
    <v-list>
      <v-list-item
        link
        v-for="lang in langsData"
        v-bind:key="lang.id"
        tag="div"
        class="lang-list"
      >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <nuxt-link v-bind:to="lang.link" class="nuxt-link">{{
              lang.name
            }}</nuxt-link>
          </v-list-item-title>
          <v-list-item-subtitle>{{ lang.summery }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
```
■ `v-for="lang in langsData"`
> 変数`lang`に格納された情報をループで表示される。`<script>`タグで`langsData`の配列を用意し、その中にID、名前、URL、サマリの情報が入ったオブジェクトをセットしてあります。そのデータをループさせています。

<br>

## script部分 
---
```js
<script>
export default {
  data() {
    return {
      langsData: [
        {
          id: 1,
          name: "HTML/CSS",
          link: "/blog/html_css",
          summery: "マークアップ言語とデザインを学ぶ",
        },
        {
          id: 2,
          name: "JavaScript",
          link: "/blog/JavaScript",
          summery: "JavaScriptとjQueryを知る",
        },
        {
          id: 3,
          name: "Vue.js/Nuxt.js",
          link: "/blog/nuxt_vue",
          summery:
            "JavaScriptのフレームワークがVue.js。そしてVue.jsのフレームワークがNuxt.js",
        },
        {
          id: 4,
          name: "PHP/MySQL",
          link: "/blog/php",
          summery: "サーバーサイド言語とデータベース。CRUDを学ぶ",
        },
        {
          id: 5,
          name: "Laravel",
          link: "/blog/laravel",
          summery: "PHPのフレームワーク。",
        },
      ],
    };
  },
};
</script>
```
<br>

# 3.おわりに
今回はメニュー画面を作ってみました。見たい言語をクリックした時に`~/blog/言語名`に遷移し、見たい言語の記事リストが表示されるようになります。そのURLの言語名の部分は後ほど重要になります。次回は記事リストの表示についてまとめます。

<br>
