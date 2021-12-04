
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
        <!-- マークダウンのレンダリング箇所 -->
        <nuxt-content :document="content" />
        <iframe
          src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=pc_store&f=ifr&linkID=7ca0525393884aa872d2a306588d834c&t=revue0f-22&tracking_id=revue0f-22"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          style="border: none margin: 0 auto"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const content = await $content("blog/laravel")
      .where({ path: "/blog/laravel/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/laravel");
    }
  },
};
</script>
<style scoped>
tag-div-nuxt-link {
  color: black;
  text-decoration: none;
}
.amazon-link {
  display: block;
  margin: 10px auto;
}
</style>
