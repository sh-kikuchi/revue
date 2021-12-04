<template>
  <v-container fill-height>
    <v-row align-content="center">
      <v-col>
      <iframe
        src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=pc_store&f=ifr&linkID=4d06146f4b4f62e7d49216adce72aa64&t=revue0f-22&tracking_id=revue0f-22"
        class="pc amazon-banner"
        width="728"
        height="90"
        scrolling="no"
        border="0"
        marginwidth="0"
        style="border: none text-align: center"
        frameborder="0">
      </iframe>
        <v-card class="mx-auto">
          <v-system-bar color="pink darken-2" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-window-minimize</v-icon>
            <v-icon>mdi-window-maximize</v-icon>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-container>
            <v-row dense>
              <v-col>
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
      <div class="mb-4 ml-2 mr-2">
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
        <div class="about-text">
          <h6>>>プライバシーポリシー</h6>
          <hr />
          <p>
            re:vue（以下、「当サイト」と言います。）では、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。
          </p>
          <h6>【個人情報の定義】</h6>
          <p>
            本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、メールアドレス等、特定の個人を識別することができるものをいいます。
          </p>
          <h6>【個人情報の管理と利用目的】</h6>
          <p>
            当サイトでは、利用者からのお問い合わせ等を通じて、利用者の氏名メールアドレス等の個人情報をご提供いただく場合があります。その場合は、以下に示す利用目的のために、適正に利用するものと致します。お預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
              <ul>
                <li>利用者からのお問い合わせ等に対応するため。</li>
                <li>
                  当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。
                </li>
                <li>
                  個人を識別できない形で統計データを作成し、当サイトの参考資料とするため。
                </li>
              </ul>
          </p>
          <h6>【個人情報の第三者提供】</h6>
          <p>
            利用者からお預かりした個人情報を、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人様の同意を得ずに第三者に提供することはありません。
          </p>
          <h6>【個人情報の開示・訂正・削除について】</h6>
          <p>
            利用者からお預かりした個人情報の開示・訂正・削除をご希望の場合は、ご本人様よりお申し出ください。適切な本人確認を行った後、速やかに対応させていただきます。
          </p>
          <!-- <h6>【アクセス解析ツールについて】</h6>
          <p>
            当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは、Cookieを使用することで利用者のトラフィックデータを収集しています。利用者はブラウザの設定でCookie（クッキー）を無効にすることで、トラフィックデータの収集を拒否することができます。なお、トラフィックデータから利用者個人を特定することはできません。詳しくは<a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              >Googleアナリティクス利用規約</a
            >をご確認ください。（Cookieとは、利用者のサイト閲覧履歴を利用者のコンピュータにデータとして保存しておく仕組みのこと）
          </p> -->
          <h6>【Amazonアソシエイト・プログラムについて】</h6>
          <p>当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。」
          </p>
          <h6>【本ポリシーの変更】</h6>
          <p>
            当サイトは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく変更する場合があります。本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
          </p>
        </div>
      </div>
    </v-row>
    <v-col class="text-center justify-md-space-between">
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
