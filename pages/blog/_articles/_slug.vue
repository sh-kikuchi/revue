
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
          <!--ナビゲーションバー-->
          <div class="navigation-bar">
            <v-icon>mdi-home</v-icon>
            <nuxt-link to="/" tag="a" class="navigation"> Home</nuxt-link
            ><span> ／ </span>
            <v-icon>mdi-fountain-pen</v-icon>
            <nuxt-link to="/blog" tag="a" class="navigation"> Blog</nuxt-link>
            <span> ／ </span>
            <v-icon>mdi-folder</v-icon>
            <nuxt-link to="{navigation}" tag="a" class="navigation">
              {{ dirParam }}</nuxt-link
            >
          </div>
        </div>
        <div class="md-content pa-4">
          <!-- マークダウンのレンダリング箇所 -->
          <nuxt-content :document="content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, redirect, route }) {
    console.log(route.path);
    var dir = route.path.split("/");
    var dirParam = dir[dir.length - 2];
    console.log(dirParam);

    const content = await $content("blog/" + dirParam)
      .where({ path: "/blog/" + dirParam + "/" + params.slug })
      .fetch();

    const navigation = "blog/" + dirParam;

    if (content.length > 0) {
      return {
        content: content[0],
        navigation,
        dirParam,
      };
    } else {
      redirect("/blog/" + dirParam);
    }
  },
};
</script>
<style scoped>
.navigation {
  color: black;
  text-decoration: none;
}
.navigation:hover {
  color: darkslategray;
}
.p-main-container {
  max-width: 820px;
  margin: 0 auto;
}
.article-header {
  text-align: center;
}
.md-content {
  background-color: rgb(241, 241, 243);
  border-radius: 15px;
}
input[type="file"] {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

label {
  padding: 10px 25px;
  margin: 0 0 10px;
  background: #aaa;
  color: #fff;
  display: inline-block;
  cursor: pointer;
}
</style>
