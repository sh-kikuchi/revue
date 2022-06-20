---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る4
description: Vue-draggable
category: Nuxt.js
createdAt: 2022-06-19
updatedAt: 2022-06-19
sortNumber: 113
---

# 1.はじめに
ここではカテゴリーとアイテムの並べ替えが出来るようにする。それをする際に`Vue-draggable`を使う。並べ替えが簡単に実装出来るだけでなく、並べ替えた直後にイベントを発火させることが出来る。その時に並べ替えたデータを保存する処理を動かしてみたい。

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
- カテゴリーの追加フォーム（`@keyup.enter="addCategory"`)
- 保存データクリアボタン(`@click="reset"`)
- カテゴリー内容（categoryコンポーネント）

<br>

### ■ draggableについて
`v-model="categories"`はcomputedに設定してある`categories`のデータを紐づけるためのもので、
ドラッグアンドドロップで並べ替えした時にその変更をバインディングするために必要。

<br>

### ■ itemコンポーネント
- `:title`はcategoryコンポーネントでpropsとして設定しており、ここでループの`category.title`を格納する。
- `:text`はitemコンポーネントでpropsとして設定しており、ここでループの`index`を格納する。
- `:items`はitemコンポーネントでpropsとして設定しており、ここでループの`category.items`を格納する。

<br>

```vue
<template>
  <div id="labels">
    <h1 class="page-title mt-2">Labels</h1>
    <div class="text-center">
      <input
        class="input-category pa-2 ma-3"
        placeholder="Enterキーでカテゴリー追加"
        @keyup.enter="addCategory"
      />
      <v-btn class="ma-3" outlined color="red" @click="reset">
        保存データクリア
      </v-btn>
    </div>
    <!-- カテゴリー -->
    <draggable class="d-flex" v-model="categories">
      <category
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :categoryIndex="index"
        :items="category.items"
        @change="shiftItem"
      />
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import category from "../components/label/category.vue";

export default {
  components: {
    draggable,
    category,
  },
  computed: {
    categories: {
      get: function () {
        return JSON.parse(JSON.stringify(this.$store.state.label.categories));
      },
      set: function (newCategories) {
        this.$store.dispatch("label/shiftCategory", {
          newCategories,
        });
      },
    },
  },
  methods: {
    shiftCategory: function () {
      this.$store.dispatch("label/shiftCategory", {
        categories: this.categories,
      });
    },
    shiftItem: function () {
      this.$store.dispatch("label/shiftItem", {
        categories: this.categories,
      });
    },
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
  },
};
</script>
<style scoped>
</style>

```

<br>

# 3. カテゴリー追加機能
### ■ `<template>`(Label.vue)
```html
<input
  class="input-category pa-2 ma-3"
  placeholder="Enterキーでカテゴリー追加"
  @keyup.enter="addCategory"
/>
```

<br>

### ■ dispatch処理(Label.vue)
methods内にdispatch処理を記述
```js
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
```

<br>

### ■ actions(label.js)
```js
addCategory(context, payload) {
  context.commit('addCategory', payload)
},
```

<br>

### ■ mutations(label.js)
```js
addCategory(state, payload) {
  state.categories.push({
    title: payload,
    items: []
  })
},
```

<br>

# 4. データクリア機能（初期値に戻す）
### ■ `<template>`
```html
<v-btn class="ma-3" outlined color="red" @click="reset">
  保存データクリア
</v-btn>
```

<br>

### ■ methods
```js
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
```
<br>

# 5. カテゴリーの並べ替え

### ■ stateのおさらい
```js
computed: {
  categories: {
    get: function () {
      return JSON.parse(JSON.stringify(this.$store.state.label.categories));
    },
    set: function (newCategories) {
      this.$store.dispatch("label/shiftCategory", {
        newCategories,
      });
    },
  },
},
```

<br>

### ■ カテゴリーの`<draggable>`タグ(label.js)
- `v-model="categories"`がセットされ、stateのデータと紐づける
```js
<draggable class="d-flex" v-model="categories">
  <category
    v-for="(category, index) in categories"
    :key="index"
    :title="category.title"
    :categoryIndex="index"
    :items="category.items"
    @change="shiftItem"
  />
</draggable>
```
<br>

### ■ dispatch処理(Label.vue)
methods内にdispatch処理を記述
```js
shiftCategory: function () {
  this.$store.dispatch("label/shiftCategory", {
    categories: this.categories,
  });
},
```

<br>

### ■ actions(label.js)
```js
shiftCategory(context, payload) {
  context.commit('shiftCategory', payload)
},
```

<br>

### ■ mutations(label.js)
```js
shiftCategory(state, payload) {
  state.categories = payload.newCategories;
},
```
<br>

# 6. アイテムの並べ替え
### ■ stateのおさらい
```js
computed: {
  categories: {
    get: function () {
      return JSON.parse(JSON.stringify(this.$store.state.label.categories));
    },
    set: function (newCategories) {
      this.$store.dispatch("label/shiftCategory", {
        newCategories,
      });
    },
  },
},
```

<br>

### ■ category.vueの`<draggable>`タグ
-  @end="$emit('change')"
- `$emit`は子である`category.vue`から親の`Lavel.vue`に値を渡すことが出来る。ここでは、changeという名のイベントを渡している。

```js
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
```
<br>

### ■ Label.vueの`<draggable>`タグ
-  子である`category.vue`から受け取ったイベント名changeは`@change="shiftItem"`という形で、データに変更が加わった時に`shiftItem`の処理が発火するようになっている。
```js
  <draggable class="d-flex" v-model="categories">
    <category
      v-for="(category, index) in categories"
      :key="index"
      :title="category.title"
      :categoryIndex="index"
      :items="category.items"
      @change="shiftItem"
    />
  </draggable>
```

<br>

### ■ dispatch処理(Label.vue)
methods内にdispatch処理を記述
```js
shiftItem: function () {
  this.$store.dispatch("label/shiftItem", {
    categories: this.categories,
  });
},
```

<br>

### ■ actions
```js
shiftItem(context, payload) {
  context.commit('shiftItem', payload)
}
```

<br>

### ■ mutations
```js
shiftItem(state, payload) {
  state.categories = payload.categories;
},
```

<br>

# 7. おわりに
Vuexを用いたトレロを作った記録を4回に分けてまとめてみた。今回はVue2系で、OptionsAPIで書いているので、CompositionAPIに対応したVue3で書くとまた少し工夫が必要になりそうだ。（LaravelとVue.jsで作ったトレロはVue3でCompositionAPIで書いている）Vuexは5に向けて一旦影を潜め、piniaが台頭してきている。後々のバージョンアップに伴い、書き換えもあるのかなと思うと嫌だな。

<br>
