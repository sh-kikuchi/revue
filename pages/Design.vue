<template>
  <div id="designs">
    <h1 class="page-title mt-4">Designs</h1>
    <Color></Color>
    <Triangle></Triangle>
    <Position></Position>
    <FlexBox></FlexBox>
    <BorderStyle></BorderStyle>
  </div>
</template>
<script>
import BorderStyle from "../components/design/BorderStyle.vue";
import Color from "../components/design/Color.vue";
import FlexBox from "../components/design/FlexBox.vue";
import Position from "../components/design/Position.vue";
import Triangle from "../components/design/Triangle.vue";
export default {
  components: { Color, Triangle, Position, FlexBox, BorderStyle },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style scoped>
/* PC用レイアウト */
@media screen and (min-width: 767px) {
  /*ウィンドウ幅が767px以上の場合に適用*/
  .content-md {
    width: 350px;
    height: 350px;
  }
}

.content-box {
  height: 100%;
  align-items: center;
  margin-bottom: 50px;
}

/* 各コンテンツの名前 */
.content-name {
  margin-top: 10px;
  text-align: center;
  background: repeating-linear-gradient(
    45deg,
    #444,
    #444 10px,
    #888 0,
    #888 20px
  );
}

/* 各コンテンツのフォーム */
.content-form {
  width: 200px;
}
</style>
