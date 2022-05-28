<template>
  <div id="convert" class="ma-3">
    <h1 class="page-title mt-4">Convert</h1>
    <div class="mt-2 text-center"></div>
    <v-card class="ma-3 mx-auto" max-width="800">
      <v-toolbar flat class="black--text">
        <small class="black-text">概算値なので目安として利用して下さい</small>
      </v-toolbar>
      <v-tabs>
        <v-tab>長さ</v-tab>
        <v-tab>重さ</v-tab>
        <v-tab>温度</v-tab>
        <v-tab>バイト数</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Length />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <Weigh />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div class="mx-auto mt-4">
                <Temperature />
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div class="mx-auto mt-4">
                <Bytes />
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/decimal.js-light@2.5.0/decimal.min.js"></script>
<script>
import Length from "../components/convert/Length.vue";
import Temperature from "../components/convert/Temperature.vue";
import Weigh from "../components/convert/Weigh.vue";
import Bytes from "../components/convert/Bytes.vue";
export default {
  components: { Length, Temperature, Weigh, Bytes },
};
</script>
<style >
/* コンポーネント共通 */
.convert-input > input {
  width: 250px;
  border: 1px dashed black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 5px;
}
.convert-input > label {
  display: inline-block;
  width: 50px;
}
</style>
