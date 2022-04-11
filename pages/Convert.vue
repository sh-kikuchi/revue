<template>
  <div id="convert">
    <h1 class="page-title mt-4">Convert</h1>
    <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">バイト換算</p>
      <div><input type="number" v-model="byte" /> B</div>
      <div><input type="number" v-model="kb" /> KB</div>
      <div><input type="number" v-model="mb" /> MB</div>
      <div><input type="number" v-model="gb" /> GB</div>
      <div><input type="number" v-model="tb" /> TB</div>
    </section>
    <section class="mx-auto mt-4" style="width: 300px">
      <p class="text-center blue-grey">文字コード</p>
      <div>Unicode：<input type="number" v-model="unicodeToString" /></div>
      <div>文字：<input type="text" v-model="stringToUnicode" /></div>
    </section>
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
    //フォントサイズ
    unicodeToString: function (num) {
      this.unicodeToString = num;
      this.stringToUnicode = String.fromCharCode(num);
    },
    stringToUnicode: function (str) {
      this.stringToUnicode = str;
      this.unicodeToString = str.charCodeAt(0);
    },
  },
};
</script>
<style scoped>
</style>
