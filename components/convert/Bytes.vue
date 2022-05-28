<template>
  <div class="mx-auto mt-4 text-center">
    <div class="convert-input">
      <input type="number" v-model="byte" /><label>B</label>
    </div>
    <div class="convert-input">
      <input type="number" v-model="kb" /> <label>KB</label>
    </div>
    <div class="convert-input">
      <input type="number" v-model="mb" /> <label>MB</label>
    </div>
    <div class="convert-input">
      <input type="number" v-model="gb" /> <label>GB</label>
    </div>
    <div class="convert-input">
      <input type="number" v-model="tb" /> <label>TB</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // バイト換算
      byte: 0,
      kb: 0,
      mb: 0,
      gb: 0,
      tb: 0,
    };
  },
  watch: {
    //バイト換算
    byte: function (value) {
      this.byte = value;
      this.kb = value / 1024;
      this.mb = value / 1024 / 1024;
      this.gb = value / 1024 / 1024 / 1024;
      this.tb = value / 1024 / 1024 / 1024 / 1024;
    },
  },
};
</script>
<style scoped>
</style>
