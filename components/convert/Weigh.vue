<template>
  <div class="mx-auto mt-4">
    <div class="text-center">
      <div class="convert-input">
        <input type="number" v-model="mg" /> <label>mg</label>
      </div>
      <div class="convert-input">
        <input type="number" v-model="gram" /> <label>g</label>
      </div>
      <div class="convert-input">
        <input type="number" v-model="kg" /> <label>kg</label>
      </div>
      <div class="convert-input">
        <input type="number" v-model="ton" /> <label>t</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //重さ
      mg: 0,
      gram: 0,
      kg: 0,
      ton: 0,
    };
  },
  watch: {
    //重さ
    mg: function (mg_val) {
      this.mg = mg_val;
      this.gram = mg_val / 1000;
      this.kg = mg_val / 1000 / 1000;
      this.ton = mg_val / 1000 / 1000 / 1000;
    },
    gram: function (gram_val) {
      this.mg = gram_val * 1000;
      this.gram = gram_val;
      this.kg = gram_val / 1000;
      this.ton = gram_val / 1000 / 1000;
    },
    kg: function (kg_val) {
      this.mg = kg_val * 1000 * 1000;
      this.gram = kg_val * 1000;
      this.kg = kg_val;
      this.ton = kg_val / 1000;
    },
    ton: function (ton_val) {
      this.mg = ton_val * 1000 * 1000 * 1000;
      this.gram = ton_val * 1000 * 1000;
      this.kg = ton_val * 1000;
      this.ton = ton_val;
    },
  },
};
</script>
<style scoped>
</style>
