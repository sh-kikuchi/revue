<template>
  <v-card flat>
    <div>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">個人サイト</div>
            <v-list-item-title class="text-h5 mb-1">
              mysite -Into the Wild-
            </v-list-item-title>
            <v-list-item-subtitle
              >HTML,CSS,JavaScript/jQuery,MySQL,PHP</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          小さな趣味ではありますが、読書や音楽のプレイリスト、旅行の写真などをまとめたアルバム的なサイト。学生時代に日本近現代史を専攻していたので、そこで学んだことを新聞風にまとめたページも有り。PHPをメイン言語としており、CRUD機能や問い合わせフォームからメール送信出来るようにしたりと色々やってみたりしています。Re:VueがPublicであるとするなら、こちらはPrivate色が強いです。。。
        </v-card-text>

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
            <div class="text-overline mb-4">toolboxシリーズ</div>
            <v-list-item-title class="text-h5 mb-1"> kanban </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9（5.5~）,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          アプリで「お道具箱」をつくるコンセプトで始めた自主企画ものが「toolbox」です。第1弾（緑アプリ）がトレロ風かんばんアプリです。個人向けのタスク管理で、wiki機能も搭載。並べ替えは出来るようにしましたが、本家のようにドラッグアンドドロップは出来ませんので悪しからず。緑を基調としたデザイン。(テストアカウント_email:test@test.com
          password:testtest ※パスワード変更はしないで下さい)
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
            <div class="text-overline mb-4">toolboxシリーズ</div>
            <v-list-item-title class="text-h5 mb-1">
              smalltalk（ver.2）
            </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9（6~）,Bootstrap,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          「toolbox」第2弾（青アプリ）。元々、TwitterのようなSNSアプリを作っていたのですが、グループトークを意識したアプリにリミックスしました。（ver.1はGit
          Hubでレガシーとして残している。）チャンネルを作って、それ毎に「お茶の間」トークを楽しめるようにしております。でも、たまには一人で居たい時も…。そんな時は「ひとりごと」を使ってぼそぼそ呟くことも可能です。必要かは別として。[テストアカウント_1)
          email:test@test.com password:testtest 2) email:test2@test.com
          password:test2test2]
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://toolbox-smalltalk.herokuapp.com/" target="_blank">
              DEMO
            </a></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">toolboxシリーズ</div>
            <v-list-item-title class="text-h5 mb-1">
              bookstock
            </v-list-item-title>
            <v-list-item-subtitle
              >Laravel9(8~),Bootstrap,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          「toolbox」第3弾（赤アプリ）はブックメモアプリ。自分で決めたテーマ毎に本の要約や引用をまとめられるもの。「自分が学生時代にレポートやレジュメを作成する中であったら便利だったな」という思いでつくってみました。複数の本から情報をまとめたい時には是非。(テストアカウント_email:test@test.com
          password:testtest )
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://sk-bookstock.herokuapp.com/" target="_blank">
              DEMO
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
</style>
