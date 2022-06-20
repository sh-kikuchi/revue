---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る3
description: カテゴリーコンポーネント
category: Nuxt.js
createdAt: 2022-06-19
updatedAt: 2022-06-19
sortNumber: 113
---

# 1.はじめに
カテゴリーコンポーネントは「列」に相当し、列ごとにカードが表示される。1つのカテゴリー（列）の中にカテゴリーのタイトルとアイテム内容、アイテム追加ボタンの要素がある。ここで、アイテムコンポーネントをループで回し、且つドラッグ＆ドロップできるようにする。

<br>

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

# 2. カテゴリーの表示
### ■ `<template>`タグの中身
- カテゴリーのタイトル（`{{title}}`)
- カテゴリー削除（`@click="deleteCategory"`）
- アイテム内容（itemコンポーネント）
- アイテム追加（`@keyup.enter="addItem($event)"`)

<br>

### ■ draggableについて
- group属性を設定することで、カテゴリー間のアイテム移動も可能にする。
- `:list`は固定属性で、itemsの中身が変更された時のデータバインディングを行う、
- `:itemIndex`はitemコンポーネントでpropsとして設定しており、ここでループの`index`を格納する。
- `:text`はitemコンポーネントでpropsとして設定しており、ここでループの`item.text`を格納する。

<br>

### ■ itemコンポーネント
- `:categoryIndex`はpropsを設定（categoryIndexとして、親のLabel.vueから値をもらう。）
- `:itemIndex`はitemコンポーネントでpropsとして設定しており、ここでループの`index`を格納する。
- `:text`はitemコンポーネントでpropsとして設定しており、ここでループの`item.text`を格納する。
- `:itemIndex`はitemコンポーネントでpropsとして設定しており、ここでループの`index`を格納する。

```vue
<template>
  <v-card id="category" class="ma-2 pl-2 pr-2 label-list">
    <div class="category-title d-flex justify-space-between pr-3 pl-3">
      <div></div>
      <!-- カテゴリータイトル -->
      <div class="mt-2 mb-2">{{ title }}</div>
      <!-- カテゴリー削除 -->
      <div>
        <button class="btn btn-danger" @click="deleteCategory">✖</button>
      </div>
    </div>
    <!-- カード表示 -->
    <draggable
      group="items"
      :list="items"
      @end="$emit('change')"
    >
      <item
        v-for="(item, index) in items"
        :key="index"
        :categoryIndex="categoryIndex"
        :itemIndex="index"
        :text="item.text"
        tag="div"
        class="item-border d-flex justify-space-between pa-3"
      />
    </draggable>
    <!-- カード追加 -->
    <input
      class="input-item"
      placeholder="アイテムを追加する"
      @keyup.enter="addItem($event)"
    />
  </v-card>
</template>
<script>
import draggable from "vuedraggable";
import item from "../label/item.vue";
export default {
  components: {
    draggable,
    item,
  },
  props: {
    categories: {},
    title: {
      type: String,
      required: true,
    },
    categoryIndex: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    //カテゴリー削除
    deleteCategory: function () {
      if (confirm("本当にこのカテゴリーを削除しますか？")) {
        this.$store.dispatch("label/deleteCategory", {
          categoryIndex: this.categoryIndex,
        });
      }
    },
    //カード追加
    addItem: function (e) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addItem", {
          text: e.target.value,
          categoryIndex: this.categoryIndex,
        });
        e.target.value = "";
      }
    },
  },
};
</script>
<style scoped>
</style>

```

<br>

# 3. カテゴリー削除機能
### ■ `<template>`(category.vue)
```html
<div>
  <button class="btn btn-danger" @click="deleteCategory">✖</button>
</div>
```

<br>

### ■ dispatch処理(category.vue)
methods内にdispatch処理を記述
```js
deleteCategory: function () {
  if (confirm("本当にこのカテゴリーを削除しますか？")) {
    this.$store.dispatch("label/deleteCategory", {
      categoryIndex: this.categoryIndex,
    });
  }
}
```

<br>

### ■ actions(label.js)
```js
deleteCategory(context, payload) {
  context.commit('deleteCategory', payload)
},
```

<br>

### ■ mutations(label.js)
```js
deleteCategory(state, payload) {
  state.categories.splice(payload.categoryIndex, 1)
},
```

<br>

# 4. アイテム追加処理
### ■ `<template>`
```html
<input
  class="input-item"
  placeholder="アイテムを追加する"
  @keyup.enter="addItem($event)"
/>
```

<br>

### ■ methods(dispatch処理)
```js
addItem: function (e) {
  if (e.target.value == "") {
    return;
  } else {
    this.$store.dispatch("label/addItem", {
      text: e.target.value,
      categoryIndex: this.categoryIndex,
    });
    e.target.value = "";
  }
},
```
<br>

### ■ actions(label.js)
```js
addItem(context, payload) {
  context.commit('addItem', payload)
},
```
<br>

### ■ mutations(label.js)
```js
addItem(state, payload) {
  state.categories[payload.categoryIndex].items.push({
    text: payload.text
  })
},
```

<br>

# 5. おわりに
Vuexのデータ操作のパターンとしてはVueファイルのmethodsでdispatchで、Vuexのjsファイルの処理を動かしている感じ。その中のactionsがmutationsへの橋渡し役、mutationsがデータの変更を行う場所になっているのだろう。カテゴリーとアイテムのコンポーネントが作り終わり、今度はビューページであるLavel.vueを編集していく。その際はドラッグアンドドロップも出来るようにする。

<br>
