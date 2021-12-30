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
  width: 150px;
  height: 150px;
}
</style>
