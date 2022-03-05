<template>
  <section>
    <h3 class="content-name blue-grey">Border-Style</h3>
    <div class="d-sm-flex justify-space-around pt-3">
      <div class="content-md order-0">
        <div class="outer-border">
          <div class="border-line" :style="borderStyle"></div>
        </div>
      </div>
      <div class="content-md order-1">
        <div class="content-box mx-auto d-flex align-center">
          <div class="content-form mx-auto">
            <form id="display-flex">
              <div>
                <span>枠線上:</span>
                <select v-model="borderTop" id="border-top">
                  <option value="none">none</option>
                  <option value="hidden">hidden</option>
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                  <option value="inset">inset</option>
                  <option value="outset">outset</option>
                </select>
              </div>
              <div>
                <span>枠線右:</span>
                <select v-model="borderRight" id="border-right">
                  <option value="none">none</option>
                  <option value="hidden">hidden</option>
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                  <option value="inset">inset</option>
                  <option value="outset">outset</option>
                </select>
              </div>
              <div>
                <span>枠線底:</span>
                <select v-model="borderBottom" id="border-bottom">
                  <option value="none">none</option>
                  <option value="hidden">hidden</option>
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                  <option value="inset">inset</option>
                  <option value="outset">outset</option>
                </select>
              </div>
              <div>
                <span>枠線左:</span>
                <select v-model="borderLeft" id="border-left">
                  <option value="none">none</option>
                  <option value="hidden">hidden</option>
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                  <option value="ridge">ridge</option>
                  <option value="inset">inset</option>
                  <option value="outset">outset</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      borderTop: "solid",
      borderRight: "solid",
      borderBottom: "solid",
      borderLeft: "solid",
    };
  },
  computed: {
    borderStyle() {
      return ` border-style: ${this.borderTop} ${this.borderRight} ${this.borderBottom} ${this.borderLeft};`;
    },
  },
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
  background-color: rgb(183, 204, 219);
}

/* 各コンテンツのフォーム */
.content-form {
  width: 200px;
}

/*ボーダーライン */
.border-line {
  border: 5px;
  width: 200px;
  height: 200px;
  color: rgb(62, 60, 65);
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 50px;
  /* background-color: rgb(62, 60, 65); */
}
.outer-border {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#border-top,
#border-right,
#border-bottom,
#border-left {
  border-bottom-style: dotted;
  margin-bottom: 2px;
}
</style>
