<template>
  <div>
    <div class="picture-wrap">
      <picture-gallery
        v-for="(pic, i) in pictures"
        :key="i"
        :path="pic.path"
        @clickPicture="onSelectPicture(pic.path)"
      ></picture-gallery>
      <transition name="fade">
        <Modal
          :is-shown="isShown"
          :picture-path="selectedPicture"
          @close="closeModal"
        ></Modal>
      </transition>
    </div>
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
