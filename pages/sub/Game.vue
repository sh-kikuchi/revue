<template>
  <div id="convert" class="ma-3">
    <h1 class="page-title mt-4">Game</h1>
    <div class="mt-2 text-center"></div>
    <v-card class="ma-3 mx-auto" max-width="800">
      <v-tabs>
        <v-tab>スロット</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <SlotMachine />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
import SlotMachine from "../../components/game/SlotMachine";
export default {
  components: {
    SlotMachine,
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
