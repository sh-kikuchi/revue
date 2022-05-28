<template>
  <section>
    <h3 class="content-name blue-grey">Image-Edit</h3>
    <div class="d-sm-flex justify-space-around pt-3">
      <div class="content-md order-0">
        <div class="">
          <div>
            <h3>背景画像のエフェクト</h3>
            <p>▼画像プレビュー</p>
            <div class="mb-3">
              <input type="file" ref="preview" @change="uploadFile" />
            </div>
            <div class="blend-mode-area  mx-auto" :style="backgroundBlend"></div>
          </div>
        </div>
      </div>
      <div class="content-md order-1">
        <div class="content-box mx-auto d-flex align-center">
          <div class="content-form mx-auto display-grid">
            <section>
              <h3 class="mt-3">背景画像色</h3>
              <div class="mt-2 mb-3">
                background-color: {{ imgColor }}
                <input type="color" v-model="imgColor" />
              </div>
              <h3>ブレンドモード</h3>
              <span>background-blend-mode:</span>
              <select v-model="blendMode" id="blend-mode">
                <option value="nomal">nomal</option>
                <option value="multiply">multiply</option>
                <option value="screen">screen</option>
                <option value="overlay">overlay</option>
                <option value="darken">darken</option>
                <option value="lighten">lighten</option>
                <option value="color-dodge">color-dodge</option>
                <option value="color-burn">color-burn</option>
                <option value="hard-light">hard-light</option>
                <option value="soft-light">soft-light</option>
                <option value="difference">difference</option>
                <option value="hue">hue</option>
                <option value="saturation">saturation</option>
                <option value="color">color</option>
                <option value="luminosity">luminosity</option>
              </select>
            </section>
            <section>
              <h3 class="mt-3">色調/明彩/<br />コントラスト</h3>
              <div>
                <span>filter: brightness({{ brightness }}%);</span>
                <input v-model="brightness" type="range" max="300" min="0" />
              </div>
              <div>
                <span>filter: saturate({{ saturate }}%);</span>
                <input v-model="saturate" type="range" max="300" min="0" />
              </div>
              <div>
                <span>filter: contrast({{ contrast }}%);</span>
                <input v-model="contrast" type="range" max="300" min="0" />
              </div>
              <div>
                <span>filter: hue-rotate({{ hue }}deg);</span>
                <input v-model="hue" type="range" max="360" min="0" />
              </div>
            </section>
            <section>
              <h3 class="mt-3">モノクロ/セピア/<br />ネガ</h3>
              <div>
                <span>filter: grayscale({{ grayscale }}%);</span>
                <input v-model="grayscale" type="range" max="100" min="0" />
              </div>
              <div>
                <span>filter: sepia({{ sepia }}%);</span>
                <input v-model="sepia" type="range" max="100" min="0" />
              </div>
              <div>
                <span>filter: invert({{ invert }}%);</span>
                <input v-model="invert" type="range" max="100" min="0" />
              </div>
            </section>
            <section>
              <h3 class="mt-3">透過/ぼかし</h3>
              <div>
                <span>filter: opacity({{ opacity }}%);</span>
                <input v-model="opacity" type="range" max="100" min="0" />
              </div>
              <div>
                <span>filter: blur({{ blur }}px);</span>
                <input v-model="blur" type="text" />
              </div>
            </section>
            <section>
              <h3 class="mt-3">影つけ</h3>
              <div>
                <span
                  >drop-shadow({{ shadowX }} {{ shadowY }} {{ shadowBlur }}px
                  {{ shadowColor }});</span
                >
                <div>X軸方向</div>
                <input v-model="shadowX" type="range" max="100" min="0" />
                <div>Y軸方向</div>
                <input v-model="shadowY" type="range" max="100" min="0" />
                <div>影のぼかし半径px</div>
                <input v-model="shadowBlur" type="text" />
                <div>影の色</div>
                <input v-model="shadowColor" type="color" />
              </div>
            </section>
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
      blendMode: "",
      imgColor: "#ffffff",
      hue: 0,
      brightness: 100,
      saturate: 100,
      contrast: 100,
      grayscale: 0,
      sepia: 0,
      invert: 0,
      opacity: 100,
      blur: 0,
      shadowX: 0,
      shadowY: 0,
      shadowBlur: 0,
      shadowColor: "#ffffff",
      url: "",
    };
  },
  methods: {
    uploadFile() {
      const file = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(file);
      this.$refs.preview.value = "";
    },
  },
  computed: {
    backgroundBlend() {
      return `background-image:url(${this.url}); background-color:${this.imgColor};background-blend-mode: ${this.blendMode};
      filter:brightness(${this.brightness}%) saturate(${this.saturate}%) contrast(${this.contrast}%) hue-rotate(${this.hue}deg) grayscale(${this.grayscale}%) sepia(${this.sepia}%) invert(${this.invert}%) opacity(${this.opacity}%) blur(${this.blur}px) drop-shadow(${this.shadowX}px ${this.shadowY}px ${this.shadowBlur}px ${this.shadowColor})`;
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
    height: 100%;
  }

.display-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.display-grid section {
  padding: 10px;
  border-bottom: 1px solid black;
}
}
@media screen and (max-width: 766px) {
  /*ウィンドウ幅が767px以上の場合に適用*/
  .display-grid {
    display: grid;
    grid-template-columns: 1fr;
}
}

input {
  display: block;
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
  width: 250px;
}

select {
  width: 150px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: rgb(241, 241, 243);
}

/*ボーダーライン */
.blend-mode-area {
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
