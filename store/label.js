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
