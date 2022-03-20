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
          summery:
            "JavaScriptのフレームワークがVue.js。そしてVue.jsのフレームワークがNuxt.js",
        },
        {
          id: 4,
          name: "PHP/MySQL",
          link: "/blog/php",
          summery: "サーバーサイド言語とデータベース。CRUDを学ぶ",
        },
        {
          id: 5,
          name: "Laravel",
          link: "/blog/laravel",
          summery: "PHPのフレームワーク。",
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
