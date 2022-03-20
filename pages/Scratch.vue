<template>
  <div id="scratch">
    <h1 class="page-title pt-3">Scratch</h1>
    <v-container>
      <v-card tag="div" class="fortune-intro">
        おみくじをスクラッチでやってしまうという...。<br />おみくじの種類は大吉
        → 中吉 → 小吉 → 吉 → 半吉 → 末吉→ 末小吉 → 凶 → 小凶 → 半凶 → 末凶 →
        大凶となっています。1日の運試しをしてみては？
      </v-card>
      <vue-scratchable class="scratch-area text-center">
        <div v-for="n in 1" :key="n">{{ random() }}</div>
      </vue-scratchable>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "scratch",
  data() {
    return {
      fortune_ary: [
        "大吉",
        "中吉",
        "小吉",
        "吉",
        "半吉",
        "末吉",
        "末小吉",
        "凶",
        "小凶",
        "半凶",
        "末凶",
        "大凶",
      ],
    };
  },
  methods: {
    random: function () {
      const rnd = Math.floor(Math.random() * this.fortune_ary.length);
      return this.fortune_ary[rnd];
    },
  },
};
</script>

<style scoped>
.fortune-intro {
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
}
.scratch-area {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  background-color: rgb(241, 241, 243);
}
.scratch-area div {
  font-size: 50px;
  line-height: 200px;
}
</style>
