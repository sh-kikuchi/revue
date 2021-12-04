
<template>
  <div class="p-main-container">
    <div class="p-main-wrapper">
      <!-- メインのエリア -->
      <div id="l-center-area" class="ma-3">
        <div id="l-center-area" class="ma-3">
          <div chass="article-header">
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" max-width="800" class="mx-auto" dark>
                  <div chass="article-header">
                    <h1 class="c-article-title text-center">
                      {{ content.title }}
                    </h1>
                    <p class="c-article-descrition text-center">
                      {{ content.description }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
        <!-- PCの時だけサイドバー -->
        <div class="d-sm-none d-md-flex">
          <div class="content-body">
            <!-- マークダウンのレンダリング箇所 -->
            <nuxt-content :document="content" />
          </div>
          <div class="sidebar ml-3" style="width: 300px">
            <div class="sidebar-detail pc" style="width: 150px; margin: 0 auto">
              <p style="text-align: center">おすすめ図書</p>
              <iframe
                class="amazon-link"
                style="width: 120px; height: 240px"
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0"
                src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=revue0f-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07PS1ZJN6&linkId=9c9cd988e05761c325b6fbfe27e25082&bc1=000000&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"
              ></iframe>
              <iframe
                class="amazon-link"
                style="width: 120px; height: 240px"
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0"
                src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=revue0f-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07GRRVC3M&linkId=0d5eda0abfed6746eeac8bb40e20727b&bc1=000000&amp;lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- Amazonアソシエイト -->
      <iframe
        src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=pc_store&f=ifr&linkID=7ca0525393884aa872d2a306588d834c&t=revue0f-22&tracking_id=revue0f-22"
        class="amazon-link"
        width="300"
        height="250"
        scrolling="no"
        border="0"
        marginwidth="0"
        style="border: none"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const content = await $content("blog/html_css")
      .where({ path: "/blog/html_css/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/html_css");
    }
  },
};
</script>
<style scoped>
.article-header {
  text-align: center;
}
.amazon-link {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
}
/* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
@media only screen and (max-width: 750px) {
  .pc {
    display: none !important;
  }
  .sp {
    display: none !important;
  }
}
</style>
