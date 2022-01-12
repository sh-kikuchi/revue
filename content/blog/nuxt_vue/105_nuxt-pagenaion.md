---
title: 【解体新書】Nuxt.jsのページネーション
description: 簡単にページネーション実装♪
category: Nuxt.js
createdAt: 2021-10-07
updatedAt: 2022-01-08
sortNumber: 105
---

# 1. はじめに
Nuxt.jsでページネーションの実装をしてみましょう。本サイトでは、Blogの各言語の記事一覧にページネーションが実装されています。この記事は実装した時のメモ書きになります♪<br>
※バージョン
> Node.js：v14.17.5<br>
> npm：6.14.14<br>
> Nuxt.js：2.15.7<br>
> Nuxt Content：1.14.0
> vuejs-paginate: 2.1.0

<br>

# 2. ページネーション

### インストール
---
```
npm install vuejs-paginate --save
```

### template部分
---
> 記事一覧にページネーションを追加する。
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
    <v-pagination
      v-model="page"
      :length="length"
      @input="pageChange"
    ></v-pagination>
  </div>
</template>
```

■ 【Pick Up】 ページネーションのバーを設定

```html
 <v-pagination
    v-model="page"
    :length="length"
    @input="pageChange"
  ></v-pagination>
```

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
  methods: {
    pageChange(pageNumber) {
      this.contents = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
};
</script>
```

■ 【Pick Up】 1ページに表示する数を表示させる。
> ページネーションの初期値 `page: 1;`<br>
> １ページに表示する数 `pageSize: 10;`<br>
> 表示数をpageSizeにデータを保持にlistsをdataプロパティに追加
```js
//(一部抜粋)
  data() {
    return {
      page: 1,
      lists: [],
      pageSize: 10,
    };
  },
```

■ 【Pick Up】 lengthメソッドの設定
> ページネーションのページの数を設定します<br>
> pageSize毎に切っていく。
```js
  mounted: function () {
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.contents = this.lists.slice(0, this.pageSize);
  },
```

■ 【Pick Up】 ページネーションの番号に合わせて表示する内容を変更
> pageSizeを10とした時、ページ番号が1であれば、slice(0,10)となり、10ずつ表示される。ページ番号が2の時はslice(10,20)のような計算になる。
```javaScript
  methods: {
    pageChange(pageNumber) {
      this.contents = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
```
<br>

# 3. おわりに
ページネーションを実装しておけば、あとは任意に表示させるページ数も調整できるため、便利。使いどころもありそう。

<br>



