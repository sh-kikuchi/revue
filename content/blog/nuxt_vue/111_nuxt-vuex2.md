---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る
description: actionsとmutations
category: Nuxt.js
createdAt: 2022-01-13
updatedAt: 2022-01-13
sortNumber: 111
---

# 1.はじめに
-  Node.js：v14.17.5
-  npm：6.14.14
-  Nuxt.js：2.15.7
-  Nuxt Content：1.14.0

# 2. まずは全文

```js
export const state = () => ({
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
  next_category_id: 1,
})

export const mutations = {
  addCategory(state, payload) {
    state.categories.push({
      category_id: state.next_category_id,
      title: payload,
      items: []
    })
    state.next_category_id++;
  },
  addItem(state, payload) {
    state.categories[payload.category_id].items.push({
      text: payload.text
    })
  },
  deleteCategory(state, payload) {
    state.categories.splice(payload.category_id, 1)
    // カテゴリーが全滅状態
    if (state.categories.length == 0) {
      state.next_category_id = 0;
    }
    // 削除後に削除id以上を振りなおす
    for (var i = payload.category_id; i < state.categories.length; i++) {
      state.next_category_id =
        state.categories[i].category_id = i
    }
  },
  deleteItem(state, payload) {
    state.categories[payload.category_id].items.splice(payload.item_id, 1)
  },
}

export const actions = {
  addCategory(context, payload) {
    context.commit('addCategory', payload)
  },
  addItem(context, payload) {
    context.commit('addItem', payload)
  },
  deleteCategory(context, payload) {
    context.commit('deleteCategory', payload)
  },
  deleteItem(context, payload) {
    context.commit('deleteItem', payload)
  },
}
```

<br>

# 3. state
- state内の下記は初期データ。
- next_category_idは採番用。
```
export const state = () => ({
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
  next_category_id: 1,
})
```

<br>

# 4. actions
- dispatchをトリガーとしてactionsを動かす。
- context.commitでミューテーションをコミット呼び出すことが出来る。
- payloadはdispatchで渡されたデータが格納されている。
```js
export const actions = {
  addCategory(context, payload) {
    context.commit('addCategory', payload)
  },
  addItem(context, payload) {
    context.commit('addItem', payload)
  },
  deleteCategory(context, payload) {
    context.commit('deleteCategory', payload)
  },
  deleteItem(context, payload) {
    context.commit('deleteItem', payload)
  },
}
```

<br>

# 5. mutations
■ カテゴリー追加
- stateの`categories`にオブジェクトを追加する。
- category_idのキーには`state内のnext_category_id`の値をセット
- titleのキーにはpayload(label.vueから受け取った値)の値をセット
- itemsのキーは空の値
- 追加処理後は`next_category_id`の番号を1つ足す。
```js
  addCategory(state, payload) {
    state.categories.push({
      category_id: state.next_category_id,
      title: payload,
      items: []
    })
    state.next_category_id++;
  },
```

<br>

■ カテゴリー削除
- spliceで配列の順番を指定して削除する。
- 削除したら、残っているカテゴリーのidを採番をし直す必要がある。
```js
  deleteCategory(state, payload) {
    state.categories.splice(payload.category_id, 1)
    // カテゴリーが全滅状態
    if (state.categories.length == 0) {
      state.next_category_id = 0;
    }
    // 削除後に削除id以上を振りなおす
    for (var i = payload.category_id; i < state.categories.length; i++) {
      state.next_category_id =
        state.categories[i].category_id = i
    }
  },
```

<br>

■ アイテム追加
- カテゴリー配列の何番目かの指定は`category_id`
- アイテム追加：textのキーにpayload.text(label.vueから受け取った値)の値をセット
```js
  addItem(state, payload) {
    state.categories[payload.category_id].items.push({
      text: payload.text
    })
  },
```

<br>

■ アイテム削除
```js
  deleteItem(state, payload) {
    state.categories[payload.category_id].items.splice(payload.item_id, 1)
  },
```

<br>

# 6. おわりに
めんどい

<br>
