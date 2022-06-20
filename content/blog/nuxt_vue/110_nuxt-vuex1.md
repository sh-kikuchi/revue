---
title: 【解体新書】Vuexでカテゴリー別メモ帳を作る1
description: Vuexのstore/vuex-persistedstate
category: Nuxt.js
createdAt: 2022-01-13
updatedAt: 2022-01-13
sortNumber: 110
---

# 1.はじめに
Vuexを使って、トレロを作ってみたいと思う。カテゴリ－が追加でき、且つカテゴリー内にアイテムが複数追加できる仕様。カテゴリーの移動、アイテムの移動（カテゴリ内外で可能）も出来るように実装していく。今回はVuexを使用し、データの保存はブラウザのLocalStorageですることとする。今回の目的はコンポ―ネント間の値の受け渡し方やVuexの基礎を学ぶことにある。

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

# 2. コンポーネントの構成について
今回、メインで使うディレクトリとファイルは以下を想定している。今回はドラッグアンドドロップをする対象であるカテゴリーとアイテムのコンポーネントをそれぞれ作成した。

- Label.vue:ビューページ
- category.vue:カテゴリー用コンポーネント
- item.vue:アイテム用コンポーネント
上記のコンポーネント構成：【親】 `Label.vue`←`category.vue`←`item.vue`【子】になっている。

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

# 3. Vuexの状態管理

### ■ State（label.js）
Vuexはアプリケーション内のコンポーネントが共通で管理出来るデータストアである。データを管理する時にまず、state内に初期データを用意する。これを基にデータの表示・追加・削除などの操作を行っていく。<br>

■Storeディレクトリ内に`label.js`を用意し、下記のような初期データを用意しておく。

```js
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
```

<br>

### ■ computed(Label.vue)
`Label.vue`でVuexのデータを扱う時は基本的に`this.$store.state.label.categories`で受け取る。（mapStateとかもあるので、これに限らず）
今回の実装で以下のエラーが発生し、その対処として`JSON.parse(JSON.stringify(obj))`という形をとっている。<br>

```js
<script>
  computed: {
    categories: {
      get: function () {
        return JSON.parse(JSON.stringify(this.$store.state.label.categories));
      },
    },
  },
</script>
```

<br>

### ■　エラー内容
```js
[vuex] Do not mutate vuex store state outside mutation handlers
```

<br>

これはvuexで管理している変数を直接書き換えようとした時に出るエラーで、これからまとめるドラッグ＆ドロップをする際に出たエラー。<b>swallow copy</b>と<b>deep copy</b>という考え方があるそう。前者はコピー元とコピー先両方が同じメモリを参照している状態で、後者は他のメモリ上にデータを複製するのでコピー先ではコミー元のメモリは参照していないのだと。前者でエラーを吐くので、後者の方法でエラー回避するために`JSON.parse(JSON.stringify(obj))`という書き方を行っている。

<br>

※参考
- [【javascript】オブジェクトのコピーは沼にハマるから気をつけろ](https://zawatech.com/?p=326)
- [ [Vuex]do not mutate vuex store state outside mutation handlers.の解決方法 ](https://zawatech.com/?p=319)
（ちなみに実装時は子コンポーネントのドラッグ＆ドロップ時に出た。）

<br><br>

# 4. local storageへの保存

### ■ インストール
```
npm install -S vuex-persistedstate
```

<br>

`package.json`でインストールされているか確認


<br>

```json
  "dependencies": {
    "vuex-persistedstate": "^4.1.0"
  },
```

<br>

### ■ vuex-persistedstate用ファイル
plugins配下にlocalStorage.jsという名前でファイルを作成。そして下記のようにコードを書く。` { key: 'revueLabel' }`の部分は実際にLocalStorageに保存する時の名前にあたる。

```js
import createPersistedState from "vuex-persistedstate";

export default ({ store, isHMR }) => {
  if (isHMR) return;

  if (process.client) {
    window.onNuxtReady((nuxt) => {
      createPersistedState(
        { key: 'revueLabel' }
      )(store);
    });
  }
};
```

<br>

### ■ nuxt.config.js

次に`nuxt.config.js`のplugins:に下記のコードを追加

```js
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false },
  ],
```

<br>

上記の設定をすることによって、Stateのデータを変更し、リロードしてもデータが変更した状態のまま、保持される。

<br>

# 5. おわりに
トレロ風のかんばんボートを作るにあたって、データの変更は追加や削除、ドラッグアンドドロップによる並べ替えを想定している。その時にどのようにデータを操作すれば良いかは本稿以降に整理する。

<br>

■ 参考
[Nuxt.js vuex-persistedstateを使ってLocal Storageにデータを保存する](https://mebee.info/2019/12/25/post-4710/)
