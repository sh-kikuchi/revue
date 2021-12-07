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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 29, 36, 0.9);
}
.modal-picture {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 200px);
  height: calc(100vh -100px);
  object-fit: contain;
}
</style>
