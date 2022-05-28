<template>
  <div class="mx-auto mt-4" width="500px">
    <div class="text-center">
      <div class="convert-input">
        <input type="text" v-model="celsius" /> <label>℃</label>
      </div>
      <div class="convert-input">
        <input type="text" v-model="fahrenheit" /> <label>℉</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //温度
      celsius: 0,
      fahrenheit: 32,
    };
  },
  watch: {
    celsius: function (c_val) {
      this.celsius = Math.round(c_val*100)/100;
      this.fahrenheit = Math.round((c_val * 1.8 + 32)*100)/100;
    },
    fahrenheit: function (f_calc) {
      this.celsius = Math.round(((f_calc - 32) / 1.8)*100)/100;
      this.fahrenheit = Math.round(f_calc*100)/100;
    },
  },
};
</script>
<style scoped>
</style>
