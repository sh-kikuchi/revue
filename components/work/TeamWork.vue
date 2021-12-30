<template>
  <v-card flat>
    <v-card-text>
      <div>
        <h2>Guzzle</h2>
        <hr />
        <br />
        <p>2021.8~</p>
        <p>
          プライベートでユニットを組んでアプリを作るという試みが実現しました。「掲示板アプリ」を作成するプロジェクトを立ち上げて、Laravel8で開発。制作に向けて、下北沢で作業していた時、NewsAPIを利用すべくインストールしたパッケージの名前がGuzzle（ガズル）。暴飲暴食を彷彿させるその言葉に魅せられ（特に僕が）、ユニット名に決定。【活動】Guzzle
          board(1日1回、ニュースのお題が出され、それに対してコメント出来る掲示板):NewsApi連携のためにGuzzleを使用、1日1つのお題が出るようなバッチ処理（DBの肥大化を防ぐために一定期間経ったらデータを削除するバッチも作成）
        </p>
        <!-- <a href="https://guzzle-keijiban.herokuapp.com/" class="float-right"
          >Guzzle掲示板</a
        > -->
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "TeamWork",
};
</script>
