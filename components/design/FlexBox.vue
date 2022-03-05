<template>
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
                <input v-model="flex" type="radio" value="center" name="flex" />
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
</template>
<script>
export default {
  data() {
    return {
      display: "block",
      flex: "center",
    };
  },
  computed: {
    bindDisplay() {
      return ` display: ${this.display};
               justify-content: ${this.flex};`;
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

.flex-parent {
  width: 190px;
  height: 190px;
  background: rgb(241, 241, 243);
  border: 1px solid rgb(241, 241, 243);
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 50px;
}

.flex-child {
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: rgb(62, 60, 65);
}

.flex-child:nth-child(odd) {
  background-color: gray;
}
</style>
