VueCLI/Nuxt

## 親子コンポーネントを利用して画像を表示させる。
> ここではコンポーネントの概念を利用しながら、写真を表示させてみたいと思います。なお、Nuxt.jsで開発しておりますので、画像パスの指定方法がVueCLIとは書き方が異なる場合があります（未検証）。

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

■ 子コンポーネント(components/PictureGalley.vue)
```js
<template>
  <img class="pic-box" :src="path" @click="$emit('clickPicture')" />
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
  background-color: blue;
}
</style>
```
