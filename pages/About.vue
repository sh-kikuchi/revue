<template>
  <v-container fill-height>
    <v-row align-content="center">
      <v-col cols="6" sm="12">
        <v-card class="mx-auto">
          <v-system-bar color="pink darken-2" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-window-minimize</v-icon>
            <v-icon>mdi-window-maximize</v-icon>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-container>
            <v-row dense>
              <v-col cols="6" sm="12">
                <div chass="article-header">
                  <div width="300" class="text-center">
                    <v-avatar size="50"
                      ><img src="@/assets/image/s_logo.png" alt="logo"
                    /></v-avatar>
                    <span class="text-center">きくち/kikuchi</span>
                  </div>
                  <p class="text-center">1994年7月26日、獅子座</p>
                </div>
                <div class="ma-5">
                  <h3>Re:vue[rivjúː]</h3>
                  　本サイト（Re:vue）は、プログラミングで学習してきたことを振り返るアウトプットの場（review）であると同時に、私のVue.js（Nuxt.js）の学習スペースです。Nuxt/contentを活用したブログをはじめ、ドラッグ＆ドロップができるリスト、APIと連携した本検索、スタイルレンダリングを利用することでCSSの効果を目で見ることが出来るコンテンツなどを用意しております。これらはVue.jsを使ってどのようなモノが作れるのかという個人的な実験要素を盛り込むことが主眼となっており、完成を追求するよりも「変化」し続けることに重きをおいております。<br />
                  　ブログについてはかねてよりEd-Techに興味があり、自分の学びが誰かの学びになればと思って書いていきます。文系出身で仕事をし始めた頃は初心者でしたので、同じ境遇の方々にもシンプルで理解しやすくまとめられると良いなと思っています。
                  　このサイトのテーマは「The Grand
                  EXperiments」。(´・ω・)壮大な実験...大きく出たな。興味の赴くまま、遊び心を持って作りこんで行きます（きっと...）。
                </div>
                <h3 class="text-center text-h6">Skills</h3>
                <div class="pg-lang text-center">
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon :icon="['fab', 'html5']" />HTML5
                    </span>
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon :icon="['fab', 'css3']" />CSS3
                    </span>
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'js']"
                      />JavaScript/jQuery</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon :icon="['fab', 'php']" />PHP7</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'laravel']"
                      />Laravel(5.5-8)</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'bootstrap']"
                      />Bootstrap</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        icon="database"
                      />MySQL/SQLserver</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'vuejs']"
                      />Vue.js(2.x)</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'markdown']"
                      />Markdown</span
                    >
                  </v-chip>
                </div>
                <div>
                  <v-btn color="Black d-block mt-5 mx-auto" dark>
                    <a href="https://github.com/sh-kikuchi" class="btn-github"
                      ><font-awesome-icon
                        :icon="['fab', 'github']"
                        class="mr-2"
                      />GitHub</a
                    >
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="mb-4">
        <h6>>>免責事項</h6>
        <hr />
        <p class="about-text">
          当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
        <h6>>>著作権について</h6>
        <hr />
        <p class="about-text">
          当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
        </p>
      </v-col>
    </v-row>
    <v-col class="text-center .justify-md-space-between" cols="6" sm="12">
      <VueSlickCarousel
        :arrows="true"
        :dots="false"
        :autoplay="true"
        :autoplaySpeed="5000"
      >
        <div>
          <v-avatar size="100"
            ><img src="@/assets/image/revue.png" alt="logo"
          /></v-avatar>
        </div>
        <div>
          <v-avatar size="100"
            ><img src="@/assets/image/osaka.jpg" alt="獅子君"
          /></v-avatar>
        </div>
        <div>
          <v-avatar size="100"
            ><img src="@/assets/image/fukui.png" alt="レッサー君"
          /></v-avatar>
        </div>
        <div>
          <v-avatar size="100"
            ><img src="@/assets/image/panda.jpg" alt="パンダら"
          /></v-avatar>
        </div>
      </VueSlickCarousel>
    </v-col>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "HelloWorld",
  components: { VueSlickCarousel },
};
</script>
<style scoped>
/* span {
  background-color: darkgreen;
  color: white;
  padding: 5px;
} */

.about-text {
  font-size: 10px;
}
</style>
