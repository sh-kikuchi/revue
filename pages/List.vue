<template>
  <div id="list">
    <h1 class="page-title">Drifter's List</h1>
    <h3 class="page-sub-title">やりたいことはあなたが選ぶ</h3>
    <h5 class="text-center">
      ブラウザにデータに保存していますので、<br />よくお使いになるブラウザで利用して下さい
    </h5>
    <form class="list-form">
      <input type="text" class="post-input" v-model="card" />
      <button @click="addCard">追加する</button>
    </form>
    <draggable v-model="lists" @end="onEnd">
      <div class="card" v-for="(list, index) in lists" :key="index">
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <v-card-text class="d-flex flex-no-wrap justify-space-between">
                <div class="list-index">{{ index + 1 }}</div>
                <div class="list-text">{{ list }}</div>
                <div>
                  <button class="btn btn-danger" @click="removeCard(index)">
                    ✖
                  </button>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      lists: [],
      card: null,
    };
  },
  mounted() {
    //mounted は値を取得し JSON の値を解析する
    if (localStorage.getItem("lists")) {
      try {
        this.lists = JSON.parse(localStorage.getItem("lists"));
      } catch (e) {
        localStorage.removeItem("lists");
      }
    }
  },
  methods: {
    addCard() {
      //もし未入力の場合
      if (!this.card) {
        return;
      }
      //カードをリストに追加
      this.lists.push(this.card);
      this.card = "";
      //データ保存
      this.saveLists();
    },
    removeCard(index) {
      //カード削除
      this.lists.splice(index, 1);
      //データ保存
      this.saveLists();
    },
    saveLists() {
      //JSONに格納するために文字列化
      const parsed = JSON.stringify(this.lists);
      //配列をJSON形式の文字列にして保存する
      localStorage.setItem("lists", parsed);
      console.log(localStorage);
    },
    //並べ替えの時にデータを保存
    onEnd() {
      window.localStorage.setItem("lists", JSON.stringify(this.lists));
    },
    created() {
      if (window.localStorage.getItem("lists")) {
        this.lists = JSON.parse(localStorage.getItem("lists"));
      }
    },
  },
};
</script>
<style scoped>
.list-form {
  width: 380px;
  margin: 10px auto;
  display: flex;
}
.post-input {
  width: 300px;
  padding-left: 2px;
  margin-right: 2px;
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  color: crimson;
}
</style>
