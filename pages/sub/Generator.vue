<template>
  <div id="convert" class="ma-3">
    <h1 class="page-title mt-4">Generator</h1>
    <div class="mt-2 text-center"></div>
    <v-card class="ma-3 mx-auto" max-width="800">
      <v-tabs>
        <v-tab>文字列生成</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <String />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
import String from "../../components/generator/String.vue";
export default {
  components: {
    String,
  },
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
