<template>
  <v-card flat>
    <div>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">個人サイト</div>
            <v-list-item-title class="text-h5 mb-1">
              mysite -Into the Wild-(改修中)
            </v-list-item-title>
            <v-list-item-subtitle
              >HTML,CSS,JavaScript/jQuery,MySQL,PHP</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          小さな趣味ではありますが、読書や音楽のプレイリスト、旅行の写真などをまとめたアルバム的なサイト。学生時代に日本近現代史を専攻していたので、そこで学んだことを新聞風にまとめたページも有り。PHPをメイン言語としており、CRUD機能や問い合わせフォームからメール送信出来るようにしたりと色々やってみたりしています。Re:VueがPublicであるとするなら、こちらはPrivate色が強いです。。。
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" scrollable max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="" dark v-bind="attrs" v-on="on"> image </v-btn>
            </template>
            <v-card>
              <v-card-title>2020.11-2022.3_legacy</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 100vh">
                <img
                  class="mx-auto mysite-img"
                  src="@/assets/image/IntotheWild.png"
                />
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
        <v-card-actions tag="div" v-if="kakushi">
          <v-btn outlined rounded text
            ><a
              href="http://sh21mysite.com/mysite/main/index.php"
              target="_blank"
            >
              Welcome
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">我流フレームワーク</div>
            <v-list-item-title class="text-h5 mb-1">
              The Elephant in the room
            </v-list-item-title>
            <v-list-item-subtitle>PHP8</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          フレームワークに頼らないで、諸機能を実装しようとするとどれくらい大変だろうという観点のもとで、認証やメール送信、CRUDなどを実装してみました。
        </v-card-text>
        <v-card-actions tag="div">
          <v-btn outlined rounded text
            ><a
              href="https://github.com/sh-kikuchi/the-elephant-in-the-room"
              target="_blank"
            >
              準備中
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">toolboxシリーズ</div>
            <v-list-item-title class="text-h5 mb-1"> kanban </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9（5.5~）,Vue3,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          アプリで「お道具箱」をつくるコンセプトで始めた自主企画ものが「toolbox」です。第1弾（緑アプリ）がトレロ風かんばんアプリです。個人向けのタスク管理で、wiki機能も搭載。並べ替えは出来るようにしましたが、本家のようにドラッグアンドドロップは出来ませんので悪しからず。緑を基調としたデザイン。
          <br />
          <div>
            <div>テストアカウント</div>
            <ul>
              <li>【email】test@test.com</li>
              <li>【password】testtest</li>
            </ul>
            <small>変更禁止</small>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://sk-kanban.herokuapp.com/" target="_blank">
              DEMO
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              toolboxシリーズ(legacy:-2021-4-2022.11)
            </div>
            <v-list-item-title class="text-h5 mb-1">
              smalltalk（ver.2）
            </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9（6~）,Bootstrap4,MySQL,HTML,CSS</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >->
              toolbox第2弾（青アプリ）。チャンネル毎に「お茶の間」トークslackライクなアプリ。</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a
              href="https://github.com/sh-kikuchi/toolbox-smalltalk"
              target="_blank"
            >
              github
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              toolboxシリーズ(legacy:-2021.6-2022.11)
            </div>
            <v-list-item-title class="text-h5 mb-1">
              bookstock
            </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9(8~),Bootstrap4,MySQL,HTML,CSS</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >->「toolbox」第3弾（赤アプリ）はテーマごとに纏めるブックメモアプリ。</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a
              href="https://github.com/sh-kikuchi/toolbox-bookstock"
              target="_blank"
            >
              github
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "PersonalWork",
  data() {
    return {
      kakushi: false,
      dialog: false,
    };
  },
  mounted: function () {
    document.addEventListener("keydown", this.inputKey);
  },
  beforeDestroy: function () {
    document.removeEventListener("keydown", this.inputKey);
  },
  methods: {
    inputKey(e) {
      const command = [192];
      let inputCommand = [];

      inputCommand.push(e.keyCode);

      let inputCommandLen = inputCommand.length;
      let inputCode = inputCommand[inputCommandLen - 1];
      let commandCode = command[inputCommandLen - 1];

      console.log(inputCommand);

      if (inputCode === commandCode) {
        if (inputCommandLen === command.length) {
          //v-ifによる表示切替
          this.kakushi = !this.kakushi;
          inputCommand.length = 0;
        }
      } else {
        inputCommand.length = 0;
      }
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}

.pg-lang {
  font-size: 16px;
}

.btn-github {
  text-decoration: none;
  color: white;
}

.kakushi {
  display: none;
}
.kakushi-active {
  display: block;
}
.mysite-img {
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
}
</style>
