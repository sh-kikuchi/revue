<template>
  <section>
    <h3 class="content-name text-center blue-grey">Triangle</h3>
    <div class="d-sm-flex justify-space-around">
      <div class="content-md order-1">
        <div :style="bindBorder" class="triangle"></div>
      </div>
      <div class="content-md order-0">
        <div class="content-box mx-auto d-flex align-center">
          <div class="content-form mx-auto">
            <div>
              <span>枠線左:</span>
              <input v-model="border1" type="range" max="100" min="0" />
            </div>
            <div>
              <span>枠線右:</span>
              <input v-model="border2" type="range" max="100" min="0" />
            </div>
            <div>
              <span>枠線底:</span>
              <input v-model="border3" type="range" max="100" min="0" />
            </div>
            <div>
              <span>回　転:</span>
              <input v-model="rotate" type="range" max="180" min="-180" />
            </div>
            <div class="code-space">
              <div class="text-center">Copy and Paste</div>
              <hr />
              width: 0px; <br />
              border: 1px solid transparent; <br />
              border-left :{{ border1 }}px solid transparent;<br />
              border-right : {{ border2 }}px solid transparent;<br />
              border-bottom: {{ border3 }}px solid darkslategray;<br />
              transform: rotate({{ rotate }}deg);
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
      border1: 100,
      border2: 100,
      border3: 150,
      rotate: 0,
    };
  },
  computed: {
    bindBorder() {
      return `  border-left: ${this.border1}px solid transparent;
                border-right: ${this.border2}px solid transparent;
                border-bottom: ${this.border3}px solid darkslategray;
                transform: rotate(${this.rotate}deg);`;
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

/* Triangle */
.triangle {
  width: 0px;
  border-width: 30px;
  border: 1px solid transparent;
  margin: 10px auto;
  margin-top: 80px;
  margin-bottom: 50px;
  vertical-align: middle;
}

/* コードスペース */
.code-space {
  font-size: 12px;
  background-color: rgb(225, 231, 238);
  padding: 5px;
  margin-top: 10px;
}
</style>
