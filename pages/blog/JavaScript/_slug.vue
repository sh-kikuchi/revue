
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
                src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=revue0f-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297103680&linkId=21f25f149ba9671bcbaf040424c47be7"
              ></iframe>
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
    const content = await $content("blog/JavaScript")
      .where({ path: "/blog/JavaScript/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/JavaScript");
    }
  },
};
</script>
<style scoped>
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
