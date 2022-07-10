<template>
  <div class="container tech-blog mt-5">
    <h1 class="page-title text-center mt-3">Tech Blog</h1>
    <!--ナビゲーションバー-->
    <div class="navigation-bar pt-1">
      <v-icon>mdi-home</v-icon>
      <nuxt-link to="/" tag="a" class="navigation"> Home</nuxt-link>
    </div>
    <!-- langs配列からリストを表示 ...（2）-->
    <v-list>
      <v-list-item
        link
        v-for="lang in langsData"
        v-bind:key="lang.id"
        tag="div"
        class="lang-list"
      >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <nuxt-link v-bind:to="lang.link" class="nuxt-link">{{
              lang.name
            }}</nuxt-link>
          </v-list-item-title>
          <v-list-item-subtitle>{{ lang.summery }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // メーカーのリスト ...（3）
      langsData: [
        {
          id: 1,
          name: "HTML/CSS",
          link: "/blog/html_css",
          summery: "マークアップ言語とデザインを学ぶ",
        },
        {
          id: 2,
          name: "JavaScript",
          link: "/blog/JavaScript",
          summery: "JavaScriptとjQueryを知る",
        },
        {
          id: 3,
          name: "Vue.js/Nuxt.js",
          link: "/blog/nuxt_vue",
          summery: "「Re:Vue」の解体新書とVueの学習ログ",
        },
        {
          id: 4,
          name: "PHP/MySQL",
          link: "/blog/php",
          summery: "我流フレームワークを作ってみる",
        },
        {
          id: 5,
          name: "Laravel",
          link: "/blog/laravel",
          summery: "個人開発での実装経験まとめ",
        },
        {
          id: 6,
          name: "Laravel×Vue",
          link: "/blog/vue_laravel",
          summery: "Vue.jsとLaravelの夢の共演",
        },
        {
          id: 7,
          name: "Flutter",
          link: "/blog/flutter",
          summery: "Dash、好きなキャラ。",
        },
        // {
        //   id: 99,
        //   name: "闇鍋",
        //   link: "/blog/yaminabe",
        //   summery: "カテゴライズ出来ぬ者たち",
        // },
      ],
    };
  },
};
</script>
<style scoped>
.tech-blog {
  max-width: 820px;
  margin: 0 auto;
}
.navigation {
  color: black;
  text-decoration: none;
}
.navigation:hover {
  color: darkslategray;
}
.nuxt-link {
  max-width: 820px;
  color: black;
  text-decoration: none;
}

.lang-list:nth-child(even) {
  background-color: rgb(241, 241, 243);
}
.lang-list:nth-child(odd) {
  background-color: rgb(225, 231, 238);
}
</style>
