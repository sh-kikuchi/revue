---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る
description: ちょっとトレロのような
category: Nuxt.js
createdAt: 2022-01-13
updatedAt: 2022-01-13
sortNumber: 110
---

# 1.はじめに
-  Node.js：v14.17.5
-  npm：6.14.14
-  Nuxt.js：2.15.7
-  Nuxt Content：1.14.0

<br>

# 2.Label.vueの全文
```html
<template>
  <div id="labels">
    <h1 class="page-title mt-2">Labels</h1>
    <div class="text-center">
      <span class="pc">▼ 入力してENTER </span>
      <input
        class="input-category pa-2"
        placeholder="カテゴリーを追加する"
        @keyup.enter="addCategory"
      />
      <v-btn class="ma-2" outlined color="red" @click="reset">
        保存データクリア
      </v-btn>
    </div>

    <div class="label-content pa-5">
      <div>
        <draggable class="d-flex">
          <v-card
            v-for="(category, index) in categories"
            :key="index"
            width="300"
            tag="div"
            class="ma-2 label-list"
          >
            <v-list-item-title
              class="category-title d-flex justify-space-between pr-3 pl-3"
            >
              <div></div>
              <div>{{ category.title }}</div>
              <div>
                <button class="btn btn-danger" @click="deleteCategory(index)">
                  ✖
                </button>
              </div>
            </v-list-item-title>
            <draggable>
              <v-list-item
                v-for="(item, index) in category.items"
                :key="index"
                :category_id="category.category_id"
                tag="div"
                class="item-border d-flex justify-space-between"
              >
                <div></div>
                <div>{{ item.text }}</div>
                <div>
                  <button
                    class="btn btn-danger"
                    @click="deleteItem(category.category_id, index)"
                  >
                    ✖
                  </button>
                </div>
              </v-list-item>
            </draggable>
            <v-list-item class="pa-0">
              <input
                class="input-item"
                placeholder="アイテムを追加する"
                @keyup.enter="addItem($event, category.category_id)"
              />
            </v-list-item>
          </v-card>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  computed: {
    categories() {
      return this.$store.state.label.categories;
    },
  },
  methods: {
    reset: function () {
      if (
        confirm(
          "本当にクリアしますか？ ブラウザ（LocalStorage）に保存されているデータを消去します。"
        )
      ) {
        localStorage.removeItem("revueLabel");
        this.$router.go({ path: this.$router.currentRoute.path, force: true });
      }
    },
    addCategory: function (e) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addCategory", e.target.value);
        e.target.value = "";
      }
    },
    addItem: function (e, prm) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addItem", {
          text: e.target.value,
          category_id: prm,
        });
        e.target.value = "";
      }
    },
    deleteCategory: function (prm) {
      if (confirm("本当にこのカテゴリーを削除しますか？")) {
        this.$store.dispatch("label/deleteCategory", {
          category_id: prm,
        });
      }
    },
    deleteItem: function (c_prm, i_prm) {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          category_id: c_prm,
          item_id: i_prm,
        });
      }
    },
  },
};
</script>
```

<br>

# 3. データ表示
■ computedでstoreフォルダ内の`label.js`のstateにあるdataを引っ張る。
- $store.state.state名.オブジェクト名になっているのがPOINT
```js
  computed: {
    categories() {
      return this.$store.state.label.categories;
    },
  },
```
<br>

※ ちなみにデータの形は以下のようなJson風のオブジェクトになっている。
```js
  categories: [
    {
      category_id: 0,
      title: "トリセツ",
      items: [
        { text: "まずはお読み下さい" },
        { text: "カテゴリー/アイテムはEnterで追加" },
        { text: "カテゴリー同士のソート可" },
        { text: "カテゴリー内の項目のソート可" },
        { text: "ブラウザに保存されます。" },
        { text: "LocalStorage(F12キー)を確認！" },
        { text: "個人情報は記載しないこと！" },
      ],
    }
  ],
```
<br>

■ データはFor文でループさせる（二重ループ）
- カテゴリー（categories）の数だけループ
- カテゴリー内の項目数だけループ
- `draggable`は別途説明

```html
    <div class="label-content pa-5">
      <div>
        <draggable class="d-flex">
          <v-card
            v-for="(category, index) in categories"
            :key="index"
            width="300"
            tag="div"
            class="ma-2 label-list"
          >
            <v-list-item-title
              class="category-title d-flex justify-space-between pr-3 pl-3"
            >
              <div></div>
              <div>{{ category.title }}</div>
              <div>
                <button class="btn btn-danger" @click="deleteCategory(index)">
                  ✖
                </button>
              </div>
            </v-list-item-title>
            <draggable>
              <v-list-item
                v-for="(item, index) in category.items"
                :key="index"
                :category_id="category.category_id"
                tag="div"
                class="item-border d-flex justify-space-between"
              >
                <div></div>
                <div>{{ item.text }}</div>
                <div>
                  <button
                    class="btn btn-danger"
                    @click="deleteItem(category.category_id, index)"
                  >
                    ✖
                  </button>
                </div>
              </v-list-item>
            </draggable>
            <v-list-item class="pa-0">
              <input
                class="input-item"
                placeholder="アイテムを追加する"
                @keyup.enter="addItem($event, category.category_id)"
              />
            </v-list-item>
          </v-card>
        </draggable>
      </div>
    </div>
  </div>
```

<br>

# 4. カテゴリー追加処理用dispatch
■ 入力してEnterを押下するとメソッドの`addCategory`の処理へ
```html
  <input
    class="input-category pa-2"
    placeholder="カテゴリーを追加する"
    @keyup.enter="addCategory"
  />
```

<br>

■ dispatch
>  Vuexのアクション（actions）は store.dispatch がトリガーとなって実行される。
- inputタグで入力した値はイベントオブジェクト(e.target.value)で取得できる。
- 何も入力なれけば、処理は何も行われない。
- 入力があった場合は、`label.jsのaddCategory`の処理に行く。
- e.target.valueはの`label.jsのaddCategory`の引数として渡されたあと、初期化（inputタグの初期化）
```js
  addCategory: function (e) {
    if (e.target.value == "") {
      return;
    } else {
      this.$store.dispatch("label/addCategory", e.target.value);
      e.target.value = "";
    }
  },
```

# 5. カテゴリー削除処理用dispatch
■ ×ボタンをクリックしたら削除処理へ
- 引数はindex。（何番目のカテゴリーを削除するか）
```html
  <v-card
    v-for="(category, index) in categories"
    :key="index"
    width="300"
    tag="div"
    class="ma-2 label-list"
  >
    <v-list-item-title
      class="category-title d-flex justify-space-between pr-3 pl-3"
    >
      <div></div>
      <div>{{ category.title }}</div>
      <div>
        <button class="btn btn-danger" @click="deleteCategory(index)">
          ✖
        </button>
      </div>
    </v-list-item-title>
  </v-card>

```

<br>

■ dispatch
>  Vuexのアクション（actions）は store.dispatch がトリガーとなって実行される。
- 確認画面でOKの場合に`label.jsのdeleteCategory`の処理に行く。
- テンプレート部分で引数としたindexをprmとして受け取り、さらに`category_id`をキーとして`label.jsのdeleteCategory`に値を渡す。
```js
  deleteCategory: function (prm) {
    if (confirm("本当にこのカテゴリーを削除しますか？")) {
      this.$store.dispatch("label/deleteCategory", {
        category_id: prm,
      });
    }
  },
```


<br>

# 6. アイテム追加処理用dispatch
■ 入力してEnterを押下するとメソッドの`addCategory`の処理へ
- アイテム追加の場合は少し複雑で、どのカテゴリーの中にアイテムを加えたいかの観点が必要になる。引数を`$event`(入力した値)と`category.category_id`(対象のカテゴリーID)の2つをセットしている。
```html
  <input
    class="input-item"
    placeholder="アイテムを追加する"
    @keyup.enter="addItem($event, category.category_id)"
  />
```

<br>

■ dispatch
>  Vuexのアクション（actions）は store.dispatch がトリガーとなって実行される。
- inputタグで入力した値はイベントオブジェクト(e.target.value)で取得できる。
- 処理内容はカテゴリーの追加処理と同じ。
- `label.jsのaddItem`に渡すデータは入力した値とカテゴリーIDの2つ
```js
  addItem: function (e, prm) {
    if (e.target.value == "") {
      return;
    } else {
      this.$store.dispatch("label/addItem", {
        text: e.target.value,
        category_id: prm,
      });
      e.target.value = "";
    }
  },
```

# 7. アイテム削除処理用dispatch
■ ×ボタンをクリックしたら削除処理へ
- 引数がカテゴリーIDとアイテムのindexの2つ。つまりどのカテゴリーの何番目を削除するかを指定する。

```html
  <v-list-item
    v-for="(item, index) in category.items"
    :key="index"
    :category_id="category.category_id"
    tag="div"
    class="item-border d-flex justify-space-between"
  >
    <div></div>
    <div>{{ item.text }}</div>
    <div>
      <button
        class="btn btn-danger"
        @click="deleteItem(category.category_id, index)"
      >
        ✖
      </button>
    </div>
  </v-list-item>
```

<br>

■ dispatch
>  Vuexのアクション（actions）は store.dispatch がトリガーとなって実行される。
- 【template】category.category_id → 【script】c_prm
- 【template】index → 【script】i_prm
- `label.jsのdeleteItem`に渡すデータはカテゴリーidとアイテムのインデックス番号
```js
    deleteItem: function (c_prm, i_prm) {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          category_id: c_prm,
          item_id: i_prm,
        });
      }
    },
```






# 8. おわりに
くそややこしいわ。

<br>
