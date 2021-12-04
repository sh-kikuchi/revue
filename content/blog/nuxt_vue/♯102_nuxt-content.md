---
title: 【解体新書】Nuxt.jsでブログを作ろう2
description: 記事一覧作る
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-11-25
sortNumber: 102
---

### ブログ記事を読み込みましょう
>  `index.vue`を作成
---
```
プロジェクトディレクトリ
|
|── pages
│   |── blog
│       |── html_css
│       |     |── _slug.vue
│       |     |── index.vue
│       |
│       |── JavaScript
│       |── laravel
│       |── nuxt_vue
│       |── php
│   
```
<br>

### template部分 
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
> 変数`c`に格納された情報をループで表示される。例えば、`c.title`ようにメタ情報を表示することが出来る。
  
<br>

### script部分 
---
```js
<script>
export default {
  data() {
    return {
      page: 1,
      length: 0,
      lists: [],
      contents: [],
      pageSize: 10,
    };
  },
  mounted: function () {
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.contents = this.lists.slice(0, this.pageSize);
  },
  async asyncData({ store, $content, params }) {
    const contents = await $content("blog/html_css")
      .only(["title", "createdAt", "path"])
      .sortBy("sortNumber", "asc")
      .skip(0)
      .limit(15)
      .fetch();
    return {
      contents
    };
  },

};
</script>
```
■ 【Pick Up】 asyncDataを利用して記事一覧
- `$content('blog/html_css')`
  > content内のblog/html_cssフォルダーより記事を抽出

- `.only(["title", "createdAt", "path"])`
  > コンテンツ取得をする。

- `.sortBy("sortNumber", "asc")`
  > ソート番号を昇順で並べる。

- `.skip(n)`
  > 結果をnだけスキップします。

- `.limit(n)`
  > 結果の数を最大でnまでに制限します。

- `.fetch()`
  > データを収集
