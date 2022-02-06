<template>
  <div id="color">
    <h1 class="page-title mt-4">Designs</h1>
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
              <div>
                color: rgba({{ red }},{{ green }},{{ blue }},{{
                  opacity
                }})<br />
                background-color: rgba({{ red }},{{ green }},{{ blue }},{{
                  opacity
                }})
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <span>左:</span>
                <input v-model="border1" type="range" max="100" min="0" />
              </div>
              <div>
                <span>右:</span>
                <input v-model="border2" type="range" max="100" min="0" />
              </div>
              <div>
                <span>底:</span>
                <input v-model="border3" type="range" max="100" min="0" />
              </div>
              <div>
                <span>転:</span>
                <input v-model="rotate" type="range" max="180" min="-180" />
              </div>
              <div style="font-size: 12px">
                width: 0px; <br />
                border: 3px solid #fff; <br />
                border-left :{{ border1 }}px solid transparent;<br />
                border-right : {{ border2 }}px solid transparent;<br />
                border-bottom: {{ border3 }}px solid tomato;<br />
                transform: rotate({{ rotate }}deg);
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
              ▼ 大きい正方形のCSS position: relative;<br />
              ▼ 小さい正方形のCSS position:absolute;<br />
              Top : {{ top }} px<br />
              Left: {{ left }}px <br />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3 class="content-name blue-grey">Flex</h3>
      <div class="d-sm-flex justify-space-around pt-3">
        <div class="content-md order-1">
          <div class="content-box mx-auto d-flex align-center">
            <div class="flex-parent mx-auto" :style="bindDisplay">
              <div class="flex-child"></div>
              <div class="flex-child"></div>
              <div class="flex-child"></div>
            </div>
          </div>
        </div>
        <div class="content-md order-0">
          <div class="content-box mx-auto d-flex align-center">
            <div class="content-form mx-auto">
              <form id="display-flex">
                <div>display:</div>
                <div>
                  <input
                    v-model="display"
                    type="radio"
                    value="block"
                    name="display"
                  />
                  <label for="display">block</label>
                </div>
                <div>
                  <input
                    v-model="display"
                    type="radio"
                    value="flex"
                    name="display"
                  />
                  <label for="display">flex</label>
                </div>
              </form>
              <hr />
              <form>
                <div>justify-content:</div>
                <div>
                  <input
                    v-model="flex"
                    type="radio"
                    value="center"
                    name="flex"
                  />
                  <label for="flex">center</label>
                </div>
                <div>
                  <input
                    v-model="flex"
                    type="radio"
                    value="space-between"
                    name="flex"
                  />
                  <label for="flex">space-between</label>
                </div>
                <div>
                  <input
                    v-model="flex"
                    type="radio"
                    value="space-around"
                    name="flex"
                  />
                  <label for="flex">space-around</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                  <select v-model="borderTop" id="border-top">
                    <option value="">--Please choose --</option>
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
                  <select v-model="borderRight" id="border-right">
                    <option value="">--Please choose --</option>
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
                  <select v-model="borderBottom" id="border-bottom">
                    <option value="">--Please choose --</option>
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
                  <select v-model="borderLeft" id="border-left">
                    <option value="">--Please choose --</option>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      red: 0,
      blue: 0,
      green: 0,
      opacity: 1,
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      border1: 100,
      border2: 100,
      border3: 150,
      rotate: 0,
      display: "block",
      flex: "center",
      borderTop: "solid",
      borderRight: "solid",
      borderBottom: "solid",
      borderLeft: "solid",
    };
  },
  computed: {
    bindStyle() {
      return `background-color: rgba(${this.red},${this.green},${this.blue},${this.opacity})`;
    },
    bindPosition() {
      return `top: ${this.top}px;left: ${this.left}px;`;
    },
    bindBorder() {
      return `  border-left: ${this.border1}px solid transparent;
                border-right: ${this.border2}px solid transparent;
                border-bottom: ${this.border3}px solid tomato;
                transform: rotate(${this.rotate}deg);`;
    },
    bindDisplay() {
      return ` display: ${this.display};
               justify-content: ${this.flex};`;
    },
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
}

/* 各コンテンツのフォーム */
.content-form {
  width: 200px;
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

/* Triangle */
.triangle {
  width: 0px;
  border-width: 30px;
  border: 3px solid #fff;
  margin: 10px auto;
  margin-top: 70px;
  margin-bottom: 50px;
  vertical-align: middle;
}

/* position */
.position-parent {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: deepskyblue;
  margin: 10px auto;
  margin-top: 70px;
  margin-bottom: 50px;
}
.position-child {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: lightslategrey;
}

.flex-parent {
  width: 200px;
  height: 200px;
  background: white;
  border: 1px solid black;
}

.flex-child {
  width: 50px;
  height: 50px;
  background-color: black;
  border: 1px solid black;
}

.flex-child:nth-child(odd) {
  background-color: gray;
  border: 1px solid gray;
}

/*ボーダーライン */
.border-line {
  border: 5px;
  width: 200px;
  height: 200px;
  color: black;
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
