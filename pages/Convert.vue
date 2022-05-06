<template>
  <div id="convert">
    <h1 class="page-title mt-4">Convert</h1>
    <div class="mt-2 text-center">概算値なので悪しからず</div>
    <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">バイト換算</p>
      <div><input type="number" v-model="byte" /> B</div>
      <div><input type="number" v-model="kb" /> KB</div>
      <div><input type="number" v-model="mb" /> MB</div>
      <div><input type="number" v-model="gb" /> GB</div>
      <div><input type="number" v-model="tb" /> TB</div>
    </section>
    <!-- <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">世界の「長さ」</p>
      <div><input type="number" v-model.number="meter" /> m</div>
      <div><input type="number" v-model.number="inch" /> inch</div>
      <div><input type="number" v-model.number="ft" /> ft</div>
      <div><input type="number" v-model.number="yard" /> yard</div>
      <div><input type="number" v-model.number="mile" /> mile</div>
    </section> -->
    <!-- <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">文字コード</p>
      <div>Unicode：<input type="number" v-model="unicodeToString" /></div>
      <div>文字：<input type="text" v-model="stringToUnicode" /></div>
    </section> -->
    <!-- <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">フォント換算</p>
      <div>HTML{ font-size: <input type="number" v-model="fontSize" /> px}</div>
      <div><input type="number" v-model="px" /> px</div>
      <div><input type="number" v-model="rem" /> rem</div>
    </section> -->
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
      //フォント換算
      fontSize: 16,
      px: 16,
      rem: 1,
      unicodeToString: 0,
      stringToUnicode: "",
      //世界の「長さ」
      // meter: 0.0,
      // inch: 0.0,
      // ft: 0.0,
      // yard: 0.0,
      // mile: 0.0,
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
    kb: function (value) {
      this.byte = value * 1024;
      this.kb = value;
      this.mb = value / 1024;
      this.gb = value / 1024 / 1024;
      this.tb = value / 1024 / 1024 / 1024;
    },
    mb: function (value) {
      this.byte = value * 1024 * 1024;
      this.kb = value * 1024;
      this.mb = value;
      this.gb = value / 1024;
      this.tb = value / 1024 / 1024;
    },
    gb: function (value) {
      this.byte = value * 1024 * 1024 * 1024;
      this.kb = value * 1024 * 1024;
      this.mb = value * 1024;
      this.gb = value;
      this.tb = value / 1024;
    },
    tb: function (value) {
      this.byte = value * 1024 * 1024 * 1024 * 1024;
      this.kb = value * 1024 * 1024 * 1024;
      this.mb = value * 1024 * 1024;
      this.gb = value * 1024;
      this.tb = value;
    },
    // meter: function (value) {
    //   this.meter = value;
    //   this.inch = value * 39.37007;
    //   this.ft = value * 3.280834;
    //   this.yard = value * 1.09364;
    //   this.mile = value * 0.000621;
    // },
    // inch: function (value) {
    //   this.meter = value * 0.0254;
    //   this.inch = value;
    //   this.ft = value * 0.0833333;
    //   this.yard = value * 0.0277777;
    //   this.mile = value * 0.0000158;
    // },
    // ft: function (value) {
    //   this.meter = value * 0.3048;
    //   this.inch = value * 12.0;
    //   this.ft = value;
    //   this.yard = value * 0.3333333;
    //   this.mile = value * 0.000189;
    // },
    // yard: function (value) {
    //   this.meter = value * 0.914399;
    //   this.inch = value * 36.0;
    //   this.ft = value * 3.0;
    //   this.yard = value;
    //   this.mile = value * 0.000568;
    // },
    // mile: function (value) {
    //   this.meter = value * 1609.34;
    //   this.inch = value * 63359.9;
    //   this.ft = value * 5280.0;
    //   this.yard = value * 1760.0;
    //   this.mile = value;
    // },
    //フォントサイズ
    // unicodeToString: function (num) {
    //   this.unicodeToString = num;
    //   this.stringToUnicode = String.fromCharCode(num);
    // },
    // stringToUnicode: function (str) {
    //   this.stringToUnicode = str;
    //   this.unicodeToString = str.charCodeAt(0);
    // },
  },
};
</script>
<style scoped>
</style>
