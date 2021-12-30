---
title: 【解体新書】インスタ風ギャラリーをつくる
description: コンポーネントの概念に触れる。
category: Nuxt.js
createdAt: 2021-11-25
updatedAt: 2021-12-28
sortNumber: 106
---

※バージョン
> Node.js：v14.17.5<br>
> npm：6.14.14<br>
> Nuxt.js：2.15.7<br>
> Nuxt Content：1.14.0

## 親子コンポーネントを利用して画像を表示させる。
> ここではコンポーネントの概念を利用しながら、写真を表示させてみたいと思います。なお、Nuxt.jsで開発しておりますので、画像パスの指定方法がVueCLIとは書き方が異なる場合があります。

<br>

### コンポーネントとは？
---
- ある機能を有した再利用可能な部品のこと。
- コンポーネントを組み合わせて作るWebAppはコンポーネント指向開発という。
- 親子関係
  - 親コンポーネント：取り込む側
  - 子コンポーネント：取り込まれる側
  - 親から子へイベント伝達、データの受け渡し⇒`props`
  - 子から親へイベント伝達、データの受け渡し⇒`emit`

<br>


### 画像を表示させてみよう。

---

> まずは親コンポーネント、要するにメインとなるビューページを実装していきます。ビュー部分は`Picture.vue`を編集します。

↓ コードはこちら<br>
■ 親側のコンポーネント(pages/Picture.vue)
```js
<template>
  <div id="picture">
    <div class="picture-wrap">
      <picture-gallery
        v-for="(pic, i) in pictures"
        :key="i"
        :path="pic.path"
      ></picture-gallery>
    </div>
  </div>
</template>
<script>
import PictureGallery from "../components/picture/PictureGallery";

export default {
  name: "Picture",
  components: {
    PictureGallery,
  },
  data() {
    return {
      pictures: [
        {
          path: require("@/assets/image/panda.jpg"),
        },
        {
          path: require("@/assets/image/fukui.png"),
        },
        {
          path: require("@/assets/image/osaka.jpg"),
        },
      ],
    };
  },
};
</script>
```
※今回はNuxt.jsで開発しているため、画像パスの指定方法が特殊です
。<br>[【Nuxt.js】imgファイルの指定方法について](https://qiita.com/hiroyukiwk/items/a26e767d193ef8d9155b)

<br>

【説明】<br>
Scriptタグに下記のコードがインポートされているように、ここでは`PictureGallery`というコンポーネントを利用しています。写真の並べ方を部品として持っています。
```
import PictureGallery from "../components/picture/PictureGallery";
```

それから`data()`の部分で画像をセットしておいて、`<template>`タグ中の下記のコードのように`v-for`というループ処理を書いて、表示させています。
```html
  <picture-gallery
    v-for="(pic, i) in pictures"
    :key="i"
    :path="pic.path"
  ></picture-gallery>
```
★ 親コンポーネントに画像を置いて、表示させるだけの処理しか書いていません。子コンポーネントである`PictureGalley`では【画像のスタイルの部分
】を書いておきました（画像の大きさをどうするか？）

■ 子コンポーネント(components/PictureGalley.vue)
> `Props`でpathのデータを受け取って`<img>`タグのsrcプロパティにバインディングしている。つまり、親コンポーネントで埋め込んでいる`<picture-gallery>`タグ中の`:path`と下記の`:src`は紐づいていることになります。
```js
<template>
  <img class="pic-box" :src="path" >
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.pic-box {
  width: 300px;
  height: 300px;
}
</style>
```

<br>

★ 以上の実装で親子間のコンポーネント概念を利用した画像表示を実装してみました。コンポーネントの概念を使えば、部品の再利用が出来るので、コーディングもスッキリするやもしれないです～。

★ 次は表示させた画像をクリックした時にモーダル画面を出してみましょう。
