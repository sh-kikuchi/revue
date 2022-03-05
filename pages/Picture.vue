<template>
  <div>
    <h1 class="text-center page-title mt-2">Views</h1>
    <p class="text-center sub-title blue-grey">
      <span>Akabane</span>
    </p>
    <div class="picture-wrap">
      <picture-gallery
        v-for="(pic, i) in pictures"
        :key="i"
        :path="pic.path"
        @clickPicture="onSelectPicture(pic.path, pic.text)"
        tag="img"
        class="img"
      ></picture-gallery>
    </div>
    <transition name="fade">
      <Modal
        :is-shown="isShown"
        :picture-path="selectedPicture"
        :picture-text="selectedPictureText"
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
      selectedPictureText: "ここにテキストが入ります",
      pictures: [
        {
          path: require("@/assets/image/akabane_views/arakawa.jpg"),
          text: "橋に挟まれた虚空に見とれる",
        },
        {
          path: require("@/assets/image/akabane_views/arakawa2.jpg"),
          text: "こんなに大きくなっちゃって",
        },
        {
          path: require("@/assets/image/akabane_views/hachiman.jpg"),
          text: "赤羽八幡神社",
        },
        {
          path: require("@/assets/image/akabane_views/hachiman2.jpg"),
          text: "あらあら何を見ているのかしら？",
        },
        {
          path: require("@/assets/image/akabane_views/hachiman3.jpg"),
          text: "上野東京ラインと埼京線・新幹線の線路を見下ろす",
        },
        {
          path: require("@/assets/image/akabane_views/kyokai.jpg"),
          text: "GLAYの18枚目シングル「Happiness」のロケ地？",
        },
      ],
    };
  },
  methods: {
    onSelectPicture(path, text) {
      this.setPicture(path, text);
      this.openModal();
    },
    openModal() {
      this.isShown = true;
    },
    closeModal() {
      this.isShown = false;
    },
    setPicture(path, text) {
      this.selectedPicture = path;
      this.selectedPictureText = text;
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 35px;
}
.sub-title {
  font-size: 15px;
}
.sub-title span {
  color: whitesmoke;
  font-weight: 700;
}
.img {
  vertical-align: bottom;
}
/*レスポンスデザイン */
/* パソコン*/
.picture-wrap {
  max-width: 600px;
  margin: 0 auto;
  vertical-align: bottom;
  background-color: rgba(225, 231, 238, 0.5);
}

/* スマートフォン*/
@media only screen and (max-width: 750px) {
  .picture-wrap {
    max-width: 300px;
    margin: 0 auto;
    vertical-align: top;
  }
  .sp {
    display: none !important;
  }
}
</style>
