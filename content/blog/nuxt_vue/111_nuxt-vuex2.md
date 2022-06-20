---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る2
description: アイテム用コンポーネント
category: Nuxt.js
createdAt: 2022-01-13
updatedAt: 2022-01-13
sortNumber: 111
---

# 1.はじめに
今回はアイテム用コンポーネントをつくる。このコンポーネントは親であるカテゴリーコンポーネントで読み込んで、ループして表示するためのものになる。

-  Node.js：v14.17.5
-  npm：6.14.14
-  Nuxt.js：2.15.7
-  vuedraggable：2.24.3
-  vuejs-paginate： 2.1.0
-  vuetify：2.5.5,
-  vuex-persistedstate：4.1.0

<br>

- 実装：[Re:Vue](]https://sh-revue.net/label)
- GitHub：https://github.com/sh-kikuchi/revue


<br>

```
プロジェクトディレクトリ
│
│── components
│   │── label
│       │── category.vue
│       │── item.vue
│
│── pages
│   │── Label.vue
│
│── plugins
│   │── persistedstate.js
│
│── store
│   │── label.js
```

<br>


# 2. アイテムの表示（item.vue）
 ここはアイテムコンポーネント。言うなれば、カテゴリー内に存在するカードに相当するもの。
 `<template>`には`{{text}}`と削除ボタン（`@click="deleteItem"`）の要素を用意した。

<br>

### ■ アイテム削除処理用dispatch
`{{text}}`の中身は親コンポーネントである`category.vue`で値を頂戴するので、ここではpropsを設定しておく。その他にアイテムが持つインデックス番号とそのアイテムがどこに位置するのかを把握するためのカテゴリーのインデックス番号も取得出来るようにする。これらインデックス番号は削除処理の時に用いる。

<br>

`<script>`タグのmethods内にある`deleteItem`は×ボタンが押下された時に処理がはしる。 store.dispatch がトリガーとなって、`label.js`にあるVuexのアクションを実行することが出来る。そこで引数になっているのが、前述したカテゴリーとアイテムの２つのインデックス番号となる。

<br>

```html
<template>
  <div id="item">
    <div>{{ text }}</div>
    <div>
      <button class="btn btn-danger" @click="deleteItem">✖</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    categoryIndex: {
      type: Number,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteItem: function () {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          categoryIndex: this.categoryIndex,
          itemIndex: this.itemIndex,
        });
      }
    },
  },
};
</script>
<style scoped>

</style>

```

<br>

# 3. アイテムの削除処理（label.js）
### 【おさらい】
store.dispatch がトリガーとなって、`label.js`にあるVuexのアクションを実行することが出来る<br><br>
▼ item.vue
```js
  methods: {
    deleteItem: function () {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          categoryIndex: this.categoryIndex,
          itemIndex: this.itemIndex,
        });
      }
    },
```

<br>
▼ label.js
 処理の流れとしてはactions→ mutations の流れになる。<br>

### ■ actions
アクションの中ではcontent.commitでミューテーションを呼び出すことが出来る。
payloadの中身にdispatchで渡した引数がデータとして格納されている。

### ■ mutaitons
ミューテーション内でデータの変更が行われ、ここでは削除処理を施す。spliceで配列の順番を指定して削除する。

```js
export const mutations = {
  deleteItem(state, payload) {
    state.categories[payload.categoryIndex].items.splice(payload.itemIndex, 1)
  },
}

export const actions = {
  deleteItem(context, payload) {
    context.commit('deleteItem', payload)
  },
}
```

<br>

# 4. おわりに
アイテムの追加用フォームや追加処理は`Label.vue`(ビューページ)で実装するので、ここではあくまで、アイテムの中身（カードの部分）をコンポーネント化した。このコンポーネントは、カテゴリー内でループする用のコンテンツをまとめる役割を持つと言ってよい。

<br>
