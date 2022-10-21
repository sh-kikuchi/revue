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
            <small>
              外部APIを利用すべくインストールしたパッケージの名前がGuzzle（ガズル）。暴飲暴食を彷彿させるその言葉に魅せられ（特に僕が）、ユニット名が決定
            </small>
            <ul>
              <li>「掲示板アプリ」Guzzle board 2021.8-2022.11</li>
            </ul>
          </div>
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
            本サイト「Re:Vue」のプロジェクト。ソロユニット的な感じではありますが、他の人の知恵と技術を積極的に取り入れて制作を続けていく所存でございます。今までもロゴ（名前のイニシャル「S」をモチーフにしたもの）の作成やカラーデザイン、単位換算のヴァリエーションなどで友人や知人にアドバイスをもらいながら作成して〼（2022-10-22）
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
