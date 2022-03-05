<template>
  <section>
    <h3 class="content-name text-center blue-grey">Colors</h3>
    <div class="d-sm-flex justify-space-around pt-3">
      <div class="content-md">
        <div :style="bindStyle" class="circle"></div>
      </div>
      <div class="content-md order-0">
        <div class="content-box mx-auto d-flex align-center">
          <div class="content-form mx-auto">
            <div>
              <span>赤:</span>
              <input v-model="red" type="range" max="255" min="0" />
            </div>
            <div>
              <span>緑:</span>
              <input v-model="green" type="range" max="255" min="0" />
            </div>
            <div>
              <span>青:</span>
              <input v-model="blue" type="range" max="255" min="0" />
            </div>
            <div>
              <span>透:</span>
              <input
                v-model="opacity"
                type="range"
                max="1"
                min="0"
                step="0.1"
              />
            </div>
            <div class="code-space">
              <div class="text-center">Copy and Paste</div>
              <hr />
              color: rgba({{ red }},{{ green }},{{ blue }},{{ opacity }})<br />
              background-color: rgba({{ red }},{{ green }},{{ blue }},{{
                opacity
              }})
            </div>
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
      red: 0,
      blue: 0,
      green: 0,
      opacity: 1,
    };
  },
  computed: {
    bindStyle() {
      return `background-color: rgba(${this.red},${this.green},${this.blue},${this.opacity})`;
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
  width: 210px;
}

/* color */
.circle {
  width: 200px;
  height: 200px;
  /* background-color: grey; */
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 50px;
  border-radius: 50%;
}

/* コードスペース */
.code-space {
  font-size: 12px;
  background-color: rgb(225, 231, 238);
  padding: 5px;
  margin-top: 15px;
}
</style>
