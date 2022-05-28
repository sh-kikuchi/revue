<template>
  <div id="designs" class="ma-5">
    <h1 class="page-title mt-4">Designs</h1>
    <ul class="tab-head ma-5">
      <li :class="{ active: activeTab == 1 }">
        <button @click="tabChange(1)">Colors</button>
      </li>
      <li :class="{ active: activeTab == 2 }">
        <button @click="tabChange(2)">Borders</button>
      </li>
      <li :class="{ active: activeTab == 3 }">
        <button @click="tabChange(3)">Layouts</button>
      </li>
      <li :class="{ active: activeTab == 4 }">
        <button @click="tabChange(4)">Image</button>
      </li>
    </ul>
    <div class="tab-body">
      <div v-if="activeTab == 1">
        <Color />
      </div>
      <div v-else-if="activeTab == 2">
        <Triangle />
        <BorderStyle />
      </div>
      <div v-else-if="activeTab == 3">
        <Position />
        <FlexBox />
      </div>
      <div v-else-if="activeTab == 4">
        <ImageEdit />
      </div>
    </div>
  </div>
</template>
<script>
import BorderStyle from "../components/design/BorderStyle.vue";
import ImageEdit from "../components/design/ImageEdit.vue";
import Color from "../components/design/Color.vue";
import FlexBox from "../components/design/FlexBox.vue";
import Position from "../components/design/Position.vue";
import Triangle from "../components/design/Triangle.vue";
export default {
  components: {
    Color,
    Triangle,
    Position,
    FlexBox,
    BorderStyle,
    ImageEdit,
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  computed: {},
  methods: {
    tabChange(id) {
      this.activeTab = id;
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

.tab-head {
  display: flex;
  padding-left: 0 !important;
  list-style: none;
}
.tab-head li {
  border-bottom: 2px solid #ccc;
  width: calc(100% / 3);
}
.tab-head li:hover {
  background: #f5f5f5;
}
.tab-head li.active {
  border-bottom: 2px solid #1867c0;
  background: #ebf4ff;
}
.tab-head li button {
  padding: 12px 0;
  width: 100%;
}
.tab-body {
  padding: 16px 0;
}
.tab1,
.tab2,
.tab3 {
  padding: 12px;
  color: #fff;
}
.tab1 {
  background: #1867c0;
}
.tab2 {
  background: #4caf50;
}
.tab3 {
  background: #ff5252;
}
</style>
