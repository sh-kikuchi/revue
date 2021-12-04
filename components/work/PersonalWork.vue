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
          自分にフィットする本や音楽、そして旅行という逃避行（笑）など、プライベート感が爆発しているサイト。それに加えて、学生時代に研究していた日本近現代史をまとめたページもあり、研究成果を発表しています。まだお恥ずかしいので未公開。
        </v-card-text>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">toolboxシリーズ</div>
            <v-list-item-title class="text-h5 mb-1"> kanban </v-list-item-title>
            <v-list-item-subtitle
              >Laravel8（5.5~）,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          アプリで「お道具箱」をつくるコンセプトで始めた自主企画ものが「toolbox」です。第1弾（緑アプリ）がトレロ風かんばんアプリです。個人向けのタスク管理で、wiki機能も搭載。並べ替えは出来るようにしましたが、本家のようにドラッグアンドドロップは出来ませんので悪しからず。緑を基調としたデザイン。(email:test@test.com
          password:testtest ※パスワード変更はしないで下さい)
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://sk-kanban.herokuapp.com/"> DEMO </a></v-btn
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
              >Laravel8（6~）,Bootstrap,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          「toolbox」第2弾（青アプリ）。元々、TwitterのようなSNSアプリを作っていたのですが、グループトークを意識したアプリにリミックスしました。（ver.1はGit
          Hubでレガシーとして残している。）チャンネルを作って、それ毎に「お茶の間」トークを楽しめるようにしております。でも、たまには一人で居たい時も…。そんな時は「ひとりごと」を使ってぼそぼそ呟くことも可能です。必要かは別として。
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://toolbox-smalltalk.herokuapp.com/"> DEMO </a></v-btn
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
              >Laravel8,Bootstrap,jQuery,MySQL,HTML,CSS</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          「toolbox」第3弾（赤アプリ）はブックメモアプリ。自分で決めたテーマ毎に本の要約や引用をまとめられるもの。「自分が学生時代にレポートやレジュメを作成する中であったら便利だったな」という思いでつくってみました。複数の本から情報をまとめたい時には是非。
        </v-card-text>
        <v-card-actions>
          <v-btn outlined rounded text
            ><a href="http://sk-bookstock.herokuapp.com/"> DEMO </a></v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "PersonalWork",
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
</style>
