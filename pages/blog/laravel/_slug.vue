
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
  data() {
    return {
      page: 1,
      length: 0,
      lists: [],
      contents: [],
      pageSize: 10,
    };
  },
  mounted: function () {
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.contents = this.lists.slice(0, this.pageSize);
  },
  async asyncData({ store, $content, params }) {
    const contents = await $content("blog/laravel")
      .only(["title", "createdAt", "path"])
      .sortBy("createdAt", "desc")
      .skip(0)
      .limit(15)
      .fetch();

    return {
      lists: contents,
    };
  },
  methods: {
    pageChange(pageNumber) {
      this.contents = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    },
  },
};
</script>
<style scoped>
tag-div-nuxt-link {
  color: black;
  text-decoration: none;
}
</style>
