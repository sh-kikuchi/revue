<template>
  <div class="mx-auto mt-4 text-center">
    <div class="convert-input">
      <input type="text" v-model="mm" /> <label>mm</label>
    </div>
    <div class="convert-input">
      <input type="text" v-model="cm" /> <label>cm</label>
    </div>
    <div class="convert-input">
      <input type="text" v-model="meter" /> <label>m</label>
    </div>
    <div class="convert-input">
      <input type="text" v-model="km" /> <label>km</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mm: 0,
      cm: 0,
      meter: 0,
      km: 0,
    };
  },
  watch: {
    // mm: function (mm_val) {
    //   this.mm = mm_val;
    //   this.cm = mm_val / 10;
    //   this.meter = mm_val / 100;
    //   this.km = mm_val / 100000;
    // },
    // cm: function (cm_val) {
    //   this.mm = cm_val * 10;
    //   this.cm = cm_val;
    //   this.meter = cm_val / 100;
    //   this.km = cm_val / 10000;
    // },
    // meter: function (meter_val) {
    //   this.mm = meter_val * 1000;
    //   this.cm = meter_val * 100;
    //   this.meter = meter_val;
    //   this.km = meter_val / 1000;
    // },
    // km: function (km_val) {
    //   this.mm = km_val * 1000000;
    //   this.cm = km_val * 100000;
    //   this.meter = km_val * 1000;
    //   this.km = km_val;
    // },
    km: function(value) {
      this.km = value
      this.meter = value * 1000
      this.cm = value * 100000
      this.mm = value * 1000000
    },
    //⏬mの値が変更されたら以下の処理が実行される。
    meter: function(value) {
      this.km = value / 1000
      this.meter = value
      this.cm = value * 100
      this.mm = value * 1000
    },
    cm: function(value) {
      this.km = value / 100000
      this.meter = value /100
      this.cm = value
      this.mm = value * 10
    },
    //⏬mmの値が変更されたら以下の処理が実行される。
    mm: function(value) {
      this.km = value / 1000000
      this.meter = value / 1000
      this.cm = value / 10
      this.mm = value
    }
  },
};
</script>
<style scoped>
</style>
