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
