export const state = () => ({
  categories: [
    {
      title: "トリセツ",
      items: [
        { text: "まずはお読み下さい" },
        { text: "カテゴリー/アイテムはEnterで追加" },
        { text: "カテゴリーの移動可" },
        { text: "カテゴリー間のアイテム移動可" },
        { text: "ご自身ブラウザにのみ保存されます。" },
        { text: "LocalStorage(F12キー)を確認！" },
        { text: "個人情報は記載しないこと！" },
      ],
    }
  ],
})

export const mutations = {
  addCategory(state, payload) {
    state.categories.push({
      title: payload,
      items: []
    })
  },
  addItem(state, payload) {
    state.categories[payload.categoryIndex].items.push({
      text: payload.text
    })
  },
  deleteCategory(state, payload) {
    state.categories.splice(payload.categoryIndex, 1)
  },
  deleteItem(state, payload) {
    state.categories[payload.categoryIndex].items.splice(payload.itemIndex, 1)
  },
  shiftCategory(state, payload) {
    state.categories = payload.newCategories;
  },
  shiftItem(state, payload) {
    state.categories = payload.categories;
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
  shiftCategory(context, payload) {
    context.commit('shiftCategory', payload)
  },
  shiftItem(context, payload) {
    context.commit('shiftItem', payload)
  }
}
