<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/image/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>
