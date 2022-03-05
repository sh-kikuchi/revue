<template>
  <div id="color">
    <section>
      <h3 class="content-name blue-grey">Position</h3>
      <div class="d-sm-flex justify-space-around pt-3">
        <div class="content-md">
          <div class="position-parent">
            <div :style="bindPosition" class="position-child"></div>
          </div>
        </div>
        <div class="content-md">
          <div class="content-box mx-auto d-flex align-center">
            <div class="content-form mx-auto">
              <div>
                <span>上:</span>
                <input v-model="top" type="range" max="150" min="0" />
              </div>
              <div>
                <span>左:</span>
                <input v-model="left" type="range" max="150" min="0" />
              </div>

              <div class="code-space">
                <div class="text-center">Copy and Paste</div>
                <hr />
                <div>
                  ▼ 大きい正方形のCSS <br />position: relative;<br />
                  ▼ 小さい正方形のCSS position:absolute;<br />
                  top : {{ top }} px<br />
                  left: {{ left }}px <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      top: 0,
      left: 0,
    };
  },
  computed: {
    bindPosition() {
      return `top: ${this.top}px;left: ${this.left}px;`;
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
}

/* 各コンテンツのフォーム */
.content-form {
  width: 200px;
}

/* position */
.position-parent {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: rgb(241, 241, 243);
  margin: 10px auto;
  margin-top: 70px;
  margin-bottom: 50px;
}
.position-child {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(62, 60, 65);
}

/* コードスペース */
.code-space {
  font-size: 12px;
  background-color: rgb(225, 231, 238);
  padding: 5px;
  margin-top: 10px;
}
</style>
