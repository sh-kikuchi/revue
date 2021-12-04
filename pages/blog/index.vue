<template>
  <div class="container">
    <h1 class="page-title text-center">Tech Blog</h1>
    <!-- langs配列からリストを表示 ...（2）-->
    <v-list>
      <v-list-item link v-for="lang in langsData" v-bind:key="lang.id">
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
    <iframe
      src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=pc_store&f=ifr&linkID=4d06146f4b4f62e7d49216adce72aa64&t=revue0f-22&tracking_id=revue0f-22"
      class="pc amazon-banner"
      width="728"
      height="90"
      scrolling="no"
      border="0"
      marginwidth="0"
      style="border: none"
      frameborder="0"
    ></iframe>
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
        // { id: 6, name: "闇鍋", link: "/phones/Samsung" },
        // { id: 7, name: "お茶の間", link: "/phones/Samsung" },
      ],
    };
  },
};
</script>
<style scoped>
.nuxt-link {
  color: black;
  text-decoration: none;
}
</style>
