<template>
  <v-container fill-height tag="div" class="about-page">
    <v-row align-content="center">
      <v-col>
        <v-card class="mx-auto">
          <v-system-bar color="blue-grey" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-window-minimize</v-icon>
            <v-icon>mdi-window-maximize</v-icon>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-container>
            <v-row dense>
              <v-col>
                <div class="article-header">
                  <div width="300" class="text-center">
                    <v-avatar size="150" tile
                      >
                    <img src="@/assets/image/r_logo.png" alt="logo"
                    /></v-avatar>
                  </div>
                </div>
                <div class="ma-5">
                  <h3>Re:vue[rivjúː]</h3>
                  <p>【1】プログラミングで学習してきたことを振り返るアウトプットの場。【2】サイト制作者のVue.js（Nuxt.js）の学習スペース。ここだけの話、<b>Vue</b>.jsは一度心が折れたので、<b>Re</b>tryの場でもある。【3】本サイトのテーマは上記の想ひを込めつつ、「壮大な実験」（The Grand Experiments）をテーマに掲げ、Vue.jsを使ってどのようなモノが作れるのかという個人的な実験要素を盛り込んでいくものとなっている。<small>(Update 2021/12/25 3:36)</small>
                  </p>
                  <v-divider></v-divider>
                  <div width="300" class="text-center mt-3">
                                      <v-avatar size="50"
                      ><img src="@/assets/image/s_logo.png" alt="logo"
                  /></v-avatar>
                  <span class="text-center">きくち/kikuchi</span>
                  <!-- <p class="text-center pt-2">平成最初の戌/誕生花はブーゲンビリア</p> -->
                  <p class="text-center pt-2">1994.7.26/B型/獅子座</p>
                  <div class="text-center"></div>
                  <div>          <a
            class="link-color"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_Rz-F6RMqCKGTalCROlcjbXie6mdy39izCkQnFZrRISbefw/viewform"
            ><v-icon>mdi-email</v-icon>なにかあればコチラへ
          </a></div>

                  </div>


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
                      ><font-awesome-icon :icon="['fab', 'php']" />PHP7-8</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'laravel']"
                      />Laravel(5.5-9)</span
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
                      />MySQL</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        icon="database"
                      />SQLserver</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        icon="database"
                      />PostgresQL</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'vuejs']"
                      />Vue.js</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'vuejs']"
                      />Nuxt.js(2.x)</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'markdown']"
                      />Markdown</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'js']"
                      />Express.js</span
                    >
                  </v-chip>
                  <!-- <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'flutter']"
                      />Flutter(勉強中)</span
                    >
                  </v-chip>
                  <v-chip class="mt-1">
                    <span
                      ><font-awesome-icon
                        :icon="['fab', 'aws']"
                      />AWS(lambda,dynamoDB)</span
                    >
                  </v-chip> -->
                </div>
                <div>
                  <v-dialog v-model="dialog" scrollable max-width="600px">

          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" dark v-bind="attrs" v-on="on" class="d-block mt-5 mx-auto" >
              About This Site
            </v-btn>
          </template>
          <v-card style="height: 100%;">
            <div width="300" class="text-center">
              <v-avatar size="50"
                ><img src="@/assets/image/s_logo.png" alt="logo"
              /></v-avatar>
            </div>
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
                <h6>【アクセス解析ツールについて】</h6>
                <p>
                  当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは、Cookieを使用することで利用者のトラフィックデータを収集しています。利用者はブラウザの設定でCookie（クッキー）を無効にすることで、トラフィックデータの収集を拒否することができます。なお、トラフィックデータから利用者個人を特定することはできません。詳しくは<a
                    href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                    >Googleアナリティクス利用規約</a
                  >をご確認ください。（Cookieとは、利用者のサイト閲覧履歴を利用者のコンピュータにデータとして保存しておく仕組みのこと）
                </p>
                <h6>【本ポリシーの変更】</h6>
                <p>
                  当サイトは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく変更する場合があります。本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
                </p>
              </div>
            </div>
          </v-card>
        </v-dialog>

                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped>
.about-page {
  max-width: 820px;
}
.link-github {
  display: inline;
  width: 100%;
  font-size: 30px;
  color: black;
  text-align: right;
}
.about-text {
  font-size: 10px;
}
</style>
