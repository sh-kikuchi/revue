<template>
  <div v-if="isShown" class="modal" @click="$emit('close')">
    <div class="modal-detail">
      <img class="modal-picture" :src="picturePath" alt="selectedPicture" />
      <input
        type="text"
        class="modal-text"
        :value="pictureText"
        readonly
        disabled
      />
    </div>
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
    pictureText: {
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
.modal-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
}
.modal-picture {
  display: block;
  width: 300px;
  height: 300px;
}
.modal-text {
  display: block;
  width: 300px;
  font-size: 12px;
  color: whitesmoke;
}
</style>
