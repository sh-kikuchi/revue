<template>
  <section class="panel">
    <img :src="image" />
    <div class="stop" @click="stop()" :class="{ inactive: isSelected }"></div>
  </section>
</template>
<script>
export default {
  //コンポーネント
  data() {
    return {
      images: [
        require("@/assets/image/osaka.jpg"),
        require("@/assets/image/fukui.png"),
        require("@/assets/image/panda.jpg"),
      ],
      image: require("@/assets/image/fukui.png"),
      timeoutId: "",
      isSelected: true,
    };
  },
  methods: {
    getRandomImage() {
      this.image = this.images[Math.floor(Math.random() * this.images.length)];
    },
    spin() {
      this.timeoutId = setTimeout(() => {
        this.getRandomImage();
        this.spin();
      }, 10);
    },
    stop() {
      if (this.isSelected) {
        return;
      }
      clearTimeout(this.timeoutId);
      this.isSelected = true;
    },
    activate() {
      this.isSelected = false;
    },
  },
};
</script>
