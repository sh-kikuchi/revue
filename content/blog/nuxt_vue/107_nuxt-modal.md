---
title: 【解体新書】インスタ風ギャラリーをつくる2
description: モーダル画面をつくる
category: Nuxt.js
createdAt: 2021-12-28
updatedAt: 2021-12-28
sortNumber: 107
---
## 画像をクリックするとモーダルが出現(´▽｀)
※バージョン
> Node.js：v14.17.5<br>
> npm：6.14.14<br>
> Nuxt.js：2.15.7<br>
> Nuxt Content：1.14.0
<br>

### モーダルをつくる(Modal.vue)
---
では、早速モーダルの部品を作るところから始めてみましょう。`Modal.vue`としてコードを下記のように書いてみます。

モーダルの構造としては【modal】というクラス名を付けた`<div>`タグ（モーダル画面の背景部分）とその中に【modal―picture】というクラス名を付けた、画像を表示するための`<img>`タグを用意しておきます。

```js
<template>
  <div v-if="isShown" class="modal" @click="$emit('close')">
    <img class="modal-picture" :src="picturePath" alt="selectedPicture" />
  </div>
</template>
<script>
export default {
  props: {
    isShown: {
      type: Boolean,
      default: false,
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
// モーダル画面周りの部分
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 29, 36, 0.9);
}
//モーダル画面
.modal-picture {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  object-fit: contain;
}
</style>
```

■ モーダル周りのはなし
- `v-if="isShown"`はモーダルの表示/非表示の分岐
- `@click="$emit('close')"`はcloseというカスタムイベントを`$emit`で子コンポーネントに渡している。これにより、モーダル部分外の背景をクリックすると、モーダルが【非表示】になる。

■ モーダルのはなし
- `:src="picturePath"`の部分でsrc属性に`picturePath`をバインディング

<br>

### 親コンポーネント側でモーダルを読み込む。(Picture.vue)

> 1_コンポーネントを読み込む
- Modal.vueを呼び出す。
  ```js
  import Modal from "../components/picture/Modal";
  ```

- export default中の`components`にModal.vueを登録する。
  ```js
    components: {
      Modal
    },
  ```

> 2_templateの編集
> 
```js
  <div class="picture-wrap">
    <picture-gallery
      v-for="(pic, i) in pictures"
      :key="i"
      :path="pic.path"
      @clickPicture="onSelectPicture(pic.path)" //追加
    ></picture-gallery>
  </div>
  <transition name="fade">
    <Modal
      :is-shown="isShown"
      :picture-path="selectedPicture"
      @close="closeModal"
    ></Modal>
  </transition>
```

■ 下記の部分で`onSelectPicture`というメソッドが動く。その際に引数として画像のURLを渡している。
```js
@clickPicture="onSelectPicture(pic.path)
```
<br>

■ `<Modal>`タグの中身。
- is-shown属性にisShownをバインディング
  <br>→モーダルの表示/非表示
- picture-path属性にselectedPictureをバインディング
  <br>→画像バスをセットする。
- @close="closeModal"
  <br>→親コンポーネントからイベントを`$emit`で受け取る。

<br>

> 3_メソッドを書く
- データの初期値を書いておく。
  ```js
    isShown: false,
    selectedPicture: "",
  ```

- export default中の`methods`に 処理を書く。
  ```js
    methods: {
      onSelectPicture(path) {
        this.setPicture(path);
        this.openModal();
      },
      openModal() {
        this.isShown = true;
      },
      closeModal() {
        this.isShown = false;
      },
      setPicture(path) {
        this.selectedPicture = path;
      },
    },
  ```
■ モーダル表示/非表示の処理部分<br>
`isShown`の初期値はfalseなので非表示だが、イベント`openModal()`を発火させると表示される。`closeModal()`は表示されたモーダルを非表示にする。

■ モーダルの中で画像を表示する処理部分<br>
`<template>`タグ中の`onSelectPicture`イベントが発火した時、`setPicture(path)`の処理が動き、`<modal>`の`selectedPicture`にパスがセットされることで画像表示される！`openModal()`でモーダル表示。

※親コンポーネント（Picture.vueのまとめ）
```js

<template>
  <div>
    <div class="picture-wrap">
      <picture-gallery
        v-for="(pic, i) in pictures"
        :key="i"
        :path="pic.path"
        @clickPicture="onSelectPicture(pic.path)"
        tag="img"
        class="img"
      ></picture-gallery>
    </div>
    <transition name="fade">
      <Modal
        :is-shown="isShown"
        :picture-path="selectedPicture"
        @close="closeModal"
      ></Modal>
    </transition>
  </div>
</template>
<script>
import PictureGallery from "../components/picture/PictureGallery";
import Modal from "../components/picture/Modal";

export default {
  components: {
    PictureGallery,
    Modal,
  },
  data() {
    return {
      isShown: false,
      selectedPicture: "",
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
  methods: {
    onSelectPicture(path) {
      this.setPicture(path);
      this.openModal();
    },
    openModal() {
      this.isShown = true;
    },
    closeModal() {
      this.isShown = false;
    },
    setPicture(path) {
      this.selectedPicture = path;
    },
  },
};
</script>
```
