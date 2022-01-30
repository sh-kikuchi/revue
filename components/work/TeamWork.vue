<template>
  <div id="teamWork">
    <v-card flat>
      <v-card-text>
        <div>
          <h2>Guzzle</h2>
          <hr />
          <br />
          <p>2021.8~</p>
          <div>
            会社の先輩と「掲示板アプリ」を作成するプロジェクトを立ち上げて、Laravel8で開発。制作に向けて、下北沢で作業していた時、NewsAPIを利用すべくインストールしたパッケージの名前がGuzzle（ガズル）。暴飲暴食を彷彿させるその言葉に魅せられ（特に僕が）、ユニット名に決定。「掲示板アプリ」Guzzle
            boardは1日1回のニュースが出されて、それに対してコメントが出来るようにしております。Laravelでバッチを作り、ニュースAPIの情報をDBに格納してアプリを作っております。アプリは公開中ですが、PC用です。
          </div>
          <v-btn elevation="2" tag="div" class="button">
            <a href="https://guzzle-keijiban.herokuapp.com/" target="_blank"
              >Guzzle board</a
            ></v-btn
          >
        </div>
      </v-card-text>
    </v-card>
    <v-card flat class="mt-6">
      <v-card-text>
        <div>
          <h2>Re:Vue</h2>
          <hr />
          <br />
          <p>2021.11~</p>
          <div>
            本サイト「Re:Vue」のプロジェクト。ソロユニット的な感じではありますが、他の人の知恵と技術を積極的に取り入れて制作を続けていく所存でございます。私の名前のイニシャルである「Ｓ」のロゴは作ってもらいました。本サイトのReadmeページで見れます。デザインの方のディレクションもお願いしたいと思う今日この頃（2022.01.30）
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TeamWork",
};
</script>
<style scoped>
.button {
  float: right;
  margin-bottom: 5px;
}
.button a {
  text-decoration: none;
  color: black;
}
</style>
