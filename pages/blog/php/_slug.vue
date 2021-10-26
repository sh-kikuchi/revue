
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const content = await $content("blog/php")
      .where({ path: "/blog/php/" + params.slug })
      .fetch();
    if (content.length > 0) {
      return {
        content: content[0],
      };
    } else {
      redirect("/blog/php");
    }
  },
};
</script>
